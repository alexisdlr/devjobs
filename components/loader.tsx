
import { LuLoader2 } from "react-icons/lu";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center dark:text-white">
        <LuLoader2 className="size-6 dark:text-white text-darkgray animate-spin" />
    </div>
  );
};

export default Loader;
