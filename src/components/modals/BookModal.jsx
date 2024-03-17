import React from "react";
import { Modal, Box } from "@mui/material";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "react-multi-email/dist/style.css";
import { love, users } from "../../assets/svgs";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const BookModal = ({ open, handleClose, handlePifModalOpen }) => {
  const [emails, setEmails] = useState([]);
  const [focused, setFocused] = useState(false);
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
          width: 350,
          bgcolor: "background.paper",
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
          </div>
          <div className="flex items-center justify-between">
            <p className="text-black text-[9px] px-6">min:1</p>
            <p className="text-black text-[9px]">max:10</p>
          </div>
          <div className="mt-4 ">
            <form>
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
                      <span data-tag-handle onClick={() => removeEmail(index)}>
                        ×
                      </span>
                    </div>
                  );
                }}
              />

              <h4>react-multi-email value</h4>
              <h3>Focused: {focused ? "true" : "false"}</h3>
              <p>{emails.join(", ") || "empty"}</p>
              <div className="bg-[#E93C24] text-white px-8 py-2 justify-center flex items-center gap-x-2 rounded-3xl">
                <img src={love} alt="" />
                <button className="">Pay it Forward</button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default BookModal;
