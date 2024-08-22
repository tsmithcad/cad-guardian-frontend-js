import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImagePreviewGallery = ({ capturedImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : capturedImages.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < capturedImages.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <IconButton onClick={handlePrevImage}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box>
        <img src={capturedImages[currentImageIndex]} alt={`Captured ${currentImageIndex + 1}`} style={{ maxWidth: '100%', maxHeight: '300px' }} />
      </Box>
      <IconButton onClick={handleNextImage}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImagePreviewGallery;
