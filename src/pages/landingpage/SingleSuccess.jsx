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
import SingleSuccessModal from '../../components/modals/SingleSuccessModal';

const SingleSuccess = () => {
  const {
    isModalOpen,
    toggleModal,
    claimModalOpen,
    pifModalOpen,
    handlePifModalOpen,
    handlePifModalClose,
  } = useContext(AppDataContext);

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <SingleSuccessModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title=" Thank you for Paying it Forward!"
        subTitle="Soon, your friend will receive a ticket code in their inbox.
        Message them to make sure they don’t miss it!"
      />
    </div>
  );
};

export default SingleSuccess;
