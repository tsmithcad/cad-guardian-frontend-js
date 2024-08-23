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

const WorkFlow = () => {
  const [activeObjectStep, setActiveObjectStep] = useState(0);
  const [capturedImages, setCapturedImages] = useState([]);
  const [imageInfos, setImageInfos] = useState([]); // Array to hold image info for each step
  const [cameraVisibility, setCameraVisibility] = useState(Array(stepsConfig.object.length).fill(true));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = () => {
    setActiveObjectStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveObjectStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveObjectStep(0);
    setCapturedImages([]);
    setImageInfos([]); // Reset image info
    setCameraVisibility(Array(stepsConfig.object.length).fill(true));
  };

  const handleCapture = (image, imageInfo) => {
    const updatedImages = [...capturedImages];
    updatedImages[activeObjectStep] = image;
    setCapturedImages(updatedImages);

    const updatedImageInfos = [...imageInfos];
    updatedImageInfos[activeObjectStep] = imageInfo;
    setImageInfos(updatedImageInfos);
  };

  const toggleCameraVisibility = (visible) => {
    const updatedVisibility = [...cameraVisibility];
    updatedVisibility[activeObjectStep] = visible;
    setCameraVisibility(updatedVisibility);
  };

  const activeStep = activeObjectStep;
  const steps = stepsConfig.object;
  const StepContent = steps[activeStep].component;

  return (
    <Container>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          Object Capture
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Follow steps to capture all views of your object.
        </Typography>
        
        {/* Mobile View: Compact Stepper with Dropdown */}
        {isMobile ? (
          <Box sx={{ mt: 3, mb: 3 }}>
            <LinearProgress variant="determinate" value={(activeStep / steps.length) * 100} />
            <Select
             size="small"
              value={activeStep}
              onChange={(e) => setActiveObjectStep(e.target.value)}
              fullWidth
              sx={{ mt: 2, }}
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
        <Box sx={{ mb: 2 }}>
          <StepContent
            onCapture={handleCapture}
            capturedImage={capturedImages[activeObjectStep]}
            imageInfo={imageInfos[activeObjectStep]} // Pass image info to StepContent
            showCamera={cameraVisibility[activeObjectStep]}
            toggleCameraVisibility={toggleCameraVisibility}
          />
        </Box>
        
      </Box>
    </Container>
  );
};

export default WorkFlow;
