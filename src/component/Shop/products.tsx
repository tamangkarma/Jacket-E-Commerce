import { useState } from "react";
import starIcon from "../../../public/logo/Star Icon.svg";
import { ShopProductData } from "./shopProduct";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Products = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ShopProductData.map((product) => {
          const isWishlisted = wishlist.includes(product.id);

          return (
            <div
              key={product.id}
              className="relative flex bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow h-[350px]"
            >
              {/* Image Section */}
              <div className="relative w-1/2 h-full group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 rounded-md text-sm font-medium">
                    NEW
                  </div>
                )}
                {product.isHot && (
                  <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 rounded-md text-sm font-medium">
                    HOT
                  </div>
                )}
                {product.discount && product.discount > 0 && (
                  <div className="absolute top-12 left-3 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                    -{product.discount}%
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="w-1/2 p-4 flex flex-col justify-between h-full">
                <div>
                  {/* Rating */}
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: product.rating || 3 }).map((_, i) => (
                      <img
                        key={i}
                        src={starIcon}
                        alt={`Star ${i + 1}`}
                        className="w-4 h-4"
                      />
                    ))}
                  </div>

                  {/* Title + Mobile Wishlist */}
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-text12 md:text-text9">{product.title}</h2>

                    {/* Mobile-only Wishlist Icon */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`md:hidden ml-2 transition ${
                        isWishlisted ? "text-red-500" : "text-gray-500"
                      }`}
                    >
                      {isWishlisted ? (
                        <AiFillHeart size={20} />
                      ) : (
                        <AiOutlineHeart size={20} />
                      )}
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-base font-semibold my-2">
                    {product.discount && product.discountedPrice ? (
                      <>
                        <span>${product.discountedPrice.toFixed(2)}</span>
                        <span className="line-through text-gray-500 ml-3 text-sm font-normal">
                          ${product.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span>${product.price.toFixed(2)}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-text6 md:text-text6 text-gray-600 mb-3">
                    {product.desc}
                  </p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col gap-2 mt-auto">
                  <button className="bg-black text-white py-3 text-button-sm rounded-xl hover:bg-gray-800 transition">
                    Add to cart
                  </button>

                  {/* Desktop-only Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`hidden md:flex items-center justify-center gap-2 border py-2 rounded-xl transition ${
                      isWishlisted
                        ? "text-red-500 border-red-500 bg-red-50"
                        : "text-black border-black hover:bg-gray-100"
                    }`}
                  >
                    {isWishlisted ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center my-10">
        <button className="mt-4 px-6 py-2 text-button-xs text-black border border-gray-400 rounded-3xl shadow hover:bg-gray-200 transition">
          Show more
        </button>
      </div>
    </section>
  );
};

export default Products;
