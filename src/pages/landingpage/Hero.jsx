import React, { useState } from "react";
import PifModal from "../../components/modals/PifModal";
import BookModal from "../../components/modals/BookModal";

const Hero = () => {
  const [pifModalOpen, setPifModalOpen] = useState(false);
  const [bookModalOpen, setBookModalOpen] = useState(false);

  const handlePifModalOpen = () => setPifModalOpen(true);
  const handlePifModalClose = () => setPifModalOpen(false);

  const handleBookModalOpen = () => {
    setPifModalOpen(false); // Close PifModal when BookModal opens
    setBookModalOpen(true);
  };

  const handleBookModalClose = () => setBookModalOpen(false);

  return (
    <div className="flex justify-center text-white hero-img">
      <div className="flex flex-col items-start w-11/12 my-auto">
        <div className="flex items-center gap-x-2">
          <div className="bg-[#e93c24] w-2 h-4"></div>
          <h4 className="text-2xl">WHAT WOULD JESUS DO</h4>
        </div>

        <h1 className="text-[4rem] font-bold">CHRISTPIRACY</h1>
        <h4 className="text-[16px] font-semibold">
          IN THEATRES{" "}
          <span className="text-[#e93c24]">MARCH 20TH, 24TH</span>{" "}
        </h4>
        <button onClick={handlePifModalOpen}>Pay it Forward</button>
      </div>
      <PifModal open={pifModalOpen} handleClose={handlePifModalClose} handleBookModalOpen={handleBookModalOpen} />
      <BookModal open={bookModalOpen} handleClose={handleBookModalClose} />
    </div>
  );
};

export default Hero;
