import React, { useState } from 'react';
import { Container, Box, Typography, Stepper, Step, StepLabel, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { stepsConfig } from './Configuration';

const WorkFlow = ({ journeyType }) => {
  // Maintain separate states for object and drawing steps
  const [activeObjectStep, setActiveObjectStep] = useState(0);
  const [activeDrawingStep, setActiveDrawingStep] = useState(0);
  const [capturedImages, setCapturedImages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    if (journeyType === 'object') {
      setActiveObjectStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveDrawingStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (journeyType === 'object') {
      setActiveObjectStep((prevActiveStep) => prevActiveStep - 1);
    } else {
      setActiveDrawingStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    if (journeyType === 'object') {
      setActiveObjectStep(0);
      setCapturedImages([]);
    } else {
      setActiveDrawingStep(0);
      setUploadedFiles([]);
    }
  };

  const handleCapture = (image) => {
    if (journeyType === 'object') {
      const updatedImages = [...capturedImages];
      updatedImages[activeObjectStep] = image;
      setCapturedImages(updatedImages);
    }
  };

  const handleFileUpload = (file) => {
    if (journeyType === 'drawing') {
      const updatedFiles = [...uploadedFiles];
      updatedFiles[activeDrawingStep] = file;
      setUploadedFiles(updatedFiles);
    }
  };

  const activeStep = journeyType === 'object' ? activeObjectStep : activeDrawingStep;
  const steps = journeyType === 'object' ? stepsConfig.object : stepsConfig.drawing;
  const StepContent = steps[activeStep].component;

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {journeyType === 'object' ? 'Object Capture' : 'Drawing Upload'}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {journeyType === 'object'
            ? 'Follow steps to capture all views of your object.'
            : 'Follow these steps to upload your drawing.'}
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
            capturedImage={journeyType === 'object' ? capturedImages[activeObjectStep] : null}
            onFileUpload={handleFileUpload}
            uploadedFile={journeyType === 'drawing' ? uploadedFiles[activeDrawingStep] : null}
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
