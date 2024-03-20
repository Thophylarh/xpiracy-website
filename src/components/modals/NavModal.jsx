import React, { useContext, useState } from 'react';
import DrawerWrapper from '../wrapper/Wrapper';
import { Logo } from '../../assets/svgs';
import { Link } from 'react-router-dom';
import ClaimModal from './ClaimModal'; // Import the ClaimModal component
import { AppDataContext } from '../../context/AppContext';
import { handleOpenInNewTab } from '../../utils/handleOpenInNewTab';
import { mainLogo } from '../../assets/png';
import AppBtn from '../AppBtn/AppBtn';

const NavModal = ({ isOpen, closeDrawer }) => {
  const { setIsModalOpen, setClaimModalOpen, handlePifModalOpen, toggleModal } =
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
          <div className="flex items-center justify-center  flex-col text-[48px]  text-[#fff] py-[6rem] space-y-10">
            <Link
              onClick={toggleModal}
              to="/"
              className="hover:text-[#E93c24] text-xl md:text-2xl "
            >
              Home
            </Link>
            <Link
              onClick={handlePaayItFwdModal}
              to=""
              className="hover:text-[#dc4a2b] text-xl md:text-2xl "
            >
              Pay It Forward
            </Link>
            <Link
              to=""
              onClick={() =>
                handleOpenInNewTab('https://spiritualmealplanner.com/')
              }
              className="hover:text-[#dc4a2b] text-xl md:text-2xl flex items-center justify-center"
            >
              Get Meal Planner
            </Link>
            <Link
              to=""
              onClick={() =>
                handleOpenInNewTab('https://www.skool.com/christspiracy/about')
              }
              className="hover:text-[#dc4a2b] text-xl md:text-2xl flex items-center justify-center"
            >
              Join The Movement
            </Link>
            <Link
              to=""
              onClick={() =>
                handleOpenInNewTab(
                  'https://www.youtube.com/watch?v=PlHaV5rEBN8&ab_channel=MoviePass'
                )
              }
              className="hover:text-[#dc4a2b] text-xl md:text-2xl flex items-center justify-center"
            >
              Watch Trailer
            </Link>
            <button
              onClick={handleClaimTicketClick}
              className="bg-[#dc4a2b] cursor-pointer py-3 hover:text-[#fff] text-xl md:text-2xl text-center text-white  px-6 rounded-[40px] flex items-center justify-center"
            >
              Claim Ticket
            </button>
          </div>

          {/* <AppBtn title="Claim Ticket" /> */}
        </div>
      </div>
    </DrawerWrapper>
  );
};

export default NavModal;
