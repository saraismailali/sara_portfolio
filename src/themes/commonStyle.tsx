import { alpha, Box, styled } from "@mui/material";

export const ItemBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  border: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.7)}, ${theme.palette.background.default})`,
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(4),
  "& h2": {
    paddingBottom: theme.spacing(1),
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: theme.palette.primary.main,
      width: "50%",
      height: theme.spacing(0.5),
    },
  },
}));

export const SvgContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));
