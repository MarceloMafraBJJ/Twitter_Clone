import React from "react";

interface Props {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disable?: boolean;
  outLine?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disable,
  outLine,
}) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={`
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-full
      font-semibold
      hover:opacity-80
      transition
      border-2
      ${fullWidth ? "w-full" : "w-fit"} 
      ${
        secondary
          ? "bg-white text-black border-black"
          : "bg-sky-500 text-white border-sky-500"
      } 
      ${large ? "text-xl px-5 py-3" : "text-lg px-4 py-2"} 
      ${outLine ? "bg-transparent border-white text-white" : ""}
  `}
    >
      {label}
    </button>
  );
};

export default Button;
