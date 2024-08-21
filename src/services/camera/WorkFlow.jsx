import React, { useState } from 'react';
import { Container, Box, Typography, Stepper, Step, StepLabel, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { stepsConfig } from './Configuration';

const WorkFlow = ({ journeyType }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [capturedImages, setCapturedImages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCapturedImages([]);
    setUploadedFiles([]);
  };

  const handleCapture = (image) => {
    const updatedImages = [...capturedImages];
    updatedImages[activeStep] = image;
    setCapturedImages(updatedImages);
  };

  const handleFileUpload = (file) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles[activeStep] = file;
    setUploadedFiles(updatedFiles);
  };

  const steps = journeyType === 'object' ? stepsConfig.object : stepsConfig.drawing;
  const StepContent = steps[activeStep].component;

  return (
    <Container>
      <Box sx={{ borderRadius: 2, boxShadow: 3, p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {journeyType === 'object' ? 'Object Capture' : 'Drawing Upload'}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {journeyType === 'object'
            ? 'Follow these steps to capture all necessary views of your object.'
            : 'Follow these steps to upload and process your drawing.'}
        </Typography>
        <Stepper activeStep={activeStep} orientation={isMobile ? 'vertical' : 'horizontal'} sx={{ mt: 3, mb: 3 }}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mb: 2 }}>
          <StepContent
            onCapture={handleCapture}
            capturedImage={capturedImages[activeStep]}
            onFileUpload={handleFileUpload}
            uploadedFile={uploadedFiles[activeStep]}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button onClick={handleReset}>Reset</Button>
          ) : (
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default WorkFlow;
