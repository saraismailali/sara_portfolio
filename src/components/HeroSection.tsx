import { useEffect, useRef } from "react";
import Vanta from "vanta/dist/vanta.birds.min";
import Typed from "typed.js";
import { Box, Typography, useTheme } from "@mui/material";

export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Data Analyst"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) {
      vantaRef.current = Vanta({
        el: "#HeroSection",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x160625,
        color1: 0xf77575,
        color2: 0xfffffe,
        colorMode: "lerp",
        birdSize: 0.8,
        wingSpan: 25.0,
        speedLimit: 3.0,
        separation: 75.0,
        alignment: 50.0,
        cohesion: 5.0,
      });
    }
  }, []);

  const theme = useTheme();
  return (
    <Box
      id="HeroSection"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: theme.spacing(2),
        }}
        gap={theme.spacing(1)}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: theme.spacing(4),
            color: theme.palette.primary.contrastText,
          }}
        >
          Hello I'm
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "calc(2rem + 2vw);",
            color: theme.palette.primary.main,
          }}
        >
          Sara Ismail Ali
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.primary.contrastText,
          }}
        >
          <Typography
            sx={{ fontSize: theme.spacing(3), textAlign: "center" }}
            id="typed"
            ref={typedRef}
          />
        </Box>
      </Box>
    </Box>
  );
};
