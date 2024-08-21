import React from 'react';
import { Box, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BrushIcon from '@mui/icons-material/Brush';
import PlaceIcon from '@mui/icons-material/Place';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDropzone } from 'react-dropzone';

// Updated CameraCapture Component to handle image capture
const CameraCapture = ({ title, details, onCapture, capturedImage }) => {
  // ... existing code

  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {details}
      </Typography>
      {/* ... existing code for camera capture */}
      {capturedImage && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Preview:</Typography>
          <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%' }} />
        </Box>
      )}
    </Box>
  );
};

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
    <Box sx={{ textAlign: 'center', p: 3 }}>
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
  );
};

// Steps Configurations
const objectSteps = [
  {
    label: "Front View",
    component: (props) => (
      <CameraCapture stepNumber={1} label="Front View" {...props} />
    ),
  },
  {
    label: "Side View",
    component: (props) => (
      <CameraCapture stepNumber={2} label="Side View" {...props} />
    ),
  },
  {
    label: "Top View",
    component: (props) => (
      <CameraCapture stepNumber={3} label="Top View" {...props} />
    ),
  },
  {
    label: "Bottom View",
    component: (props) => (
      <CameraCapture stepNumber={4} label="Bottom View" {...props} />
    ),
  },
  {
    label: "Isometric View",
    component: (props) => (
      <CameraCapture stepNumber={5} label="Isometric View" {...props} />
    ),
  },
  {
    label: "Finalize Object",
    component: (props) => (
      <CameraCapture stepNumber={6} label="Finalize Object" {...props} />
    ),
  },
];

const drawingSteps = [
  {
    label: 'Upload Drawing',
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
    label: 'Review Drawing',
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
    label: 'Annotate Drawing',
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
    label: 'Finalize Drawing',
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
