import Banner from "../component/Banner/banner"
import BestSellers from "../component/Best Sellers/bestSellers"
import Category from "../component/ProductCategory/category"
import BrandSection from "./HeroSection/Brands/BrandSection"
import HeroSection from "./HeroSection/heroPage"
import ProductsCarsoul from "./HeroSection/ProductCarsoul/productsCarsoul"

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <BrandSection/>
    <ProductsCarsoul/>
    <Category/>
    <Banner/>
    <BestSellers/>
    </>
  )
}

export default HomePage
