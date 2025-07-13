function MoblieFooter() {
  return (
    <div className='flex flex-col items-center justify-center'>
      {/* 큰 외각 */}
      <div className='h-[592px] w-[311px] gap-8'>
        {/* logo & content */}
        <div>
          <img
            src='/logo/Color-White.png'
            alt='logo'
            className='p mx-auto h-[32px] w-[96px] md:mx-0'
          />
          <div className='mt-6 h-[48px] w-[311px] text-[13px] leading-6 font-normal'>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </div>
        </div>

        <div className='h-[464px] w-[311px] gap-8'>
          {/* service */}
          <div className='flex h-[216px] w-[295.5px] flex-col items-center justify-center gap-2'>
            <p className='text-base font-semibold'>Services</p>
            <button className='text-left text-sm font-light'>
              Bouns program
            </button>
            <button className='text-left text-sm font-light'>Gift cards</button>
            <button className='text-left text-sm font-light'>
              Credit and payment
            </button>
            <button className='text-left text-sm font-light'>
              Service contracts
            </button>
            <button className='text-left text-sm font-light'>
              Non-cash account
            </button>
            <button className='text-left text-sm font-light'>Payment</button>
          </div>
          <div className='flex h-[216px] w-[295.5px] flex-col items-center justify-center gap-2'>
            <p className='text-base font-semibold'>Assistance to the buyer</p>
            <button className='text-left text-sm font-light'>
              Find an order
            </button>
            <button className='text-left text-sm font-light'>
              Terms of delivery
            </button>
            <button className='text-left text-sm font-light'>
              Exchange and return of goods
            </button>
            <button className='text-left text-sm font-light'>Guarantee</button>
            <button className='text-left text-sm font-light'>
              Frequently asked questions
            </button>
            <button className='text-left text-sm font-light'>
              Terms of use of the site
            </button>
          </div>
        </div>
      </div>
      {/* 최하단 social link */}
      <div className='flex h-[24px] w-[173px] justify-between'>
        <img
          src='/Icon/16px/Twitter.png'
          alt='twitter'
          className='h-[24px] w-[24px]'
        />
        <img
          src='/Icon/16px/Facebook.png'
          alt='Facebook'
          className='h-[24px] w-[24px]'
        />
        <img
          src='/Icon/16px/Tiktok.png'
          alt='Tiktok'
          className='h-[24px] w-[24px]'
        />
        <img
          src='/Icon/16px/Instagram.png'
          alt='Instagram'
          className='h-[24px] w-[24px]'
        />
      </div>
    </div>
  );
}

export default MoblieFooter;
