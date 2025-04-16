export default function BlogPage() {
  return (
    <div className="animate-pulse">
      <div className="flex justify-center items-center mb-10"> 
        <span className="bg-slate-300 w-[6rem] h-[2rem] rounded-md"></span>
        
      </div>


      <div className="flex justify-center items-center mb-10">
        <input type="search" name="searchblogs" className="w-1/4 rounded-xs  p-1 bg-slate-300" placeholder="" />
        <div
          className="mx-10 p-2 rounded-md bg-slate-300 text-white w-[5rem] h-[2rem]"
        >
        </div>
      </div>

      <div className="flex justify-center item-center mb-10">
        <button
          className=" bg-slate-300 text-white px-4 py-2 rounded-md w-[5rem] h-[2rem]"
        >
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 px-4"><div className="p-6 border border-gray-200 rounded-lg bg-slate-300 w-[30rem] h-[15rem] "></div>
        <div className="p-6 border border-gray-200 rounded-lg bg-slate-300 w-[30rem] h-[15rem] "></div>
        <div className="p-6 border border-gray-200 rounded-lg bg-slate-300 w-[30rem] h-[15rem] "></div>
        <div className="p-6 border border-gray-200 rounded-lg bg-slate-300 w-[30rem] h-[15rem] "></div>
        <div className="p-6 border border-gray-200 rounded-lg bg-slate-300 w-[30rem] h-[15rem] "></div>
        <div className="p-6 border border-gray-200 rounded-lg bg-slate-300 w-[30rem] h-[15rem] "></div>
      </div>
    </div>
  );
}
