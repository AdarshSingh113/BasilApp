import Modal from "react-modal";
import CROSS_LOGO from "../../src/assets/images/Cross.png";

const CustomModal = ({ isOpen, onRequestClose }) => {
  console.log("custom modal");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className="w-[890px] h-[1919px] my-[40px] bg-white rounded-3xl mx-[275px] shadow-lg"
    >
      <div className="absolute top-[80px] mx-[53px] flex flex-row ">
        <div className="w-[784px] bg-white flex items-center justify-center">
          <p className="text-sm leading-5 font-semibold text-[#333333]">
            FILTERS
          </p>
        </div>
        <button>
          <img
            alt="Cross"
            src={CROSS_LOGO}
            onClick={onRequestClose}
            className="w-[16px]  h-[16px]"
          />
        </button>
        <div className="bg-white absolute  flex flex-row  mt-[46px]  justify-between items-center  rounded-lg">
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-8 border w-[784px] h-[50px] border-gray-300 rounded-lg"
            />
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
