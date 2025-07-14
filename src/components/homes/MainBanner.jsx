function MainBanner() {
  return (
    <div className='flex w-screen flex-col items-center justify-center bg-[#211C24] px-4 py-10 md:h-[632px] md:flex-row md:px-20'>
      <div className='max-w-xl text-center text-white md:text-left'>
        <p className='font-semibold opacity-60'>Pro.Beyond.</p>
        <p className='text-[48px] leading-tight sm:text-[64px] md:text-[96px]'>
          <span className='font-thin'>IPhone 14 </span>
          <span className='font-bold'>Pro</span>
        </p>
        <p className='mt-2 mb-5 text-[16px] font-medium text-[#909090] md:text-[18px]'>
          Created to change everything for the better. For everyone
        </p>
        <button className='h-[48px] rounded-[6px] border-2 px-8 py-2 transition-colors duration-300 hover:bg-[#493d4e] md:h-[56px] md:px-[56px] md:py-[16px]'>
          Skip Now
        </button>
      </div>

      <div className='w-screen md:w-[500px]'>
        <img
          src='/image/Iphone Image.png'
          alt='iPhone 14 Pro'
          className='h-full w-screen'
        />
      </div>
    </div>
  );
}

export default MainBanner;
