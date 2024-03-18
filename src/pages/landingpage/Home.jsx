import React, { useContext } from 'react';
import Hero from './Hero';
import Spiritual from './Spiritual';
import Journey from './Journey';
import Mail from './Mail';
import Footer from '../../components/footer';
import ScrollToTop from '../../components/ScrollToTop';
import { AppDataContext } from '../../context/AppContext';
import NavModal from '../../components/modals/NavModal';
import ClaimModal from '../../components/modals/ClaimModal';
import PifModal from '../../components/modals/PifModal';

const Home = () => {
  const {
    isModalOpen,
    toggleModal,
    claimModalOpen,
    pifModalOpen,
    handlePifModalOpen,
    handlePifModalClose,
  } = useContext(AppDataContext);

  return (
    <div>
      <Hero />
      <Spiritual />
      <ScrollToTop />
      <Journey />
      <Mail />

      {isModalOpen && (
        <div>
          <NavModal isOpen={isModalOpen} closeDrawer={toggleModal} />
        </div>
      )}

      <ClaimModal open={claimModalOpen} />
      <PifModal open={pifModalOpen} handleClose={handlePifModalClose} />
    </div>
  );
};

export default Home;
