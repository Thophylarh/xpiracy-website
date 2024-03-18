import React from 'react';
import { Modal, Box, useMediaQuery, useTheme } from '@mui/material';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'react-multi-email/dist/style.css';
import { love, users } from '../../assets/svgs';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import AppInput from '../AppInput/AppInput';
import publicIp from 'react-public-ip';
import useMakePayment from '../../hooks/usePayment';

const BookModal = ({ open, handleClose, handlePifModalOpen }) => {
  const [emails, setEmails] = useState([]);
  const [focused, setFocused] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [currency2, setCurrency2] = useState(0);
  const { makePostRequest, loading } = useMakePayment();
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const theme = createTheme();
  const currentTheme = useTheme();
  const isSmallScreen = useMediaQuery(currentTheme.breakpoints.down('sm'));

  const handleSliderChange = (event, newValue) => {
    if (newValue > sliderValue) {
      // Slider value increased
      setCurrency(
        (prevCurrency) => prevCurrency + (newValue - sliderValue) * 15
      );
      setCurrency2(
        (prevCurrency) => prevCurrency + (newValue - sliderValue) * 15
      );
    } else if (newValue < sliderValue) {
      // Slider value decreased
      setCurrency(
        (prevCurrency) => prevCurrency - (sliderValue - newValue) * 15
      );
      setCurrency2(
        (prevCurrency) => prevCurrency - (sliderValue - newValue) * 15
      );
    }
    setSliderValue(newValue);
  };

  const handleMakePayment = async () => {
    const ipv4 = (await publicIp.v4()) || '';
    const general = `${window.location.protocol}//${window.location.host}`;
    setCurrency2(0);
    const payload = {
      amount: currency,
      mode: 'payment',
      numberOfPeople: sliderValue.toString(),
      ipAddress: ipv4,
      successUrl: general,
      cancelUrl: general,
      payerName: 'mike',
      email: emails,
      payerName: inputValue,
    };

    console.log(payload, 'sent...');
    await makePostRequest(payload);
  };

  return (
    <ThemeProvider theme={theme}>
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
            width: isSmallScreen ? '90%' : 550, // Adjust width based on screen size
            maxWidth: '90vw', // Max width for small screens
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 5,
            p: 4,
          }}
        >
          <div className="">
            <div className="mb-8 space-y-2 text-black">
              <p className="text-xl font-normal text-black">$ {currency}</p>
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
                value={sliderValue}
                onChange={handleSliderChange}
                min={0}
                max={10}
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
            <div className="mt-4 ">
              <div>
                <p className="text-[#7D7A78] text-[12px] mb-2">
                  Your First Name{' '}
                </p>
                <AppInput
                  placeholder="First Name"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <p className="text-[#7D7A78] text-[12px] mb-2">Add Emails</p>
                <ReactMultiEmail
                  placeholder="Input your email"
                  emails={emails}
                  onChange={(_emails) => {
                    setEmails(_emails);
                  }}
                  autoFocus={true}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  getLabel={(email, index, removeEmail) => {
                    return (
                      <div data-tag key={index}>
                        <div data-tag-item>{email}</div>
                        <span
                          data-tag-handle
                          onClick={() => removeEmail(index)}
                        >
                          ×
                        </span>
                      </div>
                    );
                  }}
                />

                <h4>react-multi-email value</h4>
                <h3>Focused: {focused ? 'true' : 'false'}</h3>
                <p>{emails.join(', ') || 'empty'}</p>
                {currency2 === 0 ? (
                  <button
                    disabled={true}
                    className="bg-[#808080] text-white px-8 py-2 justify-center flex items-center gap-x-2 rounded-3xl"
                  >
                    <img src={love} alt="" />

                    {loading ? <p>Redirecting....</p> : <p>Pay it Forward</p>}
                  </button>
                ) : (
                  <button
                    onClick={handleMakePayment}
                    className="bg-[#E93C24] cursor-pointer text-white px-8 py-2 justify-center flex items-center gap-x-2 rounded-3xl"
                  >
                    <img src={love} alt="" />
                    <p>Pay it Forward</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default BookModal;
