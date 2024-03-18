import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <IconButton
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#E93C24",
            color: "white",
            zIndex: 9999,
            padding: "12px",
            borderRadius: "50%",
          }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <KeyboardArrowUpIcon style={{ fontSize: "30px" }} />{" "}
        </IconButton>
      )}
    </>
  );
};

export default ScrollToTop;
