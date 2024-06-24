"use client";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import ColorBadge from "../ColorBadge";

interface VersionCard {
  name: string;
  color: {
    name: string;
    hex: string;
  };
  price: string;
  details: {
    motor: string;
    power: string;
    id: string;
  };
  isActive?: boolean;
}

const VersionCard: React.FC<VersionCard> = ({
  color,
  price,
  name,
  details,
  isActive,
}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const borderColor = isActive ? "border-secondary" : "border-gray-300";

  const handleOnClick = () => {
    const params = new URLSearchParams(searchParams);

    params.set("version", details.id);
    params.set("color", color.name);
    replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Suspense>
      <div
        className={`border ${borderColor}  rounded-lg p-3 flex justify-between items-center cursor-pointer`}
        onClick={handleOnClick}
      >
        <div>
          <div className="flex items-center gap-3">
            <p className="text-h5 font-bold text-primary">{name}</p>
            <ColorBadge color={color.hex} content={color.name} />
          </div>
          <p className="text-gray-primary text-small text-wrap max-w-[60%]">
            {details.motor}
          </p>
          <p className="text-gray-primary text-small">{details.power}</p>
        </div>
        <p className="text-h5 font-bold text-primary">${price}</p>
      </div>
    </Suspense>
  );
};

export default VersionCard;
