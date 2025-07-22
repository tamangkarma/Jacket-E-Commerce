import Banner from "../component/Banner/banner"
import Banner2 from "../component/Banner/banner2"
import BestSellers from "../component/Best Sellers/bestSellers"
import InstaNewsFeed from "../component/Instagram/instaNewsFeed"
import Category from "../component/ProductCategory/category"
import Values from "../component/values"
import VideoSection from "../component/videoSection"
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
    <Banner2/>
    <VideoSection/>
    <InstaNewsFeed/>
    <Values/>
    </>
  )
}

export default HomePage
