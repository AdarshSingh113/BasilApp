import React from "react";

const Filters = () => {
  return (
    <div className="w-[320px] h-[470px]  mt-[28px] ml-[16px]  bg-white flex items-center justify-center shadow-lg rounded-lg">
    <div className="w-[256px] h-[395px] mb-[30px]  bg-white">
      <p className=" text-lg leading-5 font-bold  text-gray-700">FILTERS</p>
      <div className=" w-[247px] h-[36px] mt-[24px] flex justify-between ">
        <div className="w-[108px] h-[36px] rounded-lg bg-white items-center justify-center"> 
        <button className=" text-sm border-gray-700  text-gray-700 ">Select Filters</button>
        </div>
        <button className="text-white">Clear All</button>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <label htmlFor="dateFrom" className="text-white mr-2">
            Date From:
          </label>
        </div>
        <div className="flex items-center">
          <label htmlFor="dateTo" className="text-white mr-2">
            Date To:
          </label>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Filters;
