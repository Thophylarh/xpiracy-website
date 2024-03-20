import React, { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
      <div class="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-100 md:h-[40%] h-[35%] w-[100%]">
        <div
          style={{ zIndex: 99 }}
          className="flex mt-10  items-center justify-between w-11/12 py-2 mx-auto "
        >
          <div className="">
            <img
              src={mainLogo}
              alt=""
              class="md:w-[80px] w-[40px]  h-auto object-cover object-center"
            />
          </div>

          {isModalOpen ? (
            <CloseIcon
              onClick={toggleModal}
              style={{
                color: '#E93C24',
                zIndex: 9999,
                fontSize: 36,
                cursor: 'pointer',
              }}
            />
          ) : (
            <MenuIcon
              onClick={toggleModal}
              style={{
                color: '#E93C24',
                zIndex: 9999,
                fontSize: 36,
                cursor: 'pointer',
              }}
            />
          )}
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
