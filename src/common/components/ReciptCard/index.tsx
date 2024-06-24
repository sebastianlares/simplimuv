import Image from "next/image";
import React from "react";

const ReciptCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Image
        alt="Icono de orden recibida"
        height={40}
        src="/assets/icons/ok.svg"
        width={40}
      />
      <h1 className="text-h4 font-bold text-primary mt-4">
        We&apos;ve Recieved Your Request!
      </h1>
      <p className="text-p text-gray-primary mb-10">
        A dealer will follow up with next steps regarding your reservation.
      </p>
      <div className="border border-gray-secondary rounded-lg p-4 w-[540px]">
        {children}
      </div>
    </>
  );
};

export default ReciptCard;
