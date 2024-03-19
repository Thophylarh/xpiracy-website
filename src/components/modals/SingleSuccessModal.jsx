import React, { useContext, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import Lottie from "lottie-react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const lottiee = require("../../assets/success.json");

const SingleSuccessModal = ({ open, handleClose, title, subTitle }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%", // Adjusted width for smaller screens
          maxWidth: 600, // Max width for larger screens
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 5,
          p: 4,
        }}
      >
        <div style={{ textAlign: "center" }}>
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
          <Lottie animationData={lottiee} loop={false} width={50} height={50} />
          <div className="mb-8 space-y-2 text-black">
            <h4 className="md:text-[16px] font-semibold text-[12px]">
              {title}
            </h4>
            <p className="md:text-xs text-[10px]">{subTitle}</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SingleSuccessModal;
