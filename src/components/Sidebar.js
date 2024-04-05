import React from "react";
import Basil_LOGO from "../../src/assets/images/Basil brand stamps POS-02 1.png";
import Home_LOGO from "../../src/assets/images/Frame 40039.png";
import Location_LOGO from "../../src/assets/images/Frame 40040.png";
import Home2_LOGO from "../../src/assets/images/Frame 40041.png";
import Team_LOGO from "../../src/assets/images/Frame 40043.png";
import Restaurant_LOGO from "../../src/assets/images/Frame 40044.png";
import Invoice_LOGO from "../../src/assets/images/Frame 40049.png";
import Receipt_LOGO from "../../src/assets/images/Frame 40050.png";
import Settings_LOGO from "../../src/assets/images/Frame 40051.png";
import Logout_LOGO from "../../src/assets/images/Frame.png";

const Sidebar = () => {
  const images = [
    { name: "Home", path: Home_LOGO },
    { name: "Location", path: Location_LOGO },
    { name: "Home2", path: Home2_LOGO },
    { name: "Team", path: Team_LOGO },
    { name: "Restaurant", path: Restaurant_LOGO },
    { name: "Invoice", path: Invoice_LOGO },
    { name: "Receipt", path: Receipt_LOGO },
  ];

  const images2 = [
    { name: "Location", path: Logout_LOGO },
    { name: "Home", path: Settings_LOGO },
  ];

  return (
    <div className="flex justify-center w-[80px] h-[1105px]  bg-white text-white">
      <div>
        <div className="mt-[16px] mx-[24x] mb-[56px] ">
          <img
            className=" w-[32px] h-[32px]"
            src={Basil_LOGO}
            alt="basil logo"
          />
        </div>
        <div className="w-[36px] h-[406px]">
          {images.map((image, index) => (
            <img
              className="w-[36px] h-[36px] mb-[24px]"
              key={index}
              src={image.path}
              alt={image.name}
            />
          ))}
        </div>
        <div className="w-[36px] mt-[64px] h-[406px]">
          {images2.map((image, index) => (
            <img
              className="w-[36px] h-[36px] mb-[24px]"
              key={index}
              src={image.path}
              alt={image.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
