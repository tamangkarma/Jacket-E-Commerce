import ProductCard from "../productCard"
import { bestSellersData } from "./data"

const BestSellers = () => {
  return (
    <div>
<ProductCard title="Best Sellers" products={bestSellersData} showButton={false} />    </div>
  )
}

export default BestSellers
