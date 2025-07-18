interface props {
    name: string
}

import { FaArrowRight } from "react-icons/fa6";

const Button = ({name}:props) => {
  return (
    <div>
      <button className="hidden md:flex items-center group border-white border-b-[1px] pb-1 mb-[2px] m-2 text-text13 gap-2">
        {name}
        <FaArrowRight className="text-text13 transform transition-transform duration-200 group-hover:translate-x-1 " />
      </button>
    </div>
  );
};

export default Button;
