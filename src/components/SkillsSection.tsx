import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Atropos from "atropos/react";
import {
  BarChartOutlined,
  InsertChartOutlined,
  DashboardOutlined,
  PlaylistAddCheckOutlined,
  BuildOutlined,
  GrainOutlined,
  AutoStoriesOutlined,
  StorageOutlined,
  TableChartOutlined,
  CodeOutlined,
  FunctionsOutlined,
  AccountTreeOutlined,
  AnalyticsOutlined,
  BubbleChartOutlined,
  ShowChartOutlined,
  CategoryOutlined,
  PsychologyOutlined,
  TrendingUpOutlined,
  EmojiObjectsOutlined,
  SearchOutlined,
  ForumOutlined,
  AssessmentOutlined,
  GroupsOutlined,
  InsightsOutlined,
} from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { TitleBox } from "../themes";

export interface Skill {
  name: string;
  icon: React.ReactElement;
}
const skills: Skill[] = [
  {
    name: "Power BI",
    icon: <BarChartOutlined fontSize="large" />,
  },
  {
    name: "Excel (PivotTables, Power Query)",
    icon: <InsertChartOutlined fontSize="large" />,
  },
  {
    name: "Tableau",
    icon: <DashboardOutlined fontSize="large" />,
  },
  {
    name: "Data Warehousing",
    icon: <PlaylistAddCheckOutlined fontSize="large" />,
  },
  {
    name: "ETL",
    icon: <BuildOutlined fontSize="large" />,
  },
  {
    name: "Data Modeling",
    icon: <GrainOutlined fontSize="large" />,
  },
  {
    name: "Dashboard Development",
    icon: <DashboardOutlined fontSize="large" />,
  },
  {
    name: "Data Storytelling",
    icon: <AutoStoriesOutlined fontSize="large" />,
  },
  {
    name: "MySQL",
    icon: <StorageOutlined fontSize="large" />,
  },
  {
    name: "PostgreSQL",
    icon: <StorageOutlined fontSize="large" />,
  },
  {
    name: "SQL (joins, CTEs, window functions, optimization)",
    icon: <TableChartOutlined fontSize="large" />,
  },
  {
    name: "Python (Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn)",
    icon: <CodeOutlined fontSize="large" />,
  },
  {
    name: "R (ggplot2, dplyr)",
    icon: <FunctionsOutlined fontSize="large" />,
  },
  {
    name: "Web Scraping",
    icon: <AccountTreeOutlined fontSize="large" />,
  },
  {
    name: "Statistical Analysis",
    icon: <AnalyticsOutlined fontSize="large" />,
  },
  {
    name: "Clustering",
    icon: <BubbleChartOutlined fontSize="large" />,
  },
  {
    name: "Regression",
    icon: <ShowChartOutlined fontSize="large" />,
  },
  {
    name: "Classification",
    icon: <CategoryOutlined fontSize="large" />,
  },
  {
    name: "Convolutional Neural Networks (CNNs)",
    icon: <PsychologyOutlined fontSize="large" />,
  },
  {
    name: "Predictive Analytics",
    icon: <TrendingUpOutlined fontSize="large" />,
  },
  {
    name: "Product Analytics (UXCam, WebEngage)",
    icon: <InsightsOutlined fontSize="large" />,
  },
  {
    name: "Funnel, Churn & Retention Analysis",
    icon: <TrendingUpOutlined fontSize="large" />,
  },
  {
    name: "Git & GitHub",
    icon: <CodeOutlined fontSize="large" />,
  },
  {
    name: "Linux & VMware",
    icon: <BuildOutlined fontSize="large" />,
  },
  {
    name: "Problem-Solving",
    icon: <EmojiObjectsOutlined fontSize="large" />,
  },
  {
    name: "Attention to Detail",
    icon: <SearchOutlined fontSize="large" />,
  },
  {
    name: "Communication",
    icon: <ForumOutlined fontSize="large" />,
  },
  {
    name: "Reporting",
    icon: <AssessmentOutlined fontSize="large" />,
  },
  {
    name: "Cross-functional Collaboration",
    icon: <GroupsOutlined fontSize="large" />,
  },
  {
    name: "Business Intelligence",
    icon: <InsightsOutlined fontSize="large" />,
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <Box component="section" id="Skills" sx={{ my: 8 }}>
      <TitleBox>
        <Typography variant="h2" component="h2">
          Skills
        </Typography>
      </TitleBox>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        {skills.map((skill) => (
          <Atropos rotateTouch="scroll-y" key={JSON.stringify(skill)}>
            <SkillBox>
              <Box sx={{ fontWeight: "bold", mb: 1 }}>{skill.icon}</Box>
              <Typography variant="h5" component="h3">
                {skill.name}
              </Typography>
            </SkillBox>
          </Atropos>
        ))}
      </Masonry>
    </Box>
  );
};

const SkillBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  border: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
