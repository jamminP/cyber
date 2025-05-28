import Banner from "../components/homes/Banner";
import SmallerBanners from "../components/homes/SmallerBanners";
import Category from "../components/homes/Category";
import Products from "../components/homes/Products";
import Banners from "../components/homes/Banners";
import Banner2 from "../components/homes/Banner2";

function Home() {
  return (
    <div className="hidden">
      {/* 6개의 components가 들어와야함. */}
      <Banner></Banner>
      <SmallerBanners></SmallerBanners>
      <Category></Category>
      <Products></Products>
      <Banners></Banners>
      <Banner2></Banner2>
    </div>
  );
}

export default Home;
