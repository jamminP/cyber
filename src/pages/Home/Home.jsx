import Banner from './homes/Banner';
import SmallerBanners from './homes/SmallerBanners';
import Category from './homes/Category';
import Products from './homes/Products';
import Banners from './homes/Banners';
import Banner2 from './homes/Banner2';

function Home(){
    return(
        <div>
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