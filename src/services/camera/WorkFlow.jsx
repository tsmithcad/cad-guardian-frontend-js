import React, { useState } from "react";
import Webcam from "react-webcam";
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Container,
  useMediaQuery,
  Button,
  useTheme,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BrushIcon from "@mui/icons-material/Brush";
import PlaceIcon from "@mui/icons-material/Place";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CameraCapture = ({ title, details, onCapture }) => {
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = React.useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    onCapture(imageSrc);
  };

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
        style={{ width: "100%", height: "auto" }}
      />
      <IconButton
        color="primary"
        onClick={handleCapture}
        sx={{
          position: "relative",
          fontSize: "48px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
        }}
      >
        <CameraAltIcon sx={{ fontSize: "48px" }} />
      </IconButton>
      {capturedImage && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Preview:</Typography>
          <img src={capturedImage} alt="Captured" style={{ maxWidth: "100%" }} />
        </Box>
      )}
    </Box>
  );
};

const ObjectStep = ({ stepNumber, label, onCapture }) => (
  <CameraCapture
    title={`Step ${stepNumber} of 6: ${label}`}
    details={`Capture the ${label.toLowerCase()} of the object. Ensure clarity and focus for accurate modeling.`}
    onCapture={onCapture}
  />
);

const DrawingStep = ({ stepNumber, label, icon, onCapture }) => (
  <div style={{ textAlign: "center" }}>
    {icon}
  </div>
);

const objectSteps = [
  {
    label: "Front View",
    component: (props) => (
      <ObjectStep stepNumber={1} label="Front View" {...props} />
    ),
  },
  {
    label: "Side View",
    component: (props) => (
      <ObjectStep stepNumber={2} label="Side View" {...props} />
    ),
  },
  {
    label: "Top View",
    component: (props) => (
      <ObjectStep stepNumber={3} label="Top View" {...props} />
    ),
  },
  {
    label: "Bottom View",
    component: (props) => (
      <ObjectStep stepNumber={4} label="Bottom View" {...props} />
    ),
  },
  {
    label: "Isometric View",
    component: (props) => (
      <ObjectStep stepNumber={5} label="Isometric View" {...props} />
    ),
  },
  {
    label: "Finalize Object",
    component: (props) => (
      <ObjectStep stepNumber={6} label="Finalize Object" {...props} />
    ),
  },
];

const drawingSteps = [
  {
    label: "Upload Drawing",
    component: (props) => (
      <DrawingStep
        stepNumber={1}
        label="Upload Drawing"
        icon={<UploadFileIcon sx={{ fontSize: 48, color: "primary.main" }} />}
        {...props}
      />
    ),
  },
  {
    label: "Review Drawing",
    component: (props) => (
      <DrawingStep
        stepNumber={2}
        label="Review Drawing"
        icon={<VisibilityIcon sx={{ fontSize: 48, color: "primary.main" }} />}
        {...props}
      />
    ),
  },
  {
    label: "Annotate Drawing",
    component: (props) => (
      <DrawingStep
        stepNumber={3}
        label="Annotate Drawing"
        icon={<BrushIcon sx={{ fontSize: 48, color: "primary.main" }} />}
        {...props}
      />
    ),
  },
  {
    label: "Mark Key Points",
    component: (props) => (
      <DrawingStep
        stepNumber={4}
        label="Mark Key Points"
        icon={<PlaceIcon sx={{ fontSize: 48, color: "primary.main" }} />}
        {...props}
      />
    ),
  },
  {
    label: "Finalize Drawing",
    component: (props) => (
      <DrawingStep
        stepNumber={5}
        label="Finalize Drawing"
        icon={<CheckCircleIcon sx={{ fontSize: 48, color: "primary.main" }} />}
        {...props}
      />
    ),
  },
];

export const stepsConfig = {
  object: objectSteps,
  drawing: drawingSteps,
};

const WorkFlow = ({ journeyType }) => {
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

  const steps = journeyType === "object" ? objectSteps : drawingSteps;
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
        <Typography variant="h4" gutterBottom>
          {journeyType === "object" ? "Object Capture" : "Drawing Upload"}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {journeyType === "object"
            ? "Follow these steps to capture all necessary views of your object."
            : "Follow these steps to upload and process your drawing."}
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
          <StepContent onCapture={(image) => console.log(`Captured: ${image}`)} />
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

export default WorkFlow;
