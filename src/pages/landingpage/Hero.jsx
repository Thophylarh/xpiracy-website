import React, { useContext, useState } from "react";
import PifModal from "../../components/modals/PifModal";
import BookModal from "../../components/modals/BookModal";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { AppDataContext } from "../../context/AppContext";

const Hero = () => {
  const [pifModalOpen, setPifModalOpen] = useState(false);
  // const [bookModalOpen, setBookModalOpen] = useState(false);
  const {
    bookModalOpen,
    setBookModalOpen,
    handleBookModalOpen,
    handlePifModalOpen,
    handlePifModalClose,
  } = useContext(AppDataContext);

  // const handlePifModalOpen = () => setPifModalOpen(true);
  // const handlePifModalClose = () => setPifModalOpen(false);

  const handleBookModalClose = () => setBookModalOpen(false);

  // Determine which image to display based on viewport width

  return (
    <div className="flex justify-center  text-white h-[80vh]">
      <div className="flex flex-col md:mt-[20%] mt-[95%] items-start w-11/12 my-auto">
        <div className="flex items-center gap-x-2">
          <div className="bg-[#dc4a2b] w-2 h-4"></div>
          <h4 className="text-[0.6rem] md:text-[16px]">WHAT WOULD JESUS DO?</h4>
        </div>

        <h1 className="md:text-[4rem] text-[3rem]  font-ppeikoBold">
          CHRISTSPIRACY
        </h1>
        <h4 className="md:text-[16px] text-[14px] font-semibold">
          In Theaters <span className="text-[#dc4a2b]">MARCH 20TH, 24TH.</span>{" "}
        </h4>

        <p className="text-[12px] text-[#d8d6d6] md:w-[400px] my-2">
          Allow someone else to watch Christspiracy for free. Your generosity
          helps spread this message far and wide.{" "}
        </p>
        <button
          onClick={handlePifModalOpen}
          className="bg-[#dc4a2b] p-4 rounded-[40px] my-4 text-sm flex items-center hover:bg-[#f86d5a]"
        >
          <ConfirmationNumberIcon sx={{ color: "#fff", fontSize: "18px" }} />
          <p className="ml-2">Pay it Forward</p>
        </button>
      </div>

      {/* Conditional rendering of modal components */}
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
