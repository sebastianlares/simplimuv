/* eslint-disable no-unused-vars */
"use client";

const Input = ({
  value,
  error,
  onChange,
  label,
  name,
  type = "text",
}: {
  value: string;
  error: string | boolean;
  onChange: (e: any) => void;
  label: string;
  type?: string;
  name: string;
}) => {
  return (
    <>
      <label className="text-h6 font-bold text-primary" htmlFor={name}>
        {label}
      </label>
      <input
        className="border rounded-lg w-full h-50px p-4"
        id={name}
        name={name}
        placeholder={`${label}*`}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default Input;
