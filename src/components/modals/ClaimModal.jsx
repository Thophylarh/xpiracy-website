import React, { useContext } from "react";
import { Modal, Box, Checkbox, Button, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup"; // Import Yup for form validation

import { AppDataContext } from "../../context/AppContext";

const ClaimModal = () => {
  const { closeClaimModal, claimModalOpen } = useContext(AppDataContext);

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Modal
      open={claimModalOpen}
      onClose={closeClaimModal}
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
          <div className="mb-8 space-y-2 text-black">
            <h4 className="md:text-[16px] font-semibold text-[12px]">
              The Christspiracy community has generously sponsored theater
              tickets for those who need it on Sunday, March 24th.
            </h4>
            <p className="md:text-xs text-[10px]">
              Claiming tickets is based on an honor system. Please only claim if
              you otherwise would not be able to purchase a ticket.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} style={{ textAlign: "left" }}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              style={{
                width: "100%",
                marginBottom: "1rem",
                padding: "0.5rem",
                borderRadius: "0.25rem",
                border: "1px solid #ced4da",
              }}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}

            {/* Checkboxes */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0.rem" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    id="checkbox1"
                    name="checkbox1"
                    checked={formik.values.checkbox1}
                    onChange={formik.handleChange}
                    style={{ color: "#E93C24" }}
                  />
                }
                label={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    I understand that this ticket is only valid in the United
                    States.
                  </span>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="checkbox2"
                    name="checkbox2"
                    checked={formik.values.checkbox2}
                    onChange={formik.handleChange}
                    style={{ color: "#E93C24" }}
                  />
                }
                label={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    With this ticket, I will watch Christspiracy in theaters on
                    Sunday, March 24th.
                  </span>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="checkbox3"
                    name="checkbox3"
                    checked={formik.values.checkbox3}
                    onChange={formik.handleChange}
                    style={{ color: "#E93C24" }}
                  />
                }
                label={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    I want to receive email updates from Christspiracy
                  </span>
                }
              />
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <Button
                type="submit"
                disabled={
                  !(formik.values.checkbox1 && formik.values.checkbox2) ||
                  formik.isSubmitting
                }
                style={{
                  marginTop: "1rem",
                  backgroundColor: "#E93C24",
                  borderRadius: "5px",
                  color: "white",
                  padding: "0.5rem 2rem",
                  border: "none",
                  cursor: "pointer",
                }}
                // Hover styles
                sx={{
                  "&:hover": {
                    backgroundColor: "#ff6347",
                  },
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default ClaimModal;
