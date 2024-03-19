import React from "react";
import { fbIcon, igIcon, xIcon } from "../../assets/svgs";
import { handleOpenInNewTab } from "../../utils/handleOpenInNewTab";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { youtube } from "../../assets/png";
const footerIcons = [
  {
    id: 0,
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/christspiracy/",
  },
  {
    id: 1,
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/christspiracy/",
  },
  {
    id: 2,
    icon: <YouTubeIcon />,
    link: "https://www.youtube.com/@christspiracyfilm",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#212121] py-4 mt-4 ">
      <div className="flex items-center justify-between w-10/12 mx-auto">
        <p className="md:text-sm text-white text-[10px]">
          &copy; 2024 Christspiracy. All rights reserved.
        </p>
        <div className="flex items-center gap-x-4">
          {footerIcons.map(({ id, icon }) => (
            <div
              onClick={() =>
                handleOpenInNewTab("https://spiritualmealplanner.com/")
              }
              key={id}
              className=""
            >
              <button className="bg-white rounded-2xl p-2 cursor-pointer">{icon}</button>
              {/* <img src={img} alt="" className="md:w-20 md:h-20 w-12 h-12" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
