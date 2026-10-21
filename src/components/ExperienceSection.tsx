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
      "Developed Power BI dashboards with KPIs aligned to business goals, improving reporting efficiency by 80% and increasing dashboard adoption by 40%.",
      "Delivered monthly and quarterly performance analyses whose insights increased sales conversion by 5% and reduced customer churn by 3%.",
      "Partnered with cross-functional teams to close performance gaps, contributing to a 7% increase in quarterly revenue.",
      "Produced monthly and quarterly departmental reports with tailored recommendations, integrating funnel and product analytics data from UXCam and WebEngage, and tracked follow-up actions through to execution.",
      "Led monthly and quarterly review meetings with all department leads to present findings and align on strategic actions.",
      "Performed root-cause analysis on data fluctuations and trends to inform strategic business decisions.",
      "Collected and analyzed employee and business data on request, giving leadership timely insights for decision-making.",
    ],
    svg: work1,
  },
  {
    title: "Junior Data Analyst",
    company: "BM Enterprise Management",
    period: "08/2023 - 08/2024",
    location: "Alexandria, Egypt",
    description: [
      "Led the transition to a paperless workflow by implementing an electronic business system, reducing paper costs by 30% and improving the speed, security and accuracy of records.",
      "Analyzed performance metrics and KPIs across 100+ insurance companies to identify the strongest candidates for future partnerships.",
    ],
    svg: work1,
  },
  {
    title: "Cyber Security Intern",
    company: "Security Meter",
    period: "08/2022 - 10/2022",
    location: "Remote",
    description: [
      "Completed hands-on training in VMware virtualization, creating and configuring virtual machines to build isolated lab environments for security practice.",
      "Gained practical experience with Linux, including command-line operations, file permissions, user management and basic system security.",
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
