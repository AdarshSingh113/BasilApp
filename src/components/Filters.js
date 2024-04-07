import React, { useState } from "react";
import CustomModal from "./CustomModal";
import Cross2_LOGO from "../../src/assets/images/cross2.png";

const Filters = ({ updateFilteredOrders ,clearAllFilters}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    machines: [],
    statuses: [],
    startDate: null,
    endDate: null,
  });

 
  



  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateFilters = (filters) => {
    setSelectedFilters(filters);
    closeModal(); // Close modal after updating filters
    updateFilteredOrders(filters);
  };
  
  const handleClearAllFilters = () => {
    setSelectedFilters({
      machines: [],
      statuses: [],
      startDate: null,
      endDate: null,
    });
    clearAllFilters(); // Call the function passed from the parent component
  };

  const removeMachine = (machine) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      machines: prevFilters.machines.filter((m) => m !== machine),
    }));
  };

  const removeStatus = (status) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      statuses: prevFilters.statuses.filter((s) => s !== status),
    }));
  };

  return (
    <div className="w-[320px] h-[470px] mt-[28px] ml-[16px] bg-white flex items-center justify-center shadow-lg rounded-lg">
      <div className="w-[256px] h-[395px] mb-[30px] bg-white">
        <p className="text-lg leading-5 font-semibold text-[#5D6679]">
          FILTERS
        </p>
        <div className="w-[247px] h-[36px] mt-[24px] flex justify-between">
          <div className="w-[108px] h-[36px] rounded-lg border border-[#5D6679] bg-white flex items-center justify-center">
            <button
              className="text-sm font-dm-sans font-semibold text-[#5D6679]"
              onClick={openModal}
            >
              Select Filters
            </button>
          </div>
          <button onClick={handleClearAllFilters} className="text-sm font-dm-sans border-gray-700 font-semibold text-[#5D6679] underline underline-offset-[2px]">
            Clear All
          </button>
        </div>
        <div>
          {isModalOpen && (
            <CustomModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              updateFilters={updateFilters}
            />
          )}
        </div>
        <div className="flex flex-col">
        <div className="flex items-center w-[181px] h-[27px] mt-[16px]">
  <div className="flex items-center">
    <label
      htmlFor="dateFrom"
      className="text-[#5D6679] font-medium text-sm mr-2"
    >
      Date From:{" "}
    </label>
    {selectedFilters.startDate && (
      <div className="flex items-center  w-[110px] h-[27px]  justify-center rounded-lg border border-gray-200 mr-4">
        <span className="mr-1 text-xs">{selectedFilters.startDate.toLocaleDateString()}</span>
        <img
          src={Cross2_LOGO}
          alt="cross1"
          className="w-3 h-3 cursor-pointer"
          onClick={() => setSelectedFilters(prevFilters => ({ ...prevFilters, startDate: null }))}
        />
      </div>
    )}
  </div>
</div>
<div className="flex items-center w-[181px] h-[27px] mt-[16px]">
  <div className="flex items-center ">
    <label
      htmlFor="dateTo"
      className="text-[#5D6679] font-medium text-sm mr-2"
    >
      Date To:{" "}
    </label>
    {selectedFilters.endDate && (
      <div className="flex items-center  w-[110px] h-[27px]  justify-center rounded-lg border border-gray-200 mr-2">
        <span className="mr-1 text-xs">{selectedFilters.endDate.toLocaleDateString()}</span>
        <img
          src={Cross2_LOGO}
          alt="cross23"
          className="w-3 h-3 cursor-pointer"
          onClick={() => setSelectedFilters(prevFilters => ({ ...prevFilters, endDate: null }))}
        />
      </div>
    )}
  </div>
</div>

          <div className="flex items-center w-[300px] mt-[12px]">
            <label
              htmlFor="Status"
              className="text-[#5D6679] font-medium text-sm mr-2"
            >
              Status:
            </label>
            <div className="flex flex-wrap">
              {selectedFilters.statuses.map((status, index) => (
                <div
                  key={index}
                  className="flex items-center w-[110px] h-[27px] rounded-lg border justify-center border-gray-200 mr-2 mb-2"
                >
                  <span className="mr-1 text-xs">{status}</span>
                  <img
                    src={Cross2_LOGO}
                    alt="cross1"
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => removeStatus(status)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center w-[181px] h-[27px] mt-[12px]">
            <label
              htmlFor="Machines"
              className="text-[#5D6679] font-medium text-sm mr-2"
            >
              Machines:
            </label>
            <div className="flex items-center">
              {selectedFilters.machines.map((machine, index) => (
                <div
                  key={index}
                  className="flex items-center w-[110px] h-[27px] rounded-lg border justify-center border-gray-200 mr-2"
                >
                  <span className="mr-1 text-xs">{machine}</span>
                  <img
                    src={Cross2_LOGO}
                    alt="cross1"
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => removeMachine(machine)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
