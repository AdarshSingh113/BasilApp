import React, { useState } from "react";
import CustomModal from "./CustomModal";

const Filters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[320px] h-[470px]  mt-[28px] ml-[16px]  bg-white flex items-center justify-center shadow-lg rounded-lg">
      <div className="w-[256px] h-[395px] mb-[30px]  bg-white">
        <p className=" text-lg leading-5 font-semibold  text-[#5D6679]">
          FILTERS
        </p>
        <div className=" w-[247px] h-[36px] mt-[24px] flex justify-between ">
          <div className="w-[108px] h-[36px] rounded-lg border border-[#5D6679] bg-white flex items-center justify-center">
            <button
              className=" text-sm font-dm-sans font-semibold  text-[#5D6679] "
              onClick={openModal}
            >
              Select Filters
            </button>
          </div>
          <button className="text-sm font-dm-sans border-gray-700 font-semibold  text-[#5D6679] underline underline-offset-[2px]">
            Clear All
          </button>
        </div>
        <div>{isModalOpen && <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} />}
</div>
        <div className="flex flex-col">
          <div className="flex items-center w-[181px] h-[27px] mt-[16px]">
            <label
              htmlFor="dateFrom"
              className=" text-[#5D6679] font-medium text-sm mr-2"
            >
              Date From:
            </label>
          </div>
          <div className="flex items-center  w-[181px] h-[27px] mt-[12px]">
            <label
              htmlFor="dateTo"
              className=" text-[#5D6679] font-medium text-sm mr-2"
            >
              Date To:
            </label>
          </div>
          <div className="flex items-center  w-[181px] h-[27px] mt-[12px]">
            <label
              htmlFor="Status"
              className=" text-[#5D6679] font-medium text-sm mr-2"
            >
              Status:
            </label>
          </div>
          <div className="flex items-center  w-[181px] h-[27px] mt-[12px]">
            <label
              htmlFor="Machines"
              className=" text-[#5D6679] font-medium text-sm mr-2"
            >
              Machines:
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
