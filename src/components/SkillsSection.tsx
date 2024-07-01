import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Atropos from "atropos/react";
import {
  StorageOutlined,
  BarChartOutlined,
  InsertChartOutlined,
  CodeOutlined,
  FunctionsOutlined,
  LocalDiningOutlined,
  AnalyticsOutlined,
  EmojiObjectsOutlined,
  GrainOutlined,
  FilterListOutlined,
  AccountTreeOutlined,
  LayersOutlined,
  PlaylistAddCheckOutlined,
  BuildOutlined,
} from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { TitleBox } from "../themes";

export interface Skill {
  name: string;
  icon: React.ReactElement;
}
const skills: Skill[] = [
  {
    name: "MySQL",
    icon: <StorageOutlined fontSize="large" />,
  },
  {
    name: "Power BI",
    icon: <BarChartOutlined fontSize="large" />,
  },
  {
    name: "Excel",
    icon: <InsertChartOutlined fontSize="large" />,
  },
  {
    name: "Python",
    icon: <CodeOutlined fontSize="large" />,
  },
  {
    name: "R",
    icon: <FunctionsOutlined fontSize="large" />,
  },
  {
    name: "HTML/CSS",
    icon: <LocalDiningOutlined fontSize="large" />,
  },
  {
    name: "PHP",
    icon: <AnalyticsOutlined fontSize="large" />,
  },
  {
    name: "JavaScript",
    icon: <EmojiObjectsOutlined fontSize="large" />,
  },
  {
    name: "SAS Viya",
    icon: <StorageOutlined fontSize="large" />,
  },
  {
    name: "Machine Learning",
    icon: <BarChartOutlined fontSize="large" />,
  },
  {
    name: "Data Modeling",
    icon: <GrainOutlined fontSize="large" />,
  },
  {
    name: "Data Visualization",
    icon: <FilterListOutlined fontSize="large" />,
  },
  {
    name: "Web Scraping",
    icon: <AccountTreeOutlined fontSize="large" />,
  },
  {
    name: "Data Wrangling",
    icon: <LayersOutlined fontSize="large" />,
  },
  {
    name: "Data Warehousing",
    icon: <PlaylistAddCheckOutlined fontSize="large" />,
  },
  {
    name: "Data Architecture",
    icon: <BuildOutlined fontSize="large" />,
  },
  {
    name: "Data Preparation",
    icon: <StorageOutlined fontSize="large" />,
  },
  {
    name: "ETL",
    icon: <BarChartOutlined fontSize="large" />,
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
