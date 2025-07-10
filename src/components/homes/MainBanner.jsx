function MainBanner(){

    return (
        <div className="flex items-center justify-center w-screen h-[632] bg-[#211C24] gap-20">
            {/* text-place */}
            <div className="text-white">
                <p className="opacity-60 font-semibold">Pro.Beyond.</p>
                <p className="text-[96px]">
                    <span className="font-thin">IPhone 14 </span> 
                    <span className="font-bold">Pro</span>
                </p>
                <p className="text-[#909090] font-medium text-[18px] mb-5">Created to change everything for the better. For everyone</p>
                <button className="w-auto h-[56px] gap-2 border-[2px] border-solid py-[16px] px-[56px] rounded-[6px] hover:bg-[#493d4e] transition-colors duration-300">Skip Now</button>
            </div>
            {/* image-place */}
            <img src="/image/Iphone Image.png"></img>
        </div>
    );
}

export default MainBanner;