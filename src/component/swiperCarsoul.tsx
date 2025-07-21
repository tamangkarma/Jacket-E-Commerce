// components/ProductCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";    
import { FaStar } from "react-icons/fa6";
import { products } from "../Pages/HeroSection/ProductCarsoul/data";

export default function ProductCarousel() {
  return (
    <section className="w-full px-[50px] max-w-7xl mx-auto py-8">
      <h2 className="text-h5 Poppins mb-6">Just In</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover"
              />
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-white text-black text-text19 Inter px-2 py-1 w-14 text-center rounded">
                  NEW
                </span>
              )}
              <button className="absolute top-56 min-w-60 left-1/2 transform -translate-x-1/2 bg-black text-white text-button-sm px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all">
                Add to cart
              </button>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({
                    length: Math.floor(Math.random() * 5) + 1,
                  }).map((_, i) => (
                    <span key={i}><FaStar/></span>
                  ))}
                </div>

                <h3 className="text-text13">{product.title}</h3>
                <p className="text-gray-600 font-medium">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
