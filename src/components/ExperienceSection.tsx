import {
  alpha,
  Box,
  Chip,
  Grid,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { WorkOutline, Event } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";
import work1 from "../assets/freelancer-bro.svg";
import Atropos from "atropos/react";
import { ItemBox, SvgContainer, TitleBox } from "../themes";

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  svg: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Analyst",
    company: "Brand Marketing Agency",
    period: "08/2023 - Present",
    location: "Remote",
    description: [
      "Built Power BI dashboards to visualize core Business KPIs (such as monthly revenues) saving 10 hours per week of manual reporting work.",
      "Handled large datasets, conducted data cleansing, and gathered information from diverse sources, executing Extract, Transform, Load (ETL) processes.",
    ],
    svg: work1,
  },
];

export const ExperienceSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box component="section" id="Experience" sx={{ my: 8 }}>
      <TitleBox>
        <Typography variant="h2" component="h2">
          Experience
        </Typography>
      </TitleBox>
      {experiences.map((experience) => (
        <Atropos rotateTouch="scroll-y" key={JSON.stringify(experience)}>
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
                      style={{ maxWidth: "75%" }}
                      src={experience.svg}
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
                  {experience.title}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={1} mb={2}>
                  <Atropos rotateTouch="scroll-y" shadow={false}>
                    <StyledChip
                      label={experience.company}
                      color="info"
                      icon={<WorkOutline />}
                    />
                  </Atropos>
                  <Atropos rotateTouch="scroll-y" shadow={false}>
                    <StyledChip
                      label={experience.period}
                      color="success"
                      icon={<Event />}
                    />
                  </Atropos>
                  <Atropos rotateTouch="scroll-y" shadow={false}>
                    <StyledChip
                      label={experience.location}
                      color="secondary"
                      icon={<LocationOnOutlinedIcon />}
                    />
                  </Atropos>
                </Box>
                <DescriptionList>
                  {experience.description.map((desc, i) => (
                    <Typography
                      variant="body2"
                      component="li"
                      key={i}
                      sx={{ mb: 1 }}
                    >
                      {desc}
                    </Typography>
                  ))}
                </DescriptionList>
              </Grid>
            </Grid>
          </ItemBox>
        </Atropos>
      ))}
    </Box>
  );
};

const StyledChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
}));

const DescriptionList = styled("ul")(({ theme }) => ({
  padding: theme.spacing(0),
  margin: theme.spacing(0, 0, 2),
  listStyle: "none",
  "& li": {
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    borderLeft: `4px solid ${theme.palette.primary.dark}`,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
