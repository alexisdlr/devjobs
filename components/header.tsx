import Link from "next/link";
import SwitcherTheme from "./switcher-theme";

const Header = () => {
  return (
    <div className="w-full h-[130px] lg:h-[160px] relative bg-[url('/assets/mobile/bg-pattern-header.svg')] md:bg-[url('/assets/tablet/bg-pattern-header.svg')] lg:bg-[url('/assets/header.png')] mx-auto my-0">
      <div className="w-full h-full lg:h-[160px] lg:rounded-bl-full" >
        <div className="w-[80%] md:w-full md:max-w-3xl lg:max-w-5xl lg:px-0 max-w-lg h-2/3 mx-auto flex items-center justify-between">
          <Link href={'/'} className="text-white text-xl md:text-2xl lg:text-3xl font-bold">devjobs</Link>
          <span><SwitcherTheme /></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
