import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavModal from "../modals/NavModal";
import logo from "../../assets/svgs/logo.svg";
import { AppDataContext } from "../../context/AppContext";

const NavBar = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { isModalOpen, toggleModal } = useContext(AppDataContext);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <div className="">
      <div className="flex items-center justify-between  py-2 mx-auto ">
        <div className="">
          <img src={logo} alt="" />
        </div>

        <div>
          <div
            className="border-2 rounded-full p-2 text-white border-[#3D3D3D] cursor-pointer"
            onClick={toggleModal}
          >
            <MenuIcon style={{ color: "#E93C24" }} />
          </div>
        </div>
      </div>

      {/* Render the Modal component when isModalOpen is true */}
      {/* {isModalOpen && (
        <div>
          <NavModal isOpen={isModalOpen} closeDrawer={toggleModal} />
        </div>
      )} */}
    </div>
  );
};

export default NavBar;
