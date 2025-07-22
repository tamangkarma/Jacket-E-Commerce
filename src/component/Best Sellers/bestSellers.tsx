import { bestSellersData } from "./data"

const BestSellers = () => {
  return (
    <>
    <section className="md:px-[160px] px-4 py-10">
        <h1 className="text-center Poppins text-h4">Best Sellers</h1>
        {/* Best Sellers Products Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-6">
            {bestSellersData.map((product, idx) => (
                <div key={idx} className="">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full object-cover"
                    />
                    <h2 className="text-text13 Inter">{product.title}</h2>
                    <p className="text-text12">${product.price}</p>
                </div>
            ))}
        </div>
    </section>
      
    </>
  )
}

export default BestSellers
