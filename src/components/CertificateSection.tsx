import React, { useState } from "react";
import img1 from "../assets/certificate1.png";
import img2 from "../assets/certificate2.png";
import img3 from "../assets/certificate3.png";
import img4 from "../assets/certificate4.png";
import img5 from "../assets/certificate5.png";
import img6 from "../assets/certificate6.png";
import img7 from "../assets/certificate7.png";
import img8 from "../assets/certificate8.png";
import img10 from "../assets/certificate10.jpg";

import { Box, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { TitleBox } from "../themes";
import Atropos from "atropos/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { styled } from "@mui/system";

const certificateImages = [img1, img2, img3, img4, img5, img6, img7, img8].map(
  (img) => ({ original: img })
);

const GalleryContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 99999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const GalleryContent = styled(Box)(({ theme }) => ({
  width: "75%",
  maxWidth: "1200px",
}));

export const CertificateSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  return (
    <Box component="section" id="Education" sx={{ my: 8 }}>
      <TitleBox>
        <Typography variant="h2" component="h2">
          Certificates
        </Typography>
      </TitleBox>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
        {certificateImages.map((img, index) => (
          <Atropos
            rotateTouch="scroll-y"
            key={index}
            onClick={() => handleClick(index)}
          >
            <img
              style={{ width: "100%", cursor: "pointer" }}
              src={img.original}
              title="Certificate"
            />
          </Atropos>
        ))}
      </Masonry>
      {isOpen && (
        <GalleryContainer onClick={() => setIsOpen(false)}>
          <GalleryContent onClick={(e) => e.stopPropagation()}>
            <ImageGallery
              items={certificateImages}
              startIndex={selectedImageIndex}
              showThumbnails={false}
              showPlayButton={false}
              onSlide={(index) => setSelectedImageIndex(index)}
            />
          </GalleryContent>
        </GalleryContainer>
      )}
    </Box>
  );
};
