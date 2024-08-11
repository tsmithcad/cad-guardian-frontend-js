// Stepper.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Container,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

const Step1 = () => (
  <div>
    <h2>Select journey settings</h2>
    <p>
      For each ai training form you submit, you can control international projects, and more.
    </p>
  </div>
);

const Step2 = () => (
  <div>
    <h2>Create an ad group</h2>
    <p>Details for Step 2...</p>
  </div>
);

const Step3 = () => (
  <div>
    <h2>Create an ad</h2>
    <p>Details for Step 3...</p>
  </div>
);

const steps = [
  { label: "Select campaign settings", component: Step1 },
  { label: "Create an ad group", component: Step2 },
  { label: "Create an ad", component: Step3 },
];

const Journey = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StepContent = steps[activeStep].component;

  return (
    <Container>
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
          mt: 4,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Journey
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Follow these steps to create and configure your ad campaign.
        </Typography>
        <Stepper
          activeStep={activeStep}
          orientation={isMobile ? "vertical" : "horizontal"}
          sx={{ mt: 3, mb: 3 }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mb: 2 }}>
          <StepContent />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button onClick={handleReset}>Reset</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Journey;
