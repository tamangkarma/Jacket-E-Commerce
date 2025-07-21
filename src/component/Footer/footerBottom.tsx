
import { FooterBottomData } from "./data";

const FooterBottom = () => {
  return (
    <div className=" border-t border-gray-300 py-6 px-4 md:px-[95px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="text-sm text-gray-600 flex flex-wrap items-center justify-center gap-4">
          <span>Copyright © {new Date().getFullYear()} 3legant. All rights reserved</span>
          <span className="hidden md:inline-block">|</span>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        {/* Right Section - Payment Icons */}
        <div className="flex items-center gap-3">
          {FooterBottomData.map((payement, idx) => (
            <img
              key={idx}
              src={payement.image}
              alt={`Payment Method ${idx + 1}`}
              className="w-10 h-10 object-contain hover:scale-110 transition-transform"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
