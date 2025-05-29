function MoblieFooter() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* 큰 외각 */}
      <div className="w-[311px] h-[592px] gap-8">
        {/* logo & content */}
        <div>
          <img
            src="/logo/Color=White.png"
            alt="logo"
            className="w-[96px] h-[32px] mx-auto md:mx-0 p"
          />
          <div className="mt-6 text-[13px] leading-6 w-[311px] h-[48px] font-normal">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </div>
        </div>
        
        <div className="w-[311px] h-[464px] gap-8">
          {/* service */}
          <div className="w-[295.5px] h-[216px] gap-2 flex flex-col justify-center items-center">
            <p className="text-base font-semibold">Services</p>
            <button className="text-sm font-light text-left">
              Bouns program
            </button>
            <button className="text-sm font-light text-left">Gift cards</button>
            <button className="text-sm font-light text-left">
              Credit and payment
            </button>
            <button className="text-sm font-light text-left">
              Service contracts
            </button>
            <button className="text-sm font-light text-left">
              Non-cash account
            </button>
            <button className="text-sm font-light text-left">Payment</button>
          </div>
          <div className="w-[295.5px] h-[216px] gap-2 flex flex-col justify-center items-center">
            <p className="text-base font-semibold">Assistance to the buyer</p>
            <button className="text-sm font-light text-left">
              Find an order
            </button>
            <button className="text-sm font-light text-left">
              Terms of delivery
            </button>
            <button className="text-sm font-light text-left">
              Exchange and return of goods
            </button>
            <button className="text-sm font-light text-left">Guarantee</button>
            <button className="text-sm font-light text-left">
              Frequently asked questions
            </button>
            <button className="text-sm font-light text-left">
              Terms of use of the site
            </button>
          </div>
        </div>
      </div>
      {/* 최하단 social link */}
      <div className="flex justify-between w-[173px] h-[24px]">
        <img
          src="/Icon/16px/Twitter.png"
          alt="twitter"
          className="w-[24px] h-[24px]"
        />
        <img
          src="/Icon/16px/Facebook.png"
          alt="Facebook"
          className="w-[24px] h-[24px]"
        />
        <img
          src="/Icon/16px/Tiktok.png"
          alt="Tiktok"
          className="w-[24px] h-[24px]"
        />
        <img
          src="/Icon/16px/Instagram.png"
          alt="Instagram"
          className="w-[24px] h-[24px]"
        />
      </div>
    </div>
  );
}

export default MoblieFooter;
