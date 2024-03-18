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
            bottom: "20px",
            right: "20px",
            backgroundColor: "#E93C24",
            color: "white",
            zIndex: 9999, // Ensure the button appears on top of other content
          }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </>
  );
};

export default ScrollToTop;
