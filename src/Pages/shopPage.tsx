import main from "../../public/Products/shop page.jpg";
import Products from "../component/Shop/products";
import SortBy from "../component/sortBy";
import ToolBar from "../component/toolBar";

const ShopPage = () => {
  return (
    <>
      <section className="px-4 md:px-[160px]">
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
            <span>One click away</span>
            <h1>For the best Deal's</h1>
          </div>
        </div>
        {/* Toolbar Component */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 ">
          <ToolBar />
          <SortBy/>
        </div>
        <Products/>
      </section>
    </>
  );
};

export default ShopPage;
