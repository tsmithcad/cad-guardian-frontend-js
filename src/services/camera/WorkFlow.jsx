import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  useMediaQuery,
  LinearProgress,
  MenuItem,
  Select,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { stepsConfig } from './Configuration';

const WorkFlow = ({ journeyType }) => {
  const [activeObjectStep, setActiveObjectStep] = useState(0);
  const [activeDrawingStep, setActiveDrawingStep] = useState(0);
  const [capturedImages, setCapturedImages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [cameraVisibility, setCameraVisibility] = useState(Array(stepsConfig.object.length).fill(true)); // State for camera visibility
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
      setCameraVisibility(Array(stepsConfig.object.length).fill(true));
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

  const toggleCameraVisibility = (visible) => {
    const updatedVisibility = [...cameraVisibility];
    updatedVisibility[activeObjectStep] = visible;
    setCameraVisibility(updatedVisibility);
  };

  const activeStep = journeyType === 'object' ? activeObjectStep : activeDrawingStep;
  const steps = journeyType === 'object' ? stepsConfig.object : stepsConfig.drawing;
  const StepContent = steps[activeStep].component;

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          {journeyType === 'object' ? 'Object Capture' : 'Drawing Upload'}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {journeyType === 'object'
            ? 'Follow steps to capture all views of your object.'
            : 'Follow these steps to upload your drawing.'}
        </Typography>
        
        {/* Mobile View: Compact Stepper with Dropdown */}
        {isMobile ? (
          <Box sx={{ mt: 3, mb: 3 }}>
            <LinearProgress variant="determinate" value={(activeStep / steps.length) * 100} />
            <Select
              value={activeStep}
              onChange={(e) => {
                if (journeyType === 'object') {
                  setActiveObjectStep(e.target.value);
                } else {
                  setActiveDrawingStep(e.target.value);
                }
              }}
              fullWidth
              sx={{ mt: 2 }}
            >
              {steps.map((step, index) => (
                <MenuItem key={index} value={index}>
                  {index + 1}. {step.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        ) : (
          // Desktop View: Traditional Stepper
          <Stepper activeStep={activeStep} orientation="horizontal" sx={{ mt: 3, mb: 3 }}>
            {steps.map((step, index) => (
              <Step key={index} completed={activeStep > index}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
        
        <Box sx={{ mb: 2 }}>
          <StepContent
            onCapture={handleCapture}
            capturedImage={journeyType === 'object' ? capturedImages[activeObjectStep] : null}
            onFileUpload={handleFileUpload}
            uploadedFile={journeyType === 'drawing' ? uploadedFiles[activeDrawingStep] : null}
            showCamera={cameraVisibility[activeObjectStep]}
            toggleCameraVisibility={toggleCameraVisibility}
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
