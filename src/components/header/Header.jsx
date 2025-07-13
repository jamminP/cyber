import Desktop from './DesktopHeader';
import Mobile from './MobileHeader';

function Header() {
  return (
    <header>
      {/* Desktop version. (>= 768px) */}
      <div className='hidden h-full w-screen items-center gap-8 bg-white px-40 py-4 md:flex'>
        <Desktop></Desktop>
      </div>

      {/* Mobile version. (< 768)* flex md:hidden */}
      <div className='flex h-full w-screen justify-between bg-white px-4 py-6 md:hidden'>
        <Mobile></Mobile>
      </div>
    </header>
  );
}

export default Header;
