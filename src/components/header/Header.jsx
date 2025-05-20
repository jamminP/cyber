import './Header.css';
import Desktop from './DesktopHeader';

function Header(){
    return(
        <div class="bg-white flex w-screen h-full px-40 py-4 items-center gap-8">
            <Desktop></Desktop>
        </div>
    );
}

export default Header;