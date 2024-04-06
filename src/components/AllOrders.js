import React, { useState } from "react";
import SecondaryHeader from "./SecondaryHeader";
import orders from "../utils/orders";
import Search from "./Search";
import Filters from "./Filters";
import RefundBar from "./RefundBar";
import ExtremeLeft_LOGO from "../../src/assets/images/_Icon_.png";
import ExtremeRight_LOGO from "../../src/assets/images/chevrons-right.png";
import Pagination_LOGO from "../../src/assets/images/_Pagination Item_.png"
import Left_LOGO from "../../src/assets/images/_Icon_ (1).png";
import Right_LOGO from "../../src/assets/images/chevron-right.png";
import Vector_LOGO from "../../src/assets/images/Vector.png"

const AllOrders = () => {
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [sortByOrderIdAsc, setSortByOrderIdAsc] = useState(true);
  const [sortByAmountAsc, setSortByAmountAsc] = useState(true);



  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // Calculate indexes for slicing the orders array based on current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = (currentPage - 1) * ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  // Pagination handlers
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSortByOrderId = () => {
    setSortByOrderIdAsc(!sortByOrderIdAsc);
    const sortedOrders = [...filteredOrders].sort((a, b) =>
      sortByOrderIdAsc
        ? a.order_id.localeCompare(b.order_id)
        : b.order_id.localeCompare(a.order_id)
    );
    setFilteredOrders(sortedOrders);
  };

  const handleSortByAmount = () => {
    setSortByAmountAsc(!sortByAmountAsc);
    const sortedOrders = [...filteredOrders].sort((a, b) =>
      sortByAmountAsc
        ? a.total_amount - b.total_amount
        : b.total_amount - a.total_amount
    );
    setFilteredOrders(sortedOrders);
  };


  return (
    <div className="shadow-lg rounded-lg">
      <Search orders={orders} setFilteredOrders={setFilteredOrders} />
      <div className="flex flex-row bg-white">
        <div>
          <RefundBar />
          <SecondaryHeader
            onOrderIdSort={handleSortByOrderId}
            onSort={handleSortByAmount}
          />
          <div className="my-[16px] ml-[32px] mr-[22px] bg-white">
            <div className="w-[938px] mt-[16px] ml-[16px "></div>
            {currentOrders.map((order, index) => (
              <div
                key={index + indexOfFirstOrder}
                className="flex flex-row mb-[16px]"
              >
                <div className="w-[35px] h-[84px] bg-white flex items-center font-semibold font-sans ml-[32px] mr-[38px]">
                  <p className="text-xs">{index + indexOfFirstOrder + 1}.</p>
                </div>
                <div className="w-[80px] h-[84px] bg-white flex items-center mr-[38px]">
                  <p className="text-xs">{order.date}</p>
                </div>
                <div className="w-[50px] h-[84px] bg-white flex items-center mr-[38px]">
                  <p className="text-xs ">{order.order_id}</p>
                </div>
                <div className="w-[100px] h-[84px] bg-white flex items-center mr-[38px]">
                  <p className="text-xs ">{order.machine_name}</p>
                </div>
                <div className="w-[115px] h-[84px] bg-white flex items-center mr-[38px]">
                  <p className="text-xs ">{order.customer_name}</p>
                </div>
                <div className="w-[112px] h-[84px] bg-white flex items-center mr-[18px]">
                  <p className="text-xs ">{order.contact_number}</p>
                </div>
                <div className="w-[90px] h-[84px] bg-white flex items-center mr-[2px]">
                  <p className="text-xs">&#x20B9; {order.total_amount}</p>
                </div>
                <div
                  className={`m-10 h-[28px] bg-white flex items-center border justify-center mt-[26px] rounded-2xl 
               ${
                 order.status === "SUCCESS"
                   ? "border-green-500 text-green-500"
                   : order.status === "FAILURE"
                   ? "border-red-500 text-red-500"
                   : order.status === "PENDING"
                   ? "border-yellow-500 text-yellow-500"
                   : order.status === "SENT"
                   ? "border-yellow-500 text-orange-500"
                   : order.status === "REFUND INTIATED"
                   ? "border-blue-500 text-blue-500"
                   : "border-purple-500 text-purple-500"
               }`}
                >
                  <p className="text-xs mx-[10px] max-w-[100%]">
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[992px] h-[32px]  bg-white my-[16px] ml-[32px] mr-[22px] flex flex-row justify-between ">
            <div className="w-[200px] h-[32px] flex items-center">
              <p className="text-sm font-semibold  text-[#5D6679]">Showing {indexOfFirstOrder} to {Math.min(indexOfLastOrder, filteredOrders.length)} of {filteredOrders.length} entries</p>
            </div>
            <div className="w-[200px] h-[32px] flex items-center flex-row">
              <p className="text-sm font-semibold  text-[#5D6679]">Rows per page: {ordersPerPage}</p>
              <img
              className="w-[8px] h-[8px] ml-[4px]"
              alt="Lgg"
              src={Vector_LOGO}
              />
            </div>
            <div className="flex items-center justify-center bg-white">
              <button onClick={prevPage}
              disabled={currentPage === 1}>
                <img
                  className="w-[34px] h-[32px] mr-[5px]"
                  alt="ExtremeLEft"
                  src={ExtremeLeft_LOGO}
                />
                </button>
                <button onClick={prevPage}
              disabled={currentPage === 1}>
                <img
                  className="w-[34px] h-[32px] mr-[5px]"
                  alt="LEft"
                  src={Left_LOGO}
                />
                </button>
                <img
                  className="w-[34px] h-[32px] mr-[5px]"
                  alt="Pagination"
                  src={Pagination_LOGO}
                />
                <button  onClick={nextPage}
              disabled={indexOfLastOrder >= filteredOrders.length}>
                <img
                  className="w-[34px] h-[32px] mr-[5px]"
                  alt="Right"
                  src={Right_LOGO}
                />
                </button>
                <button  onClick={nextPage}
              disabled={indexOfLastOrder >= filteredOrders.length}>
                <img
                  className="w-[34px] h-[32px] mr-[5px]"
                  alt="ExtremeRight"
                  src={ExtremeRight_LOGO}
                />
                </button>
            </div>
          </div>
        </div>
        <div>
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
