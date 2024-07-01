import { Container, Typography, Link, Box, IconButton } from "@mui/material";
import { Google, GitHub, WhatsApp, LinkedIn } from "@mui/icons-material";
import { styled } from "@mui/system";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Box>
          <IconButton href="tel:+20 106 403 3137" color="primary">
            <WhatsApp />
          </IconButton>
          <IconButton href="mailto:saraismail4255@gmail.com" color="primary">
            <Google />
          </IconButton>
          <IconButton href="https://github.com/saraismailali" color="primary">
            <GitHub />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/sarrraaali/"
            color="primary"
          >
            <LinkedIn />
          </IconButton>
        </Box>
        <Typography variant="body1">
          2024 © Powered By{" "}
          <StyledLink href="https://www.linkedin.com/in/kerolos-magdy-314644212/">
            Kerolos Magdy
          </StyledLink>
        </Typography>
      </StyledContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.common.white,
  textAlign: "center",
  padding: theme.spacing(3),
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
  textDecoration: "none",
  fontWeight: "bold",
}));
