import { useState } from "react";
import { Typography, Button, Box, Chip } from "@mui/material";
import { GitHub, PlayCircleOutline } from "@mui/icons-material";
import { styled } from "@mui/system";
import Atropos from "atropos/react";
import { Masonry } from "@mui/lab";
import { TitleBox } from "../themes";

export interface ProjectsProps {}

interface Project {
  name: string;
  description: string;
  tools: string[];
  github: string;
  /** Video file in /public/videos. Drop the file there with this exact name. */
  video: string;
}

const projects: Project[] = [
  {
    name: "Global Superstore Sales Dashboard",
    description:
      "Interactive Power BI dashboard built on the 2016 Global Superstore dataset, covering ETL, data cleansing and DAX measures to deliver actionable business insights.",
    tools: ["Power BI", "DAX", "Power Query"],
    github: "https://github.com/saraismailali/Global-Superstore-Analysis",
    video: "/videos/global-superstore.mp4",
  },
  {
    name: "AdventureWorks Power BI Project",
    description:
      "Advanced Power BI report using data modeling, DAX, interactive dashboards, filters and tooltips to improve analysis and visualization.",
    tools: ["Power BI", "DAX", "Data Modeling"],
    github: "https://github.com/saraismailali/-Adventure-Works-Power-BI-Project",
    video: "/videos/adventureworks.mp4",
  },
  {
    name: "Senior Project – Sign Language Recognition",
    description:
      "Vision-based machine learning system that translates Egyptian Sign Language into Arabic words and characters to improve railway communication, reducing communication obstacles by 40%.",
    tools: ["Python", "Computer Vision"],
    github:
      "https://github.com/saraismailali/Egyptian-Sign-Language-Recognition-Using-Machine-Learning",
    video: "/videos/sign-language.mp4",
  },
  {
    name: "COVID-19 Detection Using CNN",
    description:
      "Automated system using Convolutional Neural Networks (CNNs) to detect COVID-19 from chest X-ray images, supporting faster early diagnosis.",
    tools: ["Python", "Deep Learning"],
    github: "https://github.com/saraismailali/Data-Tools-Project",
    video: "/videos/covid-cnn.mp4",
  },
  {
    name: "Data Wrangling and Visualization",
    description:
      "Analyzed the Titanic dataset in Python and R, applying data wrangling and clustering algorithms and comparing visual outputs across both languages.",
    tools: ["Python", "R", "Clustering"],
    github: "https://github.com/saraismailali/Data-Visualization-Project",
    video: "/videos/data-wrangling.mp4",
  },
];

const ProjectVideo: React.FC<{ src: string; title: string }> = ({
  src,
  title,
}) => {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <VideoPlaceholder>
        <PlayCircleOutline sx={{ fontSize: 56, opacity: 0.6 }} />
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Video coming soon
        </Typography>
      </VideoPlaceholder>
    );
  }

  return (
    <StyledVideo
      src={src}
      title={title}
      controls
      muted
      playsInline
      preload="metadata"
      onError={() => setMissing(true)}
    />
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <Box id="Projects" component={"section"} sx={{ my: 8 }}>
      <TitleBox>
        <Typography variant="h2" component="h2">
          Projects
        </Typography>
      </TitleBox>
      <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
        {projects.map((project) => (
          <MasonryItem key={project.name}>
            <Atropos
              rotateTouch="scroll-y"
              shadowScale={0.9}
              rotateXMax={4}
              rotateYMax={4}
            >
              <ProjectBox>
                <ProjectVideo src={project.video} title={project.name} />
                <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
                  {project.name}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tools.map((tool) => (
                    <Chip key={tool} label={tool} color="info" size="small" />
                  ))}
                </Box>
                <Typography variant="body2">{project.description}</Typography>
                <Box>
                  <Button
                    variant="contained"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHub />}
                  >
                    View on GitHub
                  </Button>
                </Box>
              </ProjectBox>
            </Atropos>
          </MasonryItem>
        ))}
      </Masonry>
    </Box>
  );
};

const ProjectBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  border: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));

const StyledVideo = styled("video")(({ theme }) => ({
  width: "100%",
  aspectRatio: "16 / 9",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#000",
  display: "block",
}));

const VideoPlaceholder = styled(Box)(({ theme }) => ({
  width: "100%",
  aspectRatio: "16 / 9",
  borderRadius: theme.shape.borderRadius,
  border: `2px dashed ${theme.palette.primary.main}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
}));

const MasonryItem = styled(Box)({
  width: "100%",
});
