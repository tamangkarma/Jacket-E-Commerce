import BannerImg from "../../../public/Banners/banner2.svg";
import ArrowButton from "../arrowButton";

const Banner2 = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-[532px]">
      {/* Image - 50% width */}
      <div className="w-full md:w-1/2 h-full">
        <img
          src={BannerImg}
          alt="Sale Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content - 50% width */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12">
        <h1 className="text-text19 Inter text-secondary-blue">
          SALE UP TO <span className="">35% OFF</span>
        </h1>

        <p className="Poppins text-h5 mt-2">
        <span className="block">Hundreds of</span> new lower prices!
        </p>

        <p className="Inter text-text4 mt-4">
          Hurry up!!! Winter is coming!
        </p>

        <div className="mt-6">
          <ArrowButton label="Shop Now" />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
