import DesktopFooter from "./DesktopFooter";
import MoblieFooter from "./MoblieFooter";

function Footer() {
  return (
    <footer>
      {/* 데스크탑 버전 */}
      <div className="justify-center items-center text-[#CFCFCF] bg-black w-screen h-[464px] mx-auto gap-6 px-[104px] py-[160px] hidden md:flex">
        <DesktopFooter></DesktopFooter>
      </div>

      {/* 모바일 버전 */}
      <div className="flex justify-center items-center md:hidden px-[32px] py-[48px] gap-8 bg-black text-[#CFCFCF] w-screen h-[744px]">
        <MoblieFooter></MoblieFooter>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
