import React from "react";
import { Grid, Box, Typography, Button, IconButton, Chip } from "@mui/material";
import {
  Google,
  GitHub,
  Download,
  Send,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";

import data_analysis from "../assets/data-analysis-bro.svg";

export interface AboutMeSectionProps {}

export const AboutMeSection: React.FC<AboutMeSectionProps> = () => {
  return (
    <AboutSectionContainer component="section" id="AboutMe" sx={{ my: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} alignSelf={"center"}>
          <ProfileBox>
            <ImageBorder />
            <ImageContainer>
              <img alt="Profile" src={data_analysis} />
              <Overlay>
                <IconButton href="tel:+20 106 403 3137" color="primary">
                  <WhatsApp />
                </IconButton>
                <IconButton
                  href="mailto:saraismail4255@gmail.com"
                  color="primary"
                >
                  <Google />
                </IconButton>
                <IconButton
                  href="https://github.com/saraismailali"
                  color="primary"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/sarrraaali/"
                  color="primary"
                >
                  <LinkedIn />
                </IconButton>
              </Overlay>
            </ImageContainer>
          </ProfileBox>
        </Grid>
        <Grid item xs={12} md={8}>
          <TitleBox sx={{ mb: 2 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              textTransform={"uppercase"}
            >
              about me
            </Typography>
            <Typography variant="body1">
              Junior data analyst with a proven track record of leveraging data
              to address business challenges. Proficient in utilizing tools such
              as Power BI, Excel, MySQL, Python, and R to efficiently gather,
              clean, analyze, and visualize data. Demonstrated ability to
              translate complex datasets into actionable insights, contributing
              to informed decision-making. Keen attention to detail, strong
              analytical skills, and a commitment to delivering high-quality
              results. Seeking opportunities to apply my expertise in data
              analysis to drive strategic business outcomes.
            </Typography>
          </TitleBox>
          <InformationContainer container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">Name:</Typography>
              <MarginInlineStart variant="body1">
                Sara Ismail Ali
              </MarginInlineStart>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">Age:</Typography>
              <MarginInlineStart variant="body1">
                {new Date().getFullYear() -
                  new Date("2001-11-11").getFullYear()}
              </MarginInlineStart>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h5"
                sx={{ marginInlineEnd: `8px !important` }}
              >
                Remote Availability:
              </Typography>
              <Chip
                label="Available"
                variant="outlined"
                color="success"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">Job Title:</Typography>
              <MarginInlineStart variant="body1">
                Data Analyst
              </MarginInlineStart>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">Location:</Typography>
              <MarginInlineStart variant="body1">
                Alexandria, Egypt
              </MarginInlineStart>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">E-mail:</Typography>
              <Button
                variant="text"
                component="a"
                href="mailto:saraismail4255@gmail.com"
              >
                saraismail4255@gmail.com
              </Button>
            </Grid>
          </InformationContainer>
          <ButtonContainer sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              href="../assets/SaraIsmailAliCV.pdf"
              download
            >
              Download CV
            </Button>
            <Button
              variant="outlined"
              endIcon={<Send />}
              href="tel:+20 106 403 3137"
            >
              Hire Me
            </Button>
          </ButtonContainer>
        </Grid>
      </Grid>
    </AboutSectionContainer>
  );
};

const MarginInlineStart = styled(Typography)(({ theme }) => ({
  marginInlineStart: theme.spacing(1),
}));

const AboutSectionContainer = styled(Box)(() => ({
  "& img": {
    width: "100%",
    height: "auto",
  },
}));

const ProfileBox = styled(Box)(() => ({
  position: "relative",
  textAlign: "center",
}));

const ImageBorder = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "100%",
  position: "absolute",
  border: `${theme.spacing(1)} solid`,
  transform: "translate(0, -23px)",
  zIndex: -1,
  [theme.breakpoints.down("lg")]: {
    transform: "translate(0, -23px)",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ImageContainer = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  "&:hover div": {
    bottom: 0,
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: alpha(theme.palette.common.black, 0.5),
  bottom: "-100%",
  transition: "0.5s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    margin: theme.spacing(1.25),
    color: theme.palette.common.white,
    transition: "0.5s",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  borderBottom: `2px dashed ${theme.palette.primary.main}`,
  paddingBottom: theme.spacing(1.25),
  "& h2": {
    position: "relative",
    padding: `0 ${theme.spacing(2)}`,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      height: "100%",
    },
  },
}));

const InformationContainer = styled(Grid)(({ theme }) => ({
  margin: `${theme.spacing(1.875)} 0`,
  "& div": {
    display: "flex",
    alignItems: "center",
    padding: 0,
    "& h5": {
      margin: 0,
      fontSize: "1rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "calc(0.7rem + 1vw)",
      },
    },
    "& p": {
      margin: `0 ${theme.spacing(0.625)}px`,
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        fontSize: "calc(0.7rem + 1vw)",
      },
    },
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));
