import DesktopFooter from './DesktopFooter';
import MoblieFooter from './MoblieFooter';

function Footer() {
  return (
    <footer>
      {/* 데스크탑 버전 */}
      <div className='mx-auto hidden h-[464px] w-screen items-center justify-center gap-6 bg-black px-[104px] py-[160px] text-[#CFCFCF] md:flex'>
        <DesktopFooter></DesktopFooter>
      </div>

      {/* 모바일 버전 */}
      <div className='flex h-[744px] w-screen items-center justify-center gap-8 bg-black px-[32px] py-[48px] text-[#CFCFCF] md:hidden'>
        <MoblieFooter></MoblieFooter>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
