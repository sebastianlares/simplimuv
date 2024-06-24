"use client";

const Button = ({
  content,
  disabled = false,
  type = "button",
  w = "w-full",
  onClick,
}: {
  content: string;
  disabled?: boolean;
  type?: "button" | "submit";
  w?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${w} h-[50px] rounded-lg text-white ${disabled ? "bg-terciary" : "bg-secondary"}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
