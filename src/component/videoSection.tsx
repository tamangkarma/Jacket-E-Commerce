import Video from "../../public/Banners/video promo.png";

const VideoSection = () => {
  return (
    <section className="px-10 md:px-40 py-10">
      {/* Text Content */}
      <div className="text-center mb-6">
        <p className="text-text20 mb-2 Inter text-secondary-blue">PROMOTION</p>
        <h1 className="text-h5 mb-2 Poppins">Winter Collections</h1>
        <p className="text-text5 Inter">Introducing the new winter jackets.</p>
      </div>

      {/* Image */}
      <div className="w-full">
        <img
          src={Video}
          alt="Winter Promotion Video"
          className="w-full h-[23rem] md:h-auto object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default VideoSection;
