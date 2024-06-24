"use client";
import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

import Chip from "../../Chip";

interface Card {
  id: string;
  name: string;
  price: string;
  currency: string;
  image: string;
  isFeatured: boolean;
  hasDiscount: boolean;
  isOnOffer: boolean;
}

const Card: React.FC<Card> = ({
  name,
  currency,
  price,
  image,
  id,
  isFeatured,
  hasDiscount,
}) => {
  const { push } = useRouter();
  const pathName = usePathname();

  const handleOnClick = () => {
    push(`${pathName}/${id}/`);
  };

  return (
    <div
      className="w-[260px] h-[274px] border border-gray-300 justify-items-center items-center rounded-lg flex p-3 flex-col hover:scale-105 cursor-pointer transition-all hover:shadow-md relative gap-3"
      data-testid="accesory-card"
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
      <Image alt="Accesorio" height={128} src={image} width={225} />
      <h4 className="text-h5 font-bold ">{name}</h4>
      <div className="flex items-center gap-1 ">
        <p className="text-small text-gray-primary leading-none">{currency}</p>

        <p className="text-h6 font-bold text-gray-primary leading-none w-[50px]">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Card;
