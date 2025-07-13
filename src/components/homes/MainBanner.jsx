function MainBanner() {
  return (
    <div className='flex h-[632] w-screen items-center justify-center gap-20 bg-[#211C24]'>
      {/* text-place */}
      <div className='text-white'>
        <p className='font-semibold opacity-60'>Pro.Beyond.</p>
        <p className='text-[96px]'>
          <span className='font-thin'>IPhone 14 </span>
          <span className='font-bold'>Pro</span>
        </p>
        <p className='mb-5 text-[18px] font-medium text-[#909090]'>
          Created to change everything for the better. For everyone
        </p>
        <button className='h-[56px] w-auto gap-2 rounded-[6px] border-[2px] border-solid px-[56px] py-[16px] transition-colors duration-300 hover:bg-[#493d4e]'>
          Skip Now
        </button>
      </div>
      {/* image-place */}
      <img src='/image/Iphone Image.png'></img>
    </div>
  );
}

export default MainBanner;
