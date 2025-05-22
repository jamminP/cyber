function DesktopFooter() {
  return (
    <div className="w-full bg-black flex justify-center">
        <div className="w-full max-w-[1200px] px-6">
            <div className="flex flex-col md:flex-row justify-center items-start gap-24">
            {/* 왼쪽 */}
            <div className="flex flex-col gap-6 w-[300px] text-center md:text-left">
                <img src="/logo/Color=white.png" alt="logo" className="w-[96px] h-auto" />
                <p className="text-sm font-medium text-[#CFCFCF] leading-[24px]">
                We are a residential interior design firm located in Portland. Our boutique–studio offers more than
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                <img src="/Icon/16px/Twitter.png" alt="twitter" />
                <img src="/Icon/16px/Facebook.png" alt="Facebook" />
                <img src="/Icon/16px/Tiktok.png" alt="Tiktok" />
                <img src="/Icon/16px/Instagram.png" alt="Instagram" />
                </div>
            </div>

          {/* 오른쪽 */}
            <div className="flex flex-col md:flex-row gap-16">
                <div className="flex flex-col gap-2 min-w-[180px]">
                <p className="text-base font-semibold">Services</p>
                <button className="text-sm font-light text-left">Bouns program</button>
                <button className="text-sm font-light text-left">Gift cards</button>
                <button className="text-sm font-light text-left">Credit and payment</button>
                <button className="text-sm font-light text-left">Service contracts</button>
                <button className="text-sm font-light text-left">Non-cash account</button>
                <button className="text-sm font-light text-left">Payment</button>
            </div>
            {/* Assistance to the buyer 영역 */}
            <div className="flex flex-col gap-2 min-w-[180px]">
                <p className="text-base font-semibold">Assistance to the buyer</p>
                <button className="text-sm font-light text-left">Find an order</button>
                <button className="text-sm font-light text-left">Terms of delivery</button>
                <button className="text-sm font-light text-left">Exchange and return of goods</button>
                <button className="text-sm font-light text-left">Guarantee</button>
                <button className="text-sm font-light text-left">Frequently asked questions</button>
                <button className="text-sm font-light text-left">Terms of use of the site</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopFooter;