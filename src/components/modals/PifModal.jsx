import React, { useContext, useState } from "react";
import { Modal, Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { love, users } from "../../assets/svgs";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import BookModal from "./BookModal";
import useMakePayment from "../../hooks/usePayment";
import publicIp from "react-public-ip";
import CloseIcon from "@mui/icons-material/Close";
import {
  IconButton, // Import IconButton
} from "@mui/material";
import { AppDataContext } from "../../context/AppContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Adjusted width for mobile screens
  maxWidth: 550, // Max width for larger screens
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const PifModal = ({ open, handleClose }) => {
  const [sliderValue, setSliderValue] = useState(2);
  const [bookTicketModalOpen, setBookTicketModalOpen] = useState(false);
  const [currency, setCurrency] = useState(30);
  const [currency2, setCurrency2] = useState(0);
  const [inputValue, setInputValue] = useState(2);
  const { handleBookModalOpen } = useContext(AppDataContext);

  const { makePostRequest, loading } = useMakePayment();

  const handleSliderChange = (event, newValue) => {
    setCurrency(newValue * 15);
    setSliderValue(newValue);
    setInputValue(newValue.toString());
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value.trim();
    setInputValue(newValue);

    if (newValue === "") {
      setSliderValue(0);
      setCurrency(0);
    } else {
      const parsedValue = parseInt(newValue);
      if (!isNaN(parsedValue)) {
        setSliderValue(parsedValue);
        setCurrency(parsedValue * 15);
      }
    }
  };

  const handleMakePayment = async () => {
    const ipv4 = (await publicIp.v4()) || "";
    const general = `${window.location.protocol}//${window.location.host}/singlePayment`;
    const faliure = `${window.location.protocol}//${window.location.host}`;
    setCurrency2(0);
    const payload = {
      amount: currency,
      mode: "payment",
      numberOfPeople: sliderValue.toString(),
      ipAddress: ipv4,
      successUrl: general,
      cancelUrl: faliure,
    };

    console.log(payload, "sent...");
    await makePostRequest(payload);
  };

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
            <IconButton
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <div>
              <p className="text-xl font-normal text-black">$ {currency}</p>
            </div>
            <div className="text-xl font-medium text-black">
              {loading && <p>loading......</p>}

              <p className="text-[16px] font-bold">
                Pay It Forward To A Stranger.
              </p>

              <p className="text-xs text-[#565453] ">
                Gift free tickets for someone else to watch Christspiracy in
                theaters.{" "}
              </p>
            </div>

            <div className="flex items-center mt-6 gap-x-4">
              <img src={users} alt="" />
              <Box sx={{ width: 450 }}>
                <Slider
                  size="small"
                  value={sliderValue}
                  onChange={handleSliderChange}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  sx={{
                    color: "#E93C24",
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#dc4a2b",
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "#dc4a2b",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#dc4a2b",
                    },
                  }}
                />
              </Box>

              <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                className="w-16 px-5 py-2 text-xs text-center text-black border custom-input"
                placeholder="0"
              />
            </div>

            <br />

            {currency === 0 ? (
              <button className="bg-[#808080] text-white px-8 py-2 justify-center flex items-center gap-x-2 rounded-[40px] w-full">
                <img src={love} alt="" className="w-6 h-6" />
                <p className="text-[14px]"> Pay it Forward</p>
              </button>
            ) : (
              <button
                onClick={handleMakePayment}
                className="bg-[#dc4a2b] cursor-pointer text-white px-8 py-2 justify-center flex items-center gap-x-2 rounded-[40px] w-full hover:bg-[#f86d5a]"
              >
                <img src={love} alt="" className="w-6 h-6" />
                {loading ? <p>Redirecting....</p> : <p className="text-[14px]">Pay it Forward</p>}
              </button>
            )}

            <div className="mt-6 text-black ">
              <div className="mb-8 space-y-2">
                <h4 className="text-lg font-bold">
                  Gift Your Loved One a Ticket.
                </h4>
                <p className="text-xs ">
                  Pay it Forward and book a movie ticket for a loved one to
                  watch Christspiracy in theaters.
                </p>
              </div>

              <div
                onClick={handleBookModalOpen}
                className="  bg-[#dc4a2b] cursor-pointer font-ppeiko rounded-[40px] p-[12px] hover:bg-[#f86d5a] text-sm  md:text-[16px] "
              >
                <button className="flex items-center justify-center w-full gap-x-1">
                  <div>
                    <ConfirmationNumberIcon
                      sx={{ color: "white", fontSize: "23px" }}
                    />
                  </div>
                  <p className="text-white text-[14px]">Gift a Ticket</p>
                </button>
              </div>

              <div className="mt-4 space-y-2">
                <h4 className="text-lg font-bold">Disclaimer</h4>
                <p className="text-xs ">
                  The funds from unclaimed Pay-it-Forward tickets will be
                  utilized for digital streams of the film and creation of
                  future Christspiracy-related content/films.
                </p>
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
