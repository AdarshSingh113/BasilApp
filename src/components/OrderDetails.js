import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import REFUND_LOGO from "../../src/assets/images/Frame 40017.png";
import Excel_LOGO from "../../src/assets/images/_Button_.png";
import Pdf_LOGO from "../../src/assets/images/_Button_ (1).png";
import orders from "../utils/orders";
import Smoothie_LOGO from "../../src/assets/images/basilSMoothie.png";
import SuccesfulRefund_LOGO from "../../src/assets/images/_Button Unstyled_.png";
import StatusRefund_LOGO from "../../src/assets/images/PendindRefund.png";

const OrderDetails = () => {
  const { orderId } = useParams();
  const order = orders.find((order) => order.order_id === orderId);

  if (!order) {
    return <div>Order not found</div>;
  }

  const {
    machine_name,
    date,
    refund_transaction_id,
    total_amount,
    customer_name,
    contact_number,
    email,
    status,
    order_details,
  } = order;

  return (
    <div className="flex flex-row ">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header ordersName={`ALL ORDERS / ${orderId}`} Allorders={orderId} />
        <div className="w-[1328px] h-[68px] flex flex-row mt-[16px] justify-end ml-[54px]">
          <img
            alt="refund"
            src={REFUND_LOGO}
            className="w-[220px] h-[36px] mr-[43px] ml-[21px]"
          />
          <img
            className="w-[36px] h-[36px]"
            src={Excel_LOGO}
            alt="Excel_LOGO"
          />
          <img
            className="w-[36px] h-[36px] mr-[43px] ml-[21px]"
            src={Pdf_LOGO}
            alt="Pdf_LOGO"
          />
        </div>
        <div className="w-[1276px] h-[677px] ml-[61px]  flex flex-row">
          <div className="w-[395px] h-[677px] shadow-xl flex items-center justify-center">
            <div className="w-[331px] h-[628px]  ">
              <div className="w-[331px] h-[28px] flex flex-row items-center justify-between">
                <p className="text-lg text-[#377DFF]">{orderId}</p>
                <div
                  className={`h-[28px] w-[99px] bg-white flex items-center border justify-center rounded-2xl 
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
                  <p className="text-xs mx-[10px] max-w-[100%]">{status}</p>
                </div>
              </div>
              {/* Basic INformation */}
              <div className="w-[331px] h-[113px] mt-[16px] ">
                <div className="flex justify-start mb-[16px]">
                  <p className="text-[#868E96] font-semibold">
                    BASIC INFORMATION
                  </p>
                </div>
                <div className="flex flex-row w-[331px] h-[49px]">
                  <div className="w-[174px] h-[50px]">
                    <p className="text-[#868E96] ">Date And Time</p>
                    <p className="text-sm">{date}</p>
                  </div>
                  <div className="w-[148px] h-[50px] ">
                    <p className="text-[#868E96] ">Machine</p>
                    <p className="text-sm">{machine_name}</p>
                  </div>
                </div>
              </div>
              {/* Order Summary */}
              <div className="w-[331px] h-[113px] mt-[16px] ">
                <div className="flex justify-start mb-[16px]">
                  <p className="text-[#868E96] font-semibold">ORDER SUMMARY</p>
                </div>
                <div className="flex flex-row w-[331px] h-[49px]">
                  <div className="w-[174px] h-[50px]">
                    <p className="text-[#868E96] ">Payment ID</p>
                    <p className="text-sm">{refund_transaction_id}</p>
                  </div>
                  <div className="w-[148px] h-[50px] ">
                    <p className="text-[#868E96] ">Total Amount</p>
                    <p className="text-sm">{total_amount}</p>
                  </div>
                </div>
              </div>
              {/* Customer Information */}
              <div className="w-[331px] h-[183px] mt-[16px] ">
                <div className="flex justify-start">
                  <p className="text-[#868E96] font-semibold">
                    CUSTOMER INFORMATION
                  </p>
                </div>
                <div className="flex flex-row w-[331px] h-[49px]">
                  <div className="w-[174px] h-[50px]">
                    <p className="text-[#868E96] ">Name</p>
                    <p className="text-sm">{customer_name}</p>
                  </div>
                  <div className="w-[148px] h-[50px] ">
                    <p className="text-[#868E96] ">Contact Number</p>
                    <p className="text-sm">{contact_number}</p>
                  </div>
                </div>
                <div className="w-[148px] h-[50px] mt-[8px] ">
                  <p className="text-[#868E96] ">Email</p>
                  <p className="text-sm">{email}</p>
                </div>
              </div>
              {/* REFUND INFORMATION */}
              <div className="w-[331px] h-[113px] mt-[16px] ">
                <div className="flex justify-start mb-[16px]">
                  <p className="text-[#868E96] font-semibold">
                    REFUND INFORMATION
                  </p>
                </div>
                <div className="w-[148px] h-[80px] ">
                  <p className="text-[#868E96] ">Refund Transaction ID</p>
                  <p className="text-sm">{refund_transaction_id}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[776px] h-[388px] my-[28px] mx-[32px]  ">
            <div className="flex justify-start mb-[16px]">
              <h1 className="text-base font-semibold text-[#868E96]">
                ORDER DETAILS
              </h1>
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className="text-[#377DFF] text-sm px-10">ID</div>
              <div className="text-[#377DFF] text-sm px-4">Drink Name</div>
              <div className="text-[#377DFF] text-sm px-8">Customization</div>
              <div className="text-[#377DFF] text-sm px-8">Amount</div>
              <div className="text-[#377DFF] text-sm px-4">Drink Status</div>
              <div className="text-[#377DFF] text-sm px-4">Action</div>

              {order_details.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="text-xs ">{item.id}</div>
                  <div className="w-[220px] h-[64px] flex flex-row ">
                    <div className="mt-[-8px]">
                      <img
                        alt="drink"
                        src={Smoothie_LOGO}
                        className="w-[38px]  h-[38px]"
                      />
                    </div>
                    <div className="px-4 text-sm  ">{item.drink_name}</div>
                  </div>
                  <div className="w-[112px] h-[64px] ml-[60px]">
                    <div className="px-4 text-sm  ">{item.customization}</div>
                  </div>
                  <div className="px-4 text-sm ">{item.amount}</div>
                  <div
                    className={`h-[34px] w-[99px] bg-white flex items-center border justify-center rounded-2xl  ml-[16px]
               ${
                 item.drink_status === "SUCCESS"
                   ? "border-green-500 text-green-500"
                   : item.drink_status === "FAILURE"
                   ? "border-red-500 text-red-500"
                   : item.drink_status === "PENDING"
                   ? "border-yellow-500 text-yellow-500"
                   : item.drink_status === "SENT"
                   ? "border-yellow-500 text-orange-500"
                   : item.drink_status === "REFUND INTIATED"
                   ? "border-blue-500 text-blue-500"
                   : "border-purple-500 text-purple-500"
               }`}
                  >
                    <p className="text-xs mx-[10px] max-w-[100%] ">
                      {item.drink_status}
                    </p>
                  </div>
                  <div className="w-[103px] h-[62px] px-2 ml-[16px]">
                    {item.drink_status === "SUCCESS" ? (
                      <img
                        alt="sucessfulrefund"
                        src={SuccesfulRefund_LOGO}
                        className="w-[110px] h-[36px]"
                      />
                    ) : (
                      <img
                        src={StatusRefund_LOGO}
                        alt="unsucessfulrefund"
                        className="w-[110px] h-[36px]"
                      />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
