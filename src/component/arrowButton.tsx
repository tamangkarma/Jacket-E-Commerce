import React from "react";
import Arrow from "../../public/logo/arrow-right.svg"

interface ArrowButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  label = "Collections",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center mb-[6px] text-white text-button-xs relative ${className}`}
    >
      <span className="text-xs">{label}</span>
      <img src={Arrow} alt="" className="ml-2  transition-transform group-hover:translate-x-1" />

      <span className="absolute Inter top-5  w-full h-[1px] bg-white">
      </span>
    </button>
  );
};

export default ArrowButton;
