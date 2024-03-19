import React, { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavModal from '../modals/NavModal';
import logo from '../../assets/svgs/logo.svg';
import { AppDataContext } from '../../context/AppContext';
import { mainLogo } from '../../assets/png';

const NavBar = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { isModalOpen, toggleModal } = useContext(AppDataContext);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <div className="">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-100 h-[40%] w-[100%]">
        <div
          style={{ zIndex: 999 }}
          className="flex  items-center justify-between w-11/12 py-2 mx-auto "
        >
          <div className="">
            <img src={mainLogo} alt="" className="w-12 h-12" />
          </div>

          <div>
            <div
              className=" rounded-full p-2 text-white  cursor-pointer"
              onClick={toggleModal}
            >
              <MenuIcon style={{ color: '#E93C24', fontSize: 36 }} />
            </div>
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
