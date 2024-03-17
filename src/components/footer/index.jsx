import React from "react";
import { fbIcon, igIcon, xIcon } from "../../assets/svgs";
const footerIcons = [
  {
    id: 0,
    img: fbIcon,
  },
  {
    id: 1,
    img: igIcon,
  },
  {
    id: 2,
    img: xIcon,
  },
];
const Footer = () => {
  return (
    <div className="bg-[#212121] py-4 mt-4 ">
      <div className="flex items-center justify-between w-10/12 mx-auto">
        <p className="text-sm text-white">&copy;
          2024 Christpiracy. All rights reserved.
        </p>
        <div className="flex items-center gap-x-4">
          {footerIcons.map(({ id, img }) => (
            <div key={id} className="">
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
