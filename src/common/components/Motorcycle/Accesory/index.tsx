"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";

const Accesory = ({ price, name, id }: { name: string; price: string; id: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [amount, setAmount] = useState(params.get(`${name}`) || "0");

  const handleDecrement = () => {
    let newAmount = Number(amount) - 1;

    if (newAmount < 1) {
      params.delete(`${id}`);
      replace(`?${params.toString()}`, { scroll: false });
      setAmount("0");

      return;
    }

    setParamsAndState(newAmount, params);
  };

  const handleIncrement = () => {
    const newAmount = Number(amount) + 1;

    setParamsAndState(newAmount, params);
  };

  const setParamsAndState = (newAmount: number, params: any) => {
    params.set(`${id}`, newAmount.toString());
    replace(`?${params.toString()}`, { scroll: false });
    setAmount(newAmount.toString());
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      <li className="flex justify-between">
        <p className="my-2 text-p text-primary font-medium cursor-pointer w-fit">
          {name} ${price}
        </p>
        <div className="flex gap-3">
          <span className="cursor-pointer" onClick={handleDecrement}>
            -
          </span>
          <p>{amount}</p>
          <span className="cursor-pointer" onClick={handleIncrement}>
            +
          </span>
        </div>
      </li>
    </Suspense>
  );
};

export default Accesory;
