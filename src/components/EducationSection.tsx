import { Box, Grid, styled, Typography, Icon, alpha } from "@mui/material";
import React from "react";
import education_svg from "../assets/graduation hats-pana.svg";
import EventIcon from "@mui/icons-material/Event";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ItemBox, SvgContainer, TitleBox } from "../themes";
import Atropos from "atropos/react";

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  svg: string;
}

const educations: EducationItem[] = [
  {
    institution: "Faculty of Computer and Data Science",
    degree: "Alexandria University",
    period: "2019 - 2023",
    location: "Alexandria, Egypt",
    svg: education_svg,
  },
];

export const EducationSection: React.FC = () => {
  return (
    <Box component="section" id="Education" sx={{ my: 8 }}>
      <TitleBox>
        <Typography variant="h2" component="h2">
          Education
        </Typography>
      </TitleBox>
      {educations.map((education) => (
        <Atropos rotateTouch="scroll-y" key={JSON.stringify(education)}>
          <ItemBox>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Atropos
                  rotateTouch="scroll-y"
                  highlight={false}
                  shadow={false}
                >
                  <SvgContainer>
                    <img
                      style={{ maxWidth: "50%" }}
                      src={education.svg}
                      alt="Work Illustration"
                    />
                  </SvgContainer>
                </Atropos>
              </Grid>
              <Grid
                item
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
                xs={12}
                md={8}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {education.institution}
                </Typography>
                <TypographyWithBorder variant="body1" sx={{ mb: 1 }}>
                  <Icon component={EventIcon} sx={{ fontSize: 20, mr: 1 }} />
                  {education.period}
                </TypographyWithBorder>
                <TypographyWithBorder variant="body1" sx={{ mb: 2 }}>
                  <Icon
                    component={LocationOnOutlinedIcon}
                    sx={{ fontSize: 20, mr: 1 }}
                  />
                  {education.location}
                </TypographyWithBorder>
              </Grid>
            </Grid>
          </ItemBox>
        </Atropos>
      ))}
    </Box>
  );
};

const TypographyWithBorder = styled(Typography)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.primary.dark}`,
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  paddingTop: theme.spacing(1),
  display: "flex",
  alignItems: "center",
}));
