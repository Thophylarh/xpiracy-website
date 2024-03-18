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
import { useNavigate } from 'react-router-dom';

const MultipleSuccessPayment = () => {
  const {
    isModalOpen,
    toggleModal,
    claimModalOpen,
    pifModalOpen,
    handlePifModalOpen,
    handlePifModalClose,
  } = useContext(AppDataContext);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

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
        title="Thank you for Paying it Forward!"
        subTitle="Someone who otherwise would not have been able to watch the film will receive a free ticket. Your generosity helps spread this message far and wide. "
      />
    </div>
  );
};

export default MultipleSuccessPayment;
