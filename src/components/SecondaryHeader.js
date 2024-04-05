
import Up_LOGO from "../../src/assets/images/Frame 40025.png";


const SecondaryHeader = ({onSort,onOrderIdSort}) => {
  const handleSortByAmount = ()=>{
    onSort();
  }
  const handleSortByOrderId = ()=>{
    onOrderIdSort();
  }

  return (
    <div className="my-[16px] ml-[32px] mr-[22px]">
      <div className="w-[938px] h-[84px] mt-[16px] ml-[16px] bg-white ">
        <div className="flex flex-row">
          <div className="w-[35px] h-[84px] bg-white flex items-center font-semibold font-sans ml-[32px] mr-[38px]">
            <p className="text-xs text-[#377DFF]">S.NO.</p>
          </div>
          <div className="w-[40px] h-[84px] bg-white flex items-center mr-[50px]">
            <p className="text-xs text-[#377DFF] font-semibold">Date</p>
            <button>
              <img
                className="w-[8px] h-[40px] ml-[10px] mb-[44px]"
                alt="up"
                src={Up_LOGO}
              />
            </button>
          </div>
          <div className="w-[50px] h-[84px] bg-white flex items-center mr-[50px]">
            <p className="text-xs font-semibold text-[#377DFF]">ORDER ID</p>
            <button onClick={handleSortByOrderId}>
            <img
              className="w-[8px] h-[40px] ml-[10px] mb-[44px]"
              alt="up"
              src={Up_LOGO}
            />
            </button>
          </div>
          <div className="w-[100px] h-[84px] bg-white flex items-center mr-[50px]">
            <p className="text-xs font-semibold text-[#377DFF]">MACHINE NAME</p>
          </div>
          <div className="w-[115px] h-[84px] bg-white flex items-center mr-[50px]">
            <p className="text-xs font-semibold text-[#377DFF]">
              CUSTOMER NAME
            </p>
          </div>
          <div className="w-[112px] h-[84px] bg-white flex items-center mr-[50px]">
            <p className="text-xs font-semibold text-[#377DFF]">
              CONTACT NUMBER
            </p>
          </div>
          <div className="w-[90px] h-[84px] bg-white flex items-center mr-[50px]">
            <p className="text-xs font-semibold text-[#377DFF]">TOTAL AMOUNT</p>
            <button onClick={handleSortByAmount}>
            <img
              className="w-[8px] h-[40px] ml-[10px] mb-[44px]"
              alt="upD"
              src={Up_LOGO}
            />
            </button>
          </div>
          <div className="w-[163px] h-[84px] bg-white flex items-center ] ">
            <p className="text-xs font-semibold text-[#377DFF] mb-[20px] ml-[10px]">
              STATUS
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SecondaryHeader;
