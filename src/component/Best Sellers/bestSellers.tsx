import { bestSellersData } from "./data";
import starIcon from "../../../public/logo/Star Icon.svg";

const BestSellers = () => {
  return (
    <section className="relative md:px-[160px] px-4 py-10">
      <h1 className="text-center Poppins text-h4">Best Sellers</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-6">
        {bestSellersData.map((product) => (
          <div key={product.id} className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-cover"
            />

            {/* HOT Label */}
            {product.isHot && (
              <div className="absolute top-4 left-2 bg-white text-black px-3 py-1 rounded-md text-text21 Inter">
                HOT
              </div>
            )}

            {/* Discount Label */}
            {product.discount && product.discount > 0 && (
              <div className="absolute top-12 left-2 bg-green-500 text-white px-4 py-1 rounded-md text-text21 Inter">
                -{product.discount}%
              </div>
            )}

            {/* Stars */}
            <div className="flex items-center gap-1 my-2">
              {Array.from({ length: Math.floor(Math.random() * 5) + 1 }).map(
                (_, i) => (
                  <span key={i}>
                    <img src={starIcon} alt={`Star ${i + 1}`} />
                  </span>
                )
              )}
            </div>

            <h2 className="Inter text-text12">{product.title}</h2>

            <div className="text-text12 mt-2 flex items-center justify- gap-2">
              {product.discount && product.discountedPrice ? (
                <>
                  <span className="text-text13 ">
                    ${product.discountedPrice.toFixed(2)}
                  <span className="line-through text-text6 ml-4 text-gray-500">
                    ${product.price.toFixed(2)}
                  </span>
                  </span>
                </>
              ) : (
                <span>${product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
