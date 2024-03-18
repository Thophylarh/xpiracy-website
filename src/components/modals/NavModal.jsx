import React, { useContext, useState } from "react";
import DrawerWrapper from "../wrapper/Wrapper";
import { Logo } from "../../assets/svgs";
import { Link } from "react-router-dom";
import ClaimModal from "./ClaimModal"; // Import the ClaimModal component
import { AppDataContext } from "../../context/AppContext";
import { handleOpenInNewTab } from "../../utils/handleOpenInNewTab";

const NavModal = ({ isOpen, closeDrawer }) => {
  const { setIsModalOpen, setClaimModalOpen, handlePifModalOpen } =
    useContext(AppDataContext);

  const handleClaimTicketClick = () => {
    setIsModalOpen(false);
    setClaimModalOpen(true);
  };

  const handlePaayItFwdModal = () => {
    setIsModalOpen(false);
    handlePifModalOpen();
  };

  return (
    <DrawerWrapper>
      <div className="modal-nav h-[100vh]">
        <div className="modal-container bg-[#0f0f10]">
          <div className="w-11/12 mx-auto ">
            <div className="flex items-center justify-between">
              <div className="">
                <img src={Logo} alt="" />
              </div>
              <span className="mx-auto close " onClick={closeDrawer}>
                &times;
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center  flex-col text-[48px] font-bold text-[#fff] py-20 space-y-8">
            <Link to="" className="hover:text-[#E93c24] text-xl md:text-4xl ">
              Home
            </Link>
            <Link
              onClick={handlePaayItFwdModal}
              to=""
              className="hover:text-[#E93c24] text-xl md:text-4xl "
            >
              Pay It Forward
            </Link>
            <Link
              to=""
              onClick={() =>
                handleOpenInNewTab("https://spiritualmealplanner.com/")
              }
              className="hover:text-[#E93c24] text-xl md:text-4xl flex items-center justify-center"
            >
              Get Meal Planner
            </Link>

            <div className="bg-[#E93c24] hover:text-[#ed7363] py-2 px-6 rounded-[40px] flex items-center justify-center">
              <Link
                to=""
                className="text-2xl md:text-4xl text-white"
                onClick={handleClaimTicketClick}
              >
                Claim Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <ClaimModal open={claimModalOpen} handleClose={handleCloseClaimModal} /> */}
    </DrawerWrapper>
  );
};

export default NavModal;
