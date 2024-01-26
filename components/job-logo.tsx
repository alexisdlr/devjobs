import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  style: {
    backgroundColor: string;
  };
  src: string;
  className?: string;
}
const Logo = ({ style, className, src }: LogoProps) => {
  return (
    <div
      className="relative size-36 flex items-center justify-center"
      style={style}
    >
      <Image
        src={src}
        fill
        style={{ left: 0, top: 0, width: "100%", height: "100%" }}
        alt="logo for company"
        className={cn("object-cover object-center", className)}
      />
    </div>
  );
};

export default Logo;
