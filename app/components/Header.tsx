import SwitcherTheme from "./SwitcherTheme";

const Header = () => {
  return (
    <div className="w-full h-[130px] lg:h-[160px] relative mx-auto my-0">
      <div className="w-full h-full lg:h-[160px] lg:rounded-bl-full bg-violet" >
        <div className="w-[80%] md:w-full md:max-w-3xl lg:max-w-5xl lg:px-0 max-w-lg h-2/3 mx-auto flex items-center justify-between">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">devjobs</h1>
          <span><SwitcherTheme /></span>
        </div>
      </div>
    </div>
  );
};

export default Header;