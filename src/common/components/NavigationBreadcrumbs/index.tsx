"use client";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = ({
  currentPath,
  removePath = null,
}: {
  currentPath: string;
  removePath?: string | null;
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const paths = pathName.split("/").filter(Boolean); // Split and remove any empty strings

  return (
    <Suspense>
      <ul className="flex items-center gap-2 mb-4">
        {paths.map((path: string, index: number) => {
          const isLast = index === paths.length - 1;
          const pathUrl = "/" + paths.slice(0, index + 1).join("/"); // Accumulate path up to current segment

          path = path.charAt(0).toUpperCase() + path.slice(1);
          if (path.toLocaleLowerCase().includes(removePath!)) return null;
          else
            return (
              <li key={pathUrl} className="cursor-pointer text-p text-gray-secondary">
                {index > 0 && " / "}
                {isLast ? null : (
                  <Link href={`${pathUrl}?${params}`}> &nbsp; {path}</Link>
                )}
              </li>
            );
        })}
        <li className="text-p text-primary font-bold">{currentPath}</li>
      </ul>
    </Suspense>
  );
};

export default Breadcrumbs;
