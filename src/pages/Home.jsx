import useMeta from '@/hooks/useMeta';
import MainBanner from '@/components/homes/MainBanner';
import SecondaryBanners from '@/components/homes/SecondaryBanners';
import CategoryList from '@/components/homes/CategoryList';
import ProductGrid from '@/components/homes/ProductGrid';
import FeaturedCategories from '../components/homes/FeaturedCategories';
import BottomBanner from '../components/homes/BottomBanner';

function Home() {
  useMeta({
    title: 'Cyber Store - Home',
    description: 'Shop the latest tech gadgets at Cyber Store.',
    keywords: 'Cyber Store, iPhone, PS5, Macbook, Electronics',
    ogImage: 'https://cyber-indol.vercel.app/images/og-home.jpg',
  });

  return (
    <div className=''>
      {/* 6개의 components가 들어와야함. */}
      <MainBanner />
      <SecondaryBanners />
      <CategoryList />
      <ProductGrid />
      <FeaturedCategories />
      <BottomBanner />
    </div>
  );
}

export default Home;
