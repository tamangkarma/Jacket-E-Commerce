import main from "../../public/Products/shop page.jpg";

const ShopPage = () => {
  return (
    <section className="px-4 md:px-[160px] py-10">
      <div className="relative w-full h-[500px] rounded overflow-hidden">
        {/* Background Image */}
        <img
          src={main}
          alt="Shop Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-hero  mb-8 shadow-lg">Shop Page</h1>
          <p className="text-lg md:text-text3 max-w-xl shadow-lg">
            Let's design the place you always imagined.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
