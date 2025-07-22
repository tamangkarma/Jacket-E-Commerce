import ArrowButton from "../arrowButton";
import { BannerData } from "./data";

const Banner = () => {
  return (
    <>
      <section className="md:px-[160px] px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {BannerData.map((value, idx) => (
          <div key={idx} className="relative">
            <img
              src={value.image}
              alt={value.title}
              className="w-full object-cover"
            />

            <div className="absolute bottom-10 md:left-14 left-8">
              <h1 className="Poppins text-h5 text-white  mb-4">{value.title}</h1>
              <ArrowButton />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Banner;
