import Link from "next/link";
import SwitcherTheme from "./switcher-theme";
import { MotionHeader } from "./animated/motion-header";

const Header = () => {
  return (
    <MotionHeader
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ delay: 0.5}}
      className="w-full h-[130px] md:h-[120px] lg:h-[160px] relative bg-[url('/assets/mobile/bg-pattern-header.svg')] lg:bg-[url('/assets/header.png')] mx-auto my-0"
    >
      <div className="w-full h-full lg:h-[160px] lg:rounded-bl-full">
        <div className="max-w-[327px] min-[200px]:max-w-[80%] md:w-full md:max-w-[620px] lg:max-w-5xl lg:px-0 h-2/3 mx-auto flex items-center justify-between">
          <Link
            href={"/"}
            className="text-white text-xl md:text-2xl lg:text-3xl font-bold"
          >
            devjobs
          </Link>
          <span>
            <SwitcherTheme />
          </span>
        </div>
      </div>
    </MotionHeader>
  );
};

export default Header;
