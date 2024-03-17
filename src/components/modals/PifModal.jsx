import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { love, users } from "../../assets/svgs";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import BookModal from "./BookModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const PifModal = ({ open, handleClose,handleBookModalOpen }) => {
  const [sliderValue, setSliderValue] = useState(70);
  const [bookTicketModalOpen, setBookTicketModalOpen] = useState(false);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const amount = Math.round((sliderValue / 100) * 15);

  const handleBookTicketOpen = () => {
    setBookTicketModalOpen(true);
  };

  const handleBookTicketClose = () => {
    setBookTicketModalOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            <div>
              <p className="text-xl font-normal text-black">{`$${amount}`}</p>
            </div>
            <div className="text-xl font-medium text-black">
              <p className="text-[16px] font-bold">
                Pay It Forward To A Stranger
              </p>

              <p className="text-xs text-[#565453] ">
                Gift free tickets for someone else to watch Christspiracy in
                theaters.{" "}
              </p>
            </div>

            <div className="flex items-center mt-6 gap-x-4">
              <img src={users} alt="" />
              <Box sx={{ width: 200 }}>
                <Slider
                  size="small"
                  value={sliderValue}
                  onChange={handleSliderChange}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  sx={{
                    color: "#E93C24",
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#E93C24",
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "#E93C24",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#E93C24",
                    },
                  }}
                />
              </Box>
              <div className="px-4 border">
                <p className="text-xs text-black">{sliderValue}</p>
              </div>
            </div>

            <br />
            <div className="bg-[#E93C24] text-white px-8 py-2 justify-center flex items-center gap-x-2 rounded-3xl">
              <img src={love} alt="" />
              <button className="">Pay it Forward</button>
            </div>

            <div className="mt-6 text-black ">
              <div className="mb-8 space-y-2">
                <h4 className="text-lg font-bold">
                  Gift Your Loved One a Ticket
                </h4>
                <p className="text-xs ">
                  Pay it forward and book a movie ticket for someone dear to you
                  to watch this at the movie theaters
                </p>
              </div>

              <div className="p-2 border-2 rounded-md">
                <button
                  className="flex items-center justify-center gap-x-2"
                  onClick={handleBookModalOpen}
                >
                  <ConfirmationNumberIcon
                    sx={{ color: "#565453", fontSize: "18px" }}
                  />
                  <p className="text-xs text-[#565453]">Book Ticket</p>
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <BookModal
        open={bookTicketModalOpen}
        handleClose={handleBookTicketClose}
      />
    </>
  );
};

export default PifModal;
