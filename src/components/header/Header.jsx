import './Header.css';
import Desktop from './DesktopHeader';
import Mobile from './MobileHeader';

function Header(){
    return(
        <header>
            {/* Desktop version. (>= 768px) */}
            <div class="bg-white w-screen h-full px-40 py-4 items-center gap-8 hidden md:flex">
                <Desktop></Desktop>
            </div>

            {/* Mobile version. (< 768)*/}
            <div class="bg-white w-screen h-full px-4 py-6 justify-between flex md:hidden">
                <Mobile></Mobile>
            </div>
        </header>
    );
}

export default Header;