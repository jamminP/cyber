import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  MdDevices,
  MdWeekend,
  MdDirectionsWalk,
  MdCheckroom,
  MdWatch,
  MdFaceRetouchingNatural,
  MdSportsSoccer,
  MdMenuBook,
} from 'react-icons/md';

const categories = [
  { name: 'Electronics', icon: MdDevices },
  { name: 'Furniture', icon: MdWeekend },
  { name: 'Shoes', icon: MdDirectionsWalk },
  { name: 'Clothes', icon: MdCheckroom },
  { name: 'Accessories', icon: MdWatch },
  { name: 'Beauty', icon: MdFaceRetouchingNatural },
  { name: 'Sports', icon: MdSportsSoccer },
  { name: 'Books', icon: MdMenuBook },
];

function CategoryList() {
  return (
    <div className='w-full bg-[#FAFAFA] px-40 py-20'>
      <h2 className='mb-10 text-3xl font-medium'>Browse By Category</h2>

      <Swiper
        spaceBetween={16}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div className='flex h-[150px] flex-col items-center justify-center rounded-md bg-[#f3f3f3] px-4 hover:bg-gray-200'>
              <cat.icon size={50} />
              <p className='mt-2 text-lg'>{cat.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoryList;
