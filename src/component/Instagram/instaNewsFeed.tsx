import { instaData } from "./data";

const InstaNewsFeed = () => {
  return (
    <div className="md:px-[160px] px-6 py-2">
      <div className="text-center my-6">
        <p className="Inter text-text20 mb-3 text-[#6C7275]">NEWSFEED</p>
        <h1 className="text-h5 Poppins mb-3">Instagram</h1>
        <p className="Inter text-text6 mb-4">
          Follow us on social media for more discount & promotions
        </p>
        <span className="text-h7 Poppins text-[#6C7275]">
          @3legant_official
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-6">
        {instaData.map((value, idx) => (
          <div key={idx} className=" mb-4">
            <img
              src={value.image}
              alt={value.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstaNewsFeed;
