import React from 'react';
import { Box, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrushIcon from '@mui/icons-material/Brush';
import PlaceIcon from '@mui/icons-material/Place';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import CameraCapture from './CameraCapture'; // Assuming this component handles its own transitions

// Helper function to format file size
const formatFileSize = (size) => {
  if (size < 1024) return `${size} bytes`;
  else if (size < 1048576) return `${(size / 1024).toFixed(1)} KB`;
  else return `${(size / 1048576).toFixed(1)} MB`;
};

// Updated DrawingStep Component to handle file upload using react-dropzone
const DrawingStep = ({ stepNumber, label, icon, onFileUpload, uploadedFile }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => onFileUpload(acceptedFiles[0]),
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5">{label}</Typography>
        <Box {...getRootProps()} sx={{ border: '2px dashed', p: 2, mt: 2 }}>
          <input {...getInputProps()} />
          <UploadFileIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          <Typography variant="body2" color="textSecondary">
            Drag & drop a file here, or click to select a file
          </Typography>
        </Box>
        {uploadedFile && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Uploaded File:</Typography>
            <Typography variant="body2">{uploadedFile.name}</Typography>
            <Typography variant="body2">
              Size: {formatFileSize(uploadedFile.size)}
            </Typography>
            <Typography variant="body2">
              Last Modified: {new Date(uploadedFile.lastModified).toLocaleString()}
            </Typography>
          </Box>
        )}
      </Box>
    </motion.div>
  );
};

// Steps Configurations for Object
const objectSteps = [
  {
    label: "Front",
    component: (props) => (
      <CameraCapture title="Front View" details="Capture the front view of the object." {...props} />
    ),
  },
  {
    label: "Side",
    component: (props) => (
      <CameraCapture title="Side View" details="Capture the side view of the object." {...props} />
    ),
  },
  {
    label: "Top",
    component: (props) => (
      <CameraCapture title="Top View" details="Capture the top view of the object." {...props} />
    ),
  },
  {
    label: "Bottom",
    component: (props) => (
      <CameraCapture title="Bottom View" details="Capture the bottom view of the object." {...props} />
    ),
  },
  {
    label: "Isometric",
    component: (props) => (
      <CameraCapture title="Isometric View" details="Capture the isometric view of the object." {...props} />
    ),
  },
  {
    label: "Finalize",
    component: (props) => (
      <CameraCapture title="Finalize Object" details="Capture any final views or notes for the object." {...props} />
    ),
  },
];

// Steps Configurations for Drawing
const drawingSteps = [
  {
    label: 'Upload',
    component: (props) => (
      <DrawingStep
        stepNumber={1}
        label="Upload Drawing"
        icon={<UploadFileIcon sx={{ fontSize: 48, color: 'primary.main' }} />}
        {...props}
      />
    ),
  },
  {
    label: 'Review',
    component: (props) => (
      <DrawingStep
        stepNumber={2}
        label="Review Drawing"
        icon={<VisibilityIcon sx={{ fontSize: 48, color: 'primary.main' }} />}
        {...props}
      />
    ),
  },
  {
    label: 'Annotate',
    component: (props) => (
      <DrawingStep
        stepNumber={3}
        label="Annotate Drawing"
        icon={<BrushIcon sx={{ fontSize: 48, color: 'primary.main' }} />}
        {...props}
      />
    ),
  },
  {
    label: 'Mark Key Points',
    component: (props) => (
      <DrawingStep
        stepNumber={4}
        label="Mark Key Points"
        icon={<PlaceIcon sx={{ fontSize: 48, color: 'primary.main' }} />}
        {...props}
      />
    ),
  },
  {
    label: 'Finalize',
    component: (props) => (
      <DrawingStep
        stepNumber={5}
        label="Finalize Drawing"
        icon={<CheckCircleIcon sx={{ fontSize: 48, color: 'primary.main' }} />}
        {...props}
      />
    ),
  },
];

export const stepsConfig = {
  object: objectSteps,
  drawing: drawingSteps,
};
