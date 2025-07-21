import { FaArrowRight } from "react-icons/fa";

const JoinNews = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <p className="mb-3 text-center text-gray-700">
Subscribe our newsletter to get more deals, new products and promotions      </p>
      <div className="relative">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 pr-12 rounded-full border Poppins border-gray-300 bg-[#E8ECEF] focus:outline-none placeholder:text-sm"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
        >
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default JoinNews;
