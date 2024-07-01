import { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/system";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Zoom in={visible}>
      <ScrollTopButton
        color="primary"
        onClick={handleClick}
        aria-label="scroll back to top"
        size="small"
      >
        <KeyboardArrowUpIcon />
      </ScrollTopButton>
    </Zoom>
  );
};

const ScrollTopButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,
  transition: "0.5s",
}));
