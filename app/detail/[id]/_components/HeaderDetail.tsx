const HeaderDetail = () => {
  return (  
  <div className="w-[80%] md:w-full md:max-w-3xl lg:max-w-5xl h-[80px] absolute inset-x-0 bg-white dark:bg-verydarkblue bottom-[-30px] rounded-[6px] mx-auto my-0 flex shadow-lg">
  <div>
   
  </div>
  <div className=" w-1/3 h-full hidden md:flex items-center justify-start p-6 pr-0 border-gray">
    <div className="w-full flex items-center justify-start gap-x-4 text-sm 2xl:text-base">
      <div className="flex items-center gap-x-2 lg:gap-x-4">
        <input
          type="checkbox"
          className="h-5 w-5 bg-verydarkblue transition duration-150 ease-in-out rounded-[4px]"
        />
        <label className="font-semibold text-xs lg:text-sm text-verydarkblue dark:text-white bg-transparent">
          Full Time Only
        </label>
      </div>
      <button className="px-6 py-3 ml-auto mr-6 bg-violet rounded-[4px] text-white font-semibold text-sm 2xl:text-base">
        Search
      </button>
    </div>
  </div>
</div>  );
}
 
export default HeaderDetail;