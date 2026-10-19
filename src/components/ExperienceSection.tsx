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
    company: "SDC APP",
    period: "12/2024 - Present",
    location: "Jeddah, Saudi Arabia",
    description: [
      "Collected and analyzed employee and business data upon request, ensuring leadership had timely insights for decision-making.",
      "Delivered monthly and quarterly reports with tailored recommendations for each department, integrating insights, funnels, and data generated from UXCam and WebEngage to enable deeper analysis; tracked follow-up actions to ensure execution.",
      "Held monthly and quarterly meetings with all department leads to review reports, discuss findings, and align on strategic actions.",
      "Developed new dashboards and visualizations (Using power BI) with KPIs aligned to business goals, enabling teams to track performance and improving reporting efficiency by 80%.",
      "Conducted monthly and quarterly performance analyses, delivering insights that increased sales conversion by 5% and reduced customer churn by 3%.",
      "Partnered with cross-functional teams to close performance gaps, driving a 7% increase in quarterly revenue.",
      "Boosted dashboard adoption by 40%, strengthening a data-driven decision-making culture.",
      "Performed root-cause analysis on data fluctuations and trends, uncovering insights that informed strategic business decisions.",
    ],
    svg: work1,
  },
  {
    title: "Junior Data Analyst",
    company: "BM Enterprise Management",
    period: "08/2023 - 08/2024",
    location: "Alexandria, Egypt",
    description: [
      "Led the transition to a paperless practice by implementing an electronic system and a faster, safer and more accurate business system; reduced cost of paper by 30%.",
      "Conducted a comprehensive analysis of data from over 100 companies, evaluating various metrics and performance indicators to identify the best insurance company for potential future partnerships and collaborations.",
    ],
    svg: work1,
  },
  {
    title: "Cyber Security Intern",
    company: "Security Meter",
    period: "08/2022 - 10/2022",
    location: "Remote",
    description: [],
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
