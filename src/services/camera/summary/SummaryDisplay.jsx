import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ImagePreviewGallery from './ImagePreviewGallery';
import ModelAndSummarySection from './ModelAndSummarySection';

const SummaryDisplay = ({ capturedImages, modelUrl, summary, onReview }) => {
  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Header and Instructions */}
      <Box>
        <Typography variant="h4" gutterBottom>
          Review and Submit
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Review the captured images, AI-generated summary, and 3D model. Once you are satisfied, submit your object for final processing.
        </Typography>
      </Box>

      {/* Image Preview Gallery */}
      <ImagePreviewGallery capturedImages={capturedImages} />

      {/* Model and Summary Section */}
      <ModelAndSummarySection modelUrl={modelUrl} summary={summary} />

      {/* Review and Submit Button */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" onClick={onReview}>
          Submit for Processing
        </Button>
      </Box>
    </Box>
  );
};

export default SummaryDisplay;
