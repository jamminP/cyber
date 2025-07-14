function BottomBanner() {
  return (
    <div className='relative h-[400px] w-full overflow-hidden'>
      <img
        src='/image/Banner_Sale.png'
        alt='banner_image'
        className='absolute inset-0 h-full w-full object-cover'
      />
      <div className='relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white'>
        <h2 className='text-4xl font-thin md:text-6xl'>
          Big Summer <span className='font-semibold'>Sale</span>
        </h2>
        <p className='mt-4 text-sm text-[#787878] md:text-base'>
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className='mt-6 rounded-[10px] border-2 border-white px-18 py-4.5 transition hover:bg-white hover:text-black'>
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default BottomBanner;
