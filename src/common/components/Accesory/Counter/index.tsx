"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const Counter = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [amount, setAmount] = useState(params.get(`amount`) || "0");

  const handleDecrement = () => {
    const newAmount = Number(amount) - 1;

    if (newAmount <= 0) {
      params.delete("amount");
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
    params.set("amount", newAmount.toString());
    replace(`?${params.toString()}`, { scroll: false });
    setAmount(newAmount.toString());
  };

  return (
    <li className="flex justify-between gap-3 max-w-[222px] border border-gray-secondary rounded-lg my-4 h-[50px] items-center">
      <span
        className="cursor-pointer w-[76px] flex items-center justify-center text-secondary text-p font-bold"
        onClick={handleDecrement}
      >
        -
      </span>
      <p className="border-x border-gray-secondary w-[70px] flex items-center justify-center text-secondary text-p font-bold h-full">
        {amount}
      </p>
      <span
        className="cursor-pointer w-[76px] flex items-center justify-center text-secondary text-p font-bold"
        onClick={handleIncrement}
      >
        +
      </span>
    </li>
  );
};

export default Counter;
