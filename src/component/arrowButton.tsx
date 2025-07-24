import React from "react";
import { HiArrowRight } from "react-icons/hi";


interface ArrowButtonProps {
  label?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  label = "Collections",
  onClick,
  variant,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center mb-[6px]  text-button-xs relative ${className}`}
    >
      <span
        className={`text-xs ${
          variant === "primary" ? "text-white" : "text-black"
        }`}
      >
        {label}
      </span>
      <HiArrowRight
        
        className={`ml-2 transition-transform group-hover:translate-x-1 ${
          variant === "primary" ? "text-white" : "text-black"
        }`}
      />
      <span
        className={`absolute Inter top-5  w-full h-[1px] ${
          variant === "primary" ? "bg-white" : "bg-black"
        } `}
      ></span>
    </button>
  );
};

export default ArrowButton;
