import { useEffect, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import Atropos from "atropos/react";
import { noCase } from "change-case";
import { Masonry } from "@mui/lab";
import { Loader } from "./Loader";
import { TitleBox } from "../themes";

export interface ProjectsProps {}

interface Project {
  id: string;
  name: string;
  html_url: string;
}

export const ProjectsSection: React.FC = () => {
  const [data, setData] = useState<Project[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    setLoader(true);
    axios
      .get("https://api.github.com/users/saraismailali/repos")
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log("🚀 ~ callApi ~ err:", err);
        setLoader(false);
      });
  }

  useEffect(() => {
    document.body.style.overflowY = loader ? "hidden" : "auto";
  }, [loader]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Box id="Projects" component={"section"} sx={{ my: 8 }}>
          <TitleBox>
            <Typography variant="h2" component="h2">
              Projects
            </Typography>
          </TitleBox>
          <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            {data.map((el) => (
              <MasonryItem key={el.id}>
                <Atropos rotateTouch="scroll-y" shadowScale={0.9}>
                  <SkillBox>
                    <Typography variant="h5" gutterBottom>
                      {noCase(el?.name)}
                    </Typography>
                    <Box>
                      <Button
                        variant="contained"
                        href={el.html_url}
                        target="_blank"
                      >
                        Show Now
                      </Button>
                    </Box>
                  </SkillBox>
                </Atropos>
              </MasonryItem>
            ))}
          </Masonry>
        </Box>
      )}
    </>
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

const MasonryItem = styled(Box)({
  marginBottom: "16px",
  width: "100%",
});
