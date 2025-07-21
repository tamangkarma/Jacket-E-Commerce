import HeroImg from "/logo/hero image.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#111827] text-white">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 md:h-[40rem]">
        <img 
          src={HeroImg} 
          alt="Winter Jacket" 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side - Content */}
      <aside className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-20 space-y-6">
        <h1 className="text-h4 md:text-h2  Poppins">
          Bring the <br /> warmth.
        </h1>
        <p className="text-text5 md:text-text3 Poppins text-gray-300">
          Everyone needs a good winter jacket. <br />
          Find yours with our collection and more.
        </p>
        <button className="bg-blue-500 text-text5 md:text-text4 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
          Shopping Now
        </button>
      </aside>
    </section>
  );
};

export default HeroSection;
