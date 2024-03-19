import React, { useContext, useEffect } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import Lottie from 'lottie-react';
import { CloseIcon } from '@mantine/core';

const lottiee = require('../../assets/success.json');

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
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%', // Adjusted width for smaller screens
          maxWidth: 500, // Max width for larger screens
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 5,
          p: 4,
        }}
      >
        <div className="">
          <div
            onClick={handleClose}
            className="w-[50px] h-[50px] cursor-pointer z-50 absolute right-3 top-5"
          >
            <IconButton>
              <CloseIcon />
            </IconButton>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Lottie
              animationData={lottiee}
              loop={false}
              width={50}
              height={50}
            />
            <div className="mb-8 space-y-2 text-black">
              <h4 className="md:text-[16px] font-semibold text-[12px]">
                {title}
              </h4>
              <p className="md:text-xs text-[10px]">{subTitle}</p>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SingleSuccessModal;
