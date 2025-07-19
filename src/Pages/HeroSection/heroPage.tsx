import HeroImg from "../../../public/logo/hero image.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[40rem] bg-[#111827] text-white">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-[400px] md:h-auto">
        <img 
          src={HeroImg} 
          alt="Winter Jacket" 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-20 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Bring the <br /> warmth.
        </h1>
        <p className="text-sm md:text-base text-gray-300">
          Everyone needs a good winter jacket. <br />
          Find yours with our collection and more.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
          Shopping Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
