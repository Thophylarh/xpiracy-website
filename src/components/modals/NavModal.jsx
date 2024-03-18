import React, { useContext, useState } from "react";
import DrawerWrapper from "../wrapper/Wrapper";
import { Logo } from "../../assets/svgs";
import { Link } from "react-router-dom";
import ClaimModal from "./ClaimModal"; // Import the ClaimModal component
import { AppDataContext } from "../../context/AppContext";

const NavModal = ({ isOpen, closeDrawer }) => {
  const { setIsModalOpen, setClaimModalOpen } = useContext(AppDataContext);

  const handleClaimTicketClick = () => {
    setIsModalOpen(false);
    setClaimModalOpen(true);
  };

  return (
    <DrawerWrapper>
      <div className="modal-nav h-[100vh]">
        <div className="modal-container bg-[#0f0f10]">
          <div className="w-11/12 mx-auto ">
            <div className="">
              <img src={Logo} alt="" />
            </div>
            <span className="mx-auto close " onClick={closeDrawer}>
              &times;
            </span>
          </div>
          <div className="flex items-center justify-center  flex-col text-[48px] font-bold text-[#fff] py-20 space-y-8">
            <Link to="" className="hover:text-[#E93c24] text-4xl">
              Home
            </Link>
            <Link to="" className="hover:text-[#E93c24] text-4xl">
              Pay It Forward
            </Link>
            <Link to="" className="hover:text-[#E93c24] text-4xl">
              Get Meal Planner
            </Link>

            <Link
              to=""
              className="hover:text-[#ed7363] text-4xl bg-[#E93c24] text-white py-2 px-6 rounded"
              onClick={handleClaimTicketClick}
            >
              Claim Ticket
            </Link>
          </div>
        </div>
      </div>

      {/* <ClaimModal open={claimModalOpen} handleClose={handleCloseClaimModal} /> */}
    </DrawerWrapper>
  );
};

export default NavModal;
