"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import ROUTES from "@/common/constants/routes";

import Icon from "../Icon";
import Chip from "../../Chip";
import ColorBadge from "../ColorBadge";

interface Card {
  id: string;
  name: string;
  seller: string;
  price: string;
  currency: string;
  image: string;
  color: {
    name: string;
    hex: string;
  };
  details: { height: string; category: string; motor: string; [key: string]: string };
  isFeatured: boolean;
  hasDiscount: boolean;
  isOnOffer: boolean;
  variantId: string;
}

const Card: React.FC<Card> = ({
  color,
  name,
  currency,
  price,
  seller,
  image,
  details,
  id,
  variantId,
  isFeatured,
  hasDiscount,
}) => {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const handleOnClick = () => {
    const params = new URLSearchParams(searchParams);

    params.set("version", variantId);
    params.set("color", color.name);
    push(`${ROUTES.motos}/${id}/version?${params.toString()}`);
  };

  return (
    <Suspense>
      <div
        className="w-[260px] h-[331px] border border-gray-300 justify-items-center items-center rounded-lg flex flex-col hover:scale-105 cursor-pointer transition-all hover:shadow-md relative p-[5px] gap-[7px]"
        data-testid="moto-card"
        onClick={handleOnClick}
      >
        {/* hardcoded value since it cant be obtanied from the api */}
        {isFeatured ? (
          <Chip content="NOVEDAD" />
        ) : hasDiscount ? (
          <Chip content="-10%" />
        ) : null}
        {hasDiscount ? (
          <Image
            alt="offer Icon"
            className="absolute right-[-10px] top-[-6px]"
            height={80}
            src={"/assets/icons/offer.svg"}
            width={80}
          />
        ) : null}
        <Image alt="moto" height={128} src={image} width={225} />
        <ColorBadge color={color.hex} content={color.name} />
        <h4 className="text-h5 font-bold ">{name}</h4>
        <div className="flex items-center gap-1 ">
          <p className="text-small text-gray-primary leading-none">{currency}</p>

          <p className="text-h6 font-bold text-gray-primary leading-none w-[50px]">
            ${price}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Image alt="icon" height={12} src={"/assets/icons/map.svg"} width={12} />
          <p className="text-small text-gray-primary leading-none">{seller}</p>
        </div>
        <div className="grid grid-cols-3 border border-gray-300 border-r-0 rounded-md ">
          {Object.entries(details).map((i) => {
            const [key, value] = i;

            return <Icon key={value} title={key} value={value} />;
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default Card;
