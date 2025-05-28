function DesktopHeader(){

    return (
        <div className="flex items-center justify-center gap-6 w-full mx-auto max-w-[1440px]">
            {/* logo */}
            <img src='/logo/Color=Black.png' alt="logo"></img>

            {/* 검색창 */}
            <div className="rounded-lg p-4 gap-2 bg-[#F5F5F5] flex items-center w-full max-w-[433px] min-w-[7.5rem]"> 
                <img src="/Icon/24px/Search.png" alt="search"></img>
                <input type="text" placeholder="Search" className="bg-[#F5F5F5] focus: outline-none w-full"
                ></input>
            </div>

            {/* Button */}
            <div className="flex gap-14">
                <button className="font-bold">Home</button>
                <button>About</button>
                <button>Contact Us</button>
                <button>Blog</button>
            </div>

            {/* Status */}
            <div className="flex gap-6">
                <img src="/Icon/32px/Favorites.png" alt="Favorites"></img>
                <img src="Icon/32px/Cart.png" alt="cart"></img>
                <img src="Icon/32px/User.png" alt="User"></img>
            </div>
        </div>
    );
}

export default DesktopHeader;