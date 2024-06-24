"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Button from "../Button";

const LinkButton = ({
  href,
  content,
  w = "w-full",
  clearParams = false,
}: {
  href: string;
  content: string;
  w?: string;
  clearParams?: boolean;
}) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const url = clearParams ? href : `${href}?${params}`;

  return (
    <Link href={url}>
      <Button content={content} w={w} />
    </Link>
  );
};

export default LinkButton;
