import React from "react";

const RefundBar = ({orders}) => {
  
  const machines1 = orders.reduce((acc, order) => {
   
    acc.add(order.machine_name);
    return acc;
  }, new Set());
  
  
  const machines = machines1.size;

  const totalOrders = orders.length;
  const customers = totalOrders;
  const drinks = totalOrders;
  const totalAmount = orders.reduce((acc, order) => {
    return acc + order.total_amount;
  }, 0);
  const refundInitiated = orders.filter(order => order.status === "REFUND INITIATED").length;

  return (
    <div className="bg-white w-[992px] h-[62px] mt-[16px] flex flex-row ml-[16px] shadow-lg rounded-lg">
      <div className="mr-[77px] flex flex-row items-center ml-[32px]">
        <h1 className="text-sm">Machines: {machines}</h1>
      </div>
      <div className="mr-[77px] flex flex-row items-center">
        <h1 className="text-sm">Orders: {totalOrders}</h1>
      </div>
      <div className="mr-[77px] flex flex-row items-center">
        <h1 className="text-sm">Customers: {customers}</h1>
      </div>
      <div className="mr-[77px] flex flex-row items-center">
        <h1 className="text-sm">Drinks: {drinks}</h1>
      </div>
      <div className="mr-[77px] flex flex-row items-center">
        <h1 className="text-sm">Total amount: &#x20B9; {totalAmount}</h1>
      </div>
      <div className="mr-[32px] flex flex-row items-center">
        <h1 className="text-sm">Refund Initiated: {refundInitiated}</h1>
      </div>
    </div>
  );
};

export default RefundBar;
