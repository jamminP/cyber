function SecondaryBanners() {
  return (
    <div>
      <div className='grid h-[600px] grid-cols-2'>
        <div className='grid grid-cols-2 grid-rows-2'>
          <div className='col-span-2 bg-[#fff]'>
            <div className='flex items-center gap-6'>
              <div className='w-[360px] flex-shrink-0'>
                <img
                  src='/image/PlayStation.png'
                  alt='playstation'
                  className='h-auto w-full'
                />
              </div>
              <div className='flex-1'>
                <p className='text-[49px] font-medium'>Playstation 5</p>
                <p className='mt-2 pr-2 text-[14px] font-medium text-[#909090]'>
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </div>
            </div>
          </div>
          <div className='flex h-[272px] items-center justify-center bg-[#ededed]'>
            <div className='flex-1/2'>
              <img src='/image/headphone.png' alt='air-pod' />
            </div>
            <div className='flex-1/2 text-[29px] font-light'>
              <p>Apple</p>
              <p>AirPods</p>
              <p className='font-bold'>Max</p>
              <p className='text-[14px]'>Computational audio.</p>
              <p className='text-[14px]'>Listen, it's powerful</p>
            </div>
          </div>

          <div className='flex h-[272px] bg-[#353535] text-white'>
            <div className='flex w-[150px] flex-shrink-0 items-center'>
              <img
                src='/image/image_36.png'
                alt='Vision Pro'
                className='h-auto w-full'
              />
            </div>
            <div className='ml-6 flex flex-col justify-center'>
              <p className='text-[28px] leading-tight font-light'>
                Apple <br />
                Vision <span className='font-bold'>Pro</span>
              </p>
              <p className='mt-2 text-[14px] leading-snug text-[#a3a3a3]'>
                An immersive way to <br />
                experience <br />
                entertainment
              </p>
            </div>
          </div>
        </div>
        <div className='flex h-[600px] justify-between bg-[#EDEDED]'>
          <div className='ml-12 flex w-1/2 flex-col items-start justify-center'>
            <h2 className='text-[64px] font-light'>
              Macbook
              <br />
              <span className='font-bold'>Air</span>
            </h2>
            <p className='mt-2 text-sm text-[14px] text-gray-500'>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className='mt-4 h-[56px] w-auto gap-2 rounded-[6px] border-[2px] border-solid px-[56px] py-[16px] transition-colors duration-300 hover:bg-[#a8a8a8]'>
              Skip Now
            </button>
          </div>
          <div className='flex w-1/2 justify-end'>
            <img src='/image/MacBook_Pro_14.png' alt='MacBook Pro 14'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondaryBanners;
