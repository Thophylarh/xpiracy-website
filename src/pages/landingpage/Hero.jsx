import React, { useContext, useState } from 'react';
import PifModal from '../../components/modals/PifModal';
import BookModal from '../../components/modals/BookModal';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { AppDataContext } from '../../context/AppContext';

const Hero = () => {
  const [pifModalOpen, setPifModalOpen] = useState(false);
  // const [bookModalOpen, setBookModalOpen] = useState(false);
  const { bookModalOpen, setBookModalOpen, handleBookModalOpen } =
    useContext(AppDataContext);

  const handlePifModalOpen = () => setPifModalOpen(true);
  const handlePifModalClose = () => setPifModalOpen(false);

  const handleBookModalClose = () => setBookModalOpen(false);

  return (
    <div className="flex justify-center text-white h-[80vh]">
      <div className="flex flex-col items-start w-11/12 my-auto">
        <div className="flex items-center gap-x-2">
          <div className="bg-[#e93c24] w-2 h-4"></div>
          <h4 className="text-[14px] md:text-[16px]">WHAT WOULD JESUS DO?</h4>
        </div>

        <h1 className="md:text-[4rem] text-[2rem] font-bold">CHRISTSPIRACY</h1>
        <h4 className="md:text-[16px] text-[14px] font-semibold">
          IN THEATRES <span className="text-[#e93c24]">MARCH 20TH, 24TH.</span>{' '}
        </h4>
        {/* <button className="p-2 my-4 underline rounded text-[13px]">Sign Up For More</button>
        <p className="text-white">Receive extra content, community, resources, and more. </p> */}
        <button
          onClick={handlePifModalOpen}
          className="bg-[#E93C24] p-4 rounded-[40px] my-4 text-sm flex items-center hover:bg-[#f86d5a]"
        >
          <ConfirmationNumberIcon sx={{ color: '#fff', fontSize: '18px' }} />
          <p className="ml-2">Pay it Forward</p>
        </button>

        <p className="text-[12px] text-[#d8d6d6] md:w-[400px]">
          Allow someone else to watch Christspiracy for free. Your generosity
          helps spread this message far and wide.{' '}
        </p>
      </div>
      <PifModal
        open={pifModalOpen}
        handleClose={handlePifModalClose}
        handleBookModalOpen={handleBookModalOpen}
      />
      <BookModal open={bookModalOpen} handleClose={handleBookModalClose} />
    </div>
  );
};

export default Hero;
