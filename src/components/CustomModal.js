import React, { useState } from "react";
import Modal from "react-modal";
import CROSS_LOGO from "../../src/assets/images/Cross.png";
import orders from "../utils/orders";
import Banana_LOGO from "../../src/assets/images/Frame 47.png";
import Cross2_LOGO from "../../src/assets/images/cross2.png";
import Up_LOGO from "../../src/assets/images/Frame 40025.png";
import PENDING_LOGO from "../../src/assets/images/Pending.png";
import SENT_LOGO from "../../src/assets/images/Sent.png";
import FAILURE_LOGO from "../../src/assets/images/Failure.png";
import REFUNDINTIATED_LOGO from "../../src/assets/images/RefundIntiated.png";
import REFUNDCOMPLETED_LOGO from "../../src/assets/images/RefundCompleted.png";
import SUCCESS_LOGO from "../../src/assets/images/SUCCESS.png";
import Dates_LOGO from "../../src/assets/images/Frame 40275.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomModal = ({ isOpen, onRequestClose, updateFilters }) => {
  const [selectedMachines, setSelectedMachines] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setSelectedFromDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setSelectedToDate(date);
  };

  const images = [
    { name: "Success", path: SUCCESS_LOGO },
    { name: "Pending", path: PENDING_LOGO },
    { name: "Sent", path: SENT_LOGO },
    { name: "Failure", path: FAILURE_LOGO },
    { name: "Refund Initiated", path: REFUNDINTIATED_LOGO },
    { name: "Refund Completed", path: REFUNDCOMPLETED_LOGO },
  ];

  const removeMachine = (machineName) => {
    setSelectedMachines((prevSelected) => {
      // Filter out the machine with the given name
      return prevSelected.filter((name) => name !== machineName);
    });
  };

  const handleBoxClick = (machineName) => {
    const trimmedMachineName = machineName.split("(")[0].trim();
    setSelectedMachines((prevSelected) => {
      if (prevSelected.includes(trimmedMachineName)) {
        // If the machine is already selected, remove it
        return prevSelected.filter((name) => name !== trimmedMachineName);
      } else {
        // If the machine is not selected, add it
        return [...prevSelected, trimmedMachineName];
      }
    });
  };

  const toggleStatus = (statusName) => {
    setSelectedStatuses((prevSelected) => {
      if (prevSelected.includes(statusName)) {
        // If the status is already selected, remove it
        return prevSelected.filter((name) => name !== statusName);
      } else {
        // If the status is not selected, add it
        return [...prevSelected, statusName];
      }
    });
  };

  const applyFilters = () => {
    // Combine all selected filters and pass them to the callback function
    const selectedFilters = {
      machines: selectedMachines,
      statuses: selectedStatuses,
      startDate: selectedFromDate,
      endDate: selectedToDate,
    };
    updateFilters(selectedFilters);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className="w-[890px] h-[600px] bg-white rounded-3xl mx-auto shadow-lg overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-base leading-5 font-bold ml-[360px] text-[#333333]">
            FILTERS
          </p>
          <button onClick={onRequestClose}>
            <img alt="Cross" src={CROSS_LOGO} className="w-4 h-4 mr-[40px]" />
          </button>
        </div>
        <div className="bg-white w-[774px] h-[50px] mt-[40px] mb-[40px] flex flex-row ">
          <input
            type="text"
            placeholder="Search"
            className="p-2 pl-8 border w-full h-[50px] border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <div className="flex  justify-between items-center ml-[32px] mb-[18px]">
            <p className="text-[#5D6679]">Machines</p>
            <button className="mr-[32px]">
              <p className="text-[#5D6679] text-sm underline underline-offset-[2px]">
                Clear All
              </p>
            </button>
          </div>
          <div className="flex flex-row flex-wrap">
            {selectedMachines.map((machine, index) => (
              <div
                className="flex items-center mr-2 ml-[32px] mb-[32px]"
                key={index}
              >
                <p className="text-sm">{machine}</p>
                <img
                  src={Cross2_LOGO}
                  alt="cross1"
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => removeMachine(machine)}
                />
              </div>
            ))}
          </div>
          <div className="bg-white ml-[33px]  w-[673px] h-[36px] flex flex-row mb-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-8 border w-full h-[50px] border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-row ml-[33px] mt-[43px]">
            <div className="flex flex-row w-[280px] h-[64px] mr-[120px] items-center">
              <div className="w-3 h-3 border border-[#377DFF]  mr-[32px]  "></div>
              <p className="mr-[10px] text-[#377DFF] text-sm">MACHINE NAME</p>
              <img
                alt="UpandDown"
                src={Up_LOGO}
                className="w-[8px] mb-[24px] h-[40px]"
              />
            </div>
            <div className="flex flex-row w-[280px] mr-[195px]  h-[64px] items-center">
              <p className="mr-[10px] text-[#377DFF] text-sm">ADDRESS</p>
              <img
                alt="UpandDown"
                src={Up_LOGO}
                className="w-[8px]  mb-[24px] h-[40px]"
              />
            </div>
          </div>
        </div>
        <div className=" w-[774px] h-[960px]  bg-white shadow-lg ">
          {orders.map((order, index) => (
            <div
              className="flex flex-row items-center ml-[20px]  p-4"
              key={index}
            >
              <button
                className="w-3 h-3 border border-[#377DFF]  mr-[32px] "
                onClick={() => handleBoxClick(order.machine_name)}
              />
              <div className="flex items-center">
                <img
                  alt="banana"
                  src={Banana_LOGO}
                  className="w-[38px] h-[38px] mr-[13px]"
                />
                <p className="text-sm">{order.machine_name}</p>
              </div>
              <div className="ml-[112px]">
                <p className="text-sm">{order.address}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[790px] h-[228px] ml-[10px] mt-[16px] mr-[32px]">
          <p className="font-semibold text-[#333333]">Status</p>
          <div className="flex flex-wrap mt-[16px]">
            {images.map((image, index) => (
              <button
                key={index}
                className="w-[114px] h-[91px] rounded-lg border mr-[40px] mb-[20px] border-gray-400 flex items-center justify-center focus:border-black focus:outline-none"
              >
                <div>
                  <img
                    src={image.path}
                    alt={image.name}
                    className="w-[28px] mb-[10px] h-[28px]"
                  />
                  <p className="font-semibold text-sm">{image.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-[32px]">
          <p>Date Range</p>
          <div className="flex flex-row mt-[47px] shadow-lg">
            <div className="mt-[-40px]">
              <img
                alt="dates"
                src={Dates_LOGO}
                className="w-[108px]  h-[422px]"
              />
            </div>
            <div className="mr-4 w-[270px] h-[380px]">
              <label className="block mb-2">From:</label>
              <div className="w-[250px] h-[36px] border rounded-lg mb-[17px] border-gray-200">
                {selectedFromDate && (
                  <div className="text-base flex align items-center justify-center">
                    <p>{selectedFromDate.toLocaleDateString()}</p>
                  </div>
                )}
              </div>
              <Calendar
                value={startDate}
                onChange={handleStartDateChange}
                minDetail="month"
              />
            </div>
            <div className="mr-4 w-[270px] h-[380px]">
              <label className="block mb-2">To:</label>
              <div className="w-[250px] h-[36px] border rounded-lg mb-[17px] border-gray-200">
                {selectedToDate && (
                  <div className="flex align items-center justify-center">
                    <p>{selectedToDate.toLocaleDateString()}</p>
                  </div>
                )}
              </div>
              <Calendar
                value={endDate}
                onChange={handleEndDateChange}
                minDetail="month"
              />
            </div>
          </div>
        </div>
        <div className="w-[890px] h-[68px] flex justify-between items-center mt-[32px]">
          <button className="flex items-center">
            <p className="text-[#5D6679] text-sm underline underline-offset-[2px]">
              Clear All
            </p>
          </button>
          <button
            className="w-[160px] h-[36px] bg-[#377DFF] mr-[50px] rounded-lg"
            onClick={applyFilters}
          >
            <p className="text-white"> Apply</p>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
