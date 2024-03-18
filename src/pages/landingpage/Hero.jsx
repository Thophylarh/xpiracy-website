import React, { useState } from "react";
import PifModal from "../../components/modals/PifModal";
import BookModal from "../../components/modals/BookModal";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

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
          <h4 className="text-[14px] md:text-2xl">WHAT WOULD JESUS DO</h4>
        </div>

        <h1 className="md:text-[4rem] text-[2rem] font-bold">CHRISTPIRACY</h1>
        <h4 className="md:text-[16px] text-[14px] font-semibold">
          IN THEATRES <span className="text-[#e93c24]">MARCH 20TH, 24TH</span>{" "}
        </h4>
        {/* <button className="p-2 my-4 underline rounded text-[13px]">Sign Up For More</button>
        <p className="text-white">Receive extra content, community, resources, and more. </p> */}
        <button
          onClick={handlePifModalOpen}
          className="bg-[#E93C24] p-2 rounded my-4 text-sm flex items-center gap-x-2"
        >
          <ConfirmationNumberIcon sx={{ color: "#fff", fontSize: "18px" }} />
          Pay it Forward
        </button>
        <p className="text-white md:w-[400px]">Allow someone else to watch Christspiracy for free. Your generosity helps spread this message far and wide. </p>
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
