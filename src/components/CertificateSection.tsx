import React, { useState } from "react";
import img1 from "../assets/certificate1.png";
import img2 from "../assets/certificate2.png";
import img3 from "../assets/certificate3.png";
import img4 from "../assets/certificate4.png";
import img5 from "../assets/certificate5.png";
import img6 from "../assets/certificate6.png";
import img7 from "../assets/certificate7.png";
import img8 from "../assets/certificate8.png";
import img9 from "../assets/certificate9.jpg";
import img10 from "../assets/certificate10.jpg";
import img11 from "../assets/certificate11.jpg";
import img12 from "../assets/certificate12.png";
import img13 from "../assets/certificate13.svg";

import { Box, Button, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { TitleBox } from "../themes";
import Atropos from "atropos/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { styled } from "@mui/system";

export interface CertificateItem {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  image: string;
}

const certificates: CertificateItem[] = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    date: "Dec 15, 2025",
    link: "https://learn.microsoft.com/en-gb/users/saraali-1065/credentials/abde942c36385002",
    image: img13,
  },
  {
    name: "Thinking Like an Analyst",
    issuer: "365 Careers / Maven Analytics",
    date: "Oct 30, 2024",
    link: "https://certificates.mavenanalytics.io/bdf3a464-f42f-4bcd-895a-388e60e05ca1#acc.704b8Jsk",
    image: img12,
  },
  {
    name: "Business Intelligence Analyst Course",
    issuer: "365 Careers",
    date: "Jul 3, 2024",
    link: "https://www.udemy.com/certificate/UC-a10bd0ea-2655-4db0-91ab-740ef59f599c/",
    image: img10,
  },
  {
    name: "PostgreSQL Essential Training",
    issuer: "LinkedIn Learning",
    date: "Nov 7, 2023",
    link: "https://www.linkedin.com/learning/certificates/132b81c0693bfc071f8dc5bd99c9f6a666178be432e41c7cb7b1e7151e90a615",
    image: img9,
  },
  {
    name: "Understanding Data Engineering",
    issuer: "DataCamp",
    date: "Oct 24, 2023",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/b32ee40a4fba66e55070bbfa0fd11b316fc0bf4b",
    image: img3,
  },
  {
    name: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Udemy",
    date: "Oct 21, 2023",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a4affd34-e899-4870-89a6-157dea7cb8b2.pdf",
    image: img6,
  },
  {
    name: "Intermediate Importing Data in Python",
    issuer: "DataCamp",
    date: "Sep 24, 2023",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/8736ce0997163ab48916fff85688791ba31ad7f9",
    image: img2,
  },
  {
    name: "Business Analytics with Excel",
    issuer: "Johns Hopkins University (Coursera)",
    date: "Sep 17, 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/89BYS4C35HR5",
    image: img5,
  },
  {
    name: "Foundations of Data Science",
    issuer: "Google",
    date: "Sep 13, 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/Z4FHBEZ4LMSW",
    image: img11,
  },
  {
    name: "Introduction to Databases",
    issuer: "Meta (Coursera)",
    date: "Sep 11, 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/EHCH5UQ5CW8B",
    image: img4,
  },
  {
    name: "Databases: Relational Databases and SQL",
    issuer: "edX",
    date: "Jul 19, 2023",
    link: "https://courses.edx.org/certificates/8eaece324b8c4774934ba4be31caa351",
    image: img8,
  },
  {
    name: "Cyber Security Diploma Course",
    issuer: "Security Meter",
    date: "Oct 2022",
    image: img7,
  },
  {
    name: "Introduction to Programming Using Python",
    issuer: "New Horizons",
    date: "Dec 2019",
    link: "https://drive.google.com/file/d/1r5JebFJ1n9avNRKpwcRdT2AGFyZw5Kqc/view",
    image: img1,
  },
];

const certificateImages = certificates.map((certificate) => ({
  original: certificate.image,
}));

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
        {certificates.map((certificate, index) => (
          <Box key={certificate.name}>
            <Atropos
              rotateTouch="scroll-y"
              onClick={() => handleClick(index)}
            >
              <img
                style={{ width: "100%", cursor: "pointer" }}
                src={certificate.image}
                alt={certificate.name}
                title={certificate.name}
              />
            </Atropos>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {certificate.name}
              </Typography>
              <Typography variant="body2">
                {certificate.issuer} · {certificate.date}
              </Typography>
              {certificate.link && (
                <Button
                  size="small"
                  href={certificate.link}
                  target="_blank"
                  sx={{ px: 0 }}
                >
                  Show Credential
                </Button>
              )}
            </Box>
          </Box>
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
