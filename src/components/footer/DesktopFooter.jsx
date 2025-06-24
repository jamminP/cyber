function DesktopFooter() {
  return (
    <div className='flex w-screen justify-center bg-black'>
      <div className='w-full max-w-[1200px] px-6'>
        <div className='flex flex-col items-start justify-center gap-24 md:flex-row'>
          {/* 왼쪽 */}
          <div className='flex w-[300px] flex-col gap-6 text-center md:text-left'>
            <img
              src='/logo/Color=White.png'
              alt='logo'
              className='h-auto w-[96px]'
            />
            <p className='text-sm leading-[24px] font-medium text-[#CFCFCF]'>
              We are a residential interior design firm located in Portland. Our
              boutique–studio offers more than
            </p>
            <div className='flex justify-center gap-4 md:justify-start'>
              <img src='/Icon/16px/Twitter.png' alt='twitter' />
              <img src='/Icon/16px/Facebook.png' alt='Facebook' />
              <img src='/Icon/16px/Tiktok.png' alt='Tiktok' />
              <img src='/Icon/16px/Instagram.png' alt='Instagram' />
            </div>
          </div>

          {/* 오른쪽 */}
          <div className='flex flex-col gap-16 md:flex-row'>
            <div className='flex min-w-[180px] flex-col gap-2'>
              <p className='text-base font-semibold'>Services</p>
              <button className='text-left text-sm font-light'>
                Bouns program
              </button>
              <button className='text-left text-sm font-light'>
                Gift cards
              </button>
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
            {/* Assistance to the buyer 영역 */}
            <div className='flex min-w-[180px] flex-col gap-2'>
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
              <button className='text-left text-sm font-light'>
                Guarantee
              </button>
              <button className='text-left text-sm font-light'>
                Frequently asked questions
              </button>
              <button className='text-left text-sm font-light'>
                Terms of use of the site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopFooter;
