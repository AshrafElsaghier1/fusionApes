import React from "react";
function Search() {
  return (
    <section className="search-section pt-9">
      <div className="px-3 container mx-auto flex flex-col items-center mt-5">
        <h1 className="header-title text-xl md:text-3xl lg:text-6xl font-semibold text-main-color mb-8">
          Text to Image AI Generator
        </h1>
        <p className="text-lg text-text-color mb-8">
          Covert your words into imaginations
        </p>
        <form
          action=""
          method="post"
          className="w-full px-2 flex justify-center"
        >
          <input
            type="text"
            name=""
            id=""
            className="h-12 md:h-14 w- border border-main-color w-[70%] md:w-[60%] lg:w-[55%] px-2 rounded-l-full border-r-0 outline-0"
          />
          <button className="md:w-[120px] right-0 flex justify-center items-center px-2 rounded-r-full border-l-0 bg-main-color transform -translate-x-1">
            Generate
          </button>
        </form>
        <div className="grid grid-cols-12 gap-4 w-full mt-10 ">
          <div className="rounded-full h-8 flex justify-start items-center px-6 py-5 bg-main-color col-span-12 md:col-span-5 lg:col-span-4">
            suggestions...
          </div>
          <div className="rounded-full h-8 flex justify-start items-center px-6 py-5 bg-main-color col-span-12 md:col-span-7 lg:col-span-6">
            suggestions...
          </div>
          <div className="rounded-full h-8 flex justify-start items-center px-6 py-5 bg-main-color col-span-12 md:col-span-7 lg:col-span-2">
            suggestions...
          </div>
          <div className="rounded-full h-8 flex justify-start items-center px-6 py-5 bg-main-color col-span-12 md:col-span-5 lg:col-span-3">
            suggestions...
          </div>
          <div className="rounded-full h-8 flex justify-start items-center px-6 py-5 bg-main-color col-span-12 md:col-span-5 lg:col-span-5">
            suggestions...
          </div>
          <div className="rounded-full h-8 flex justify-start items-center px-6 py-5 bg-main-color col-span-12 md:col-span-7 lg:col-span-3	">
            suggestions...
          </div>
          <div className="rounded-full h-8 flex justify-start items-center px-6 py-5 bg-main-color col-span-12 md:col-span-5 lg:col-span-3">
            suggestions...
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
