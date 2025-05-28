import Desktop from './DesktopHeader';
import Mobile from './MobileHeader';

function Header(){
    return(
        <header>
            {/* Desktop version. (>= 768px) */}
            <div className="hidden md:flex bg-white w-screen h-full px-40 py-4 items-center gap-8">
                <Desktop></Desktop>
            </div>

            {/* Mobile version. (< 768)* flex md:hidden */}
            <div className="flex md:hidden bg-white w-screen h-full px-4 py-6 justify-between">
                <Mobile></Mobile>
            </div>
        </header>
    );
}

export default Header;