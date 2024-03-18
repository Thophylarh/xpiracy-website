import React, { useContext } from 'react';
import { Modal, Box } from '@mui/material';

import 'react-multi-email/dist/style.css';
import { users } from '../../assets/svgs';
import Slider from '@mui/material/Slider';
import { AppDataContext } from '../../context/AppContext';

const ClaimModal = () => {
  const { closeClaimModal, claimModalOpen } = useContext(AppDataContext);
  return (
    <Modal
      open={claimModalOpen}
      onClose={closeClaimModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 350,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 5,
          p: 4,
        }}
      >
        <div className="">
          <div className="mb-8 space-y-2 text-black">
            <h4 className="text-lg font-bold">
              How Many People Do You Want To Pay For
            </h4>
            <p className="text-xs ">
              Provide free tickets for someone to watch this at the movie
              theaters
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img src={users} alt="" />
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
              sx={{
                color: '#E93C24',
                '& .MuiSlider-thumb': {
                  backgroundColor: '#E93C24',
                },
                '& .MuiSlider-track': {
                  backgroundColor: '#E93C24',
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#E93C24',
                },
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-black text-[9px] px-6">min:1</p>
            <p className="text-black text-[9px]">max:10</p>
          </div>
          <div className="mt-4 "></div>
        </div>
      </Box>
    </Modal>
  );
};

export default ClaimModal;
