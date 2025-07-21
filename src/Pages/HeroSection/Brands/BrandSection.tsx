import { brandLogo } from "../../../data/brandLogo";

const BrandSection = () => {
  return (
    <>
      <section className="bg-gray-100 flex flex-col items-center justify-center gap-2 h-[152px] md:px-[130px] ">
        
        <h1 className="text-text11 ">Trending Brands</h1>

        {/* Brands Logo */}
        <div className="flex gap-10 w-full h-[64px]">
          {brandLogo.map((value, idx) => (
            <div key={idx} className="flex flex-col items-center w-full">
              <img
                src={value.Image}
                alt={value.name}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BrandSection;
