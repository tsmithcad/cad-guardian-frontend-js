import React from "react";
import { Box, Button, Typography, Tooltip } from "@mui/material";
import { useDropzone } from "react-dropzone";
import DrawingExamples from "../components/DrawingExamples";
import cadImage from '../assets/img/cad-image.jpg';

const Home = () => {
  const onDrop = (acceptedFiles) => {
    // Handle the dropped files here (DWG, DXF, PDF, etc.)
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.jpg', '.jpeg', '.png'],
      'application/dwg': ['.dwg'],
      'application/dxf': ['.dxf']
    }
  });

  return (
    <Box sx={{ textAlign: "center", p: 2, maxWidth: 320, mx: "auto" }}>
      <Tooltip title="Easily convert your drawings into fully detailed CAD models and shop drawings.">
        <Box
          component="img"
          src={cadImage}
          alt="Placeholder"
          sx={{
            mt: 5,
            maxHeight: "200px",
            width: "auto",
            mx: "auto",
            height: "200px",
            display: "block",
            borderRadius: 10, 
            border: "1px solid #ccc",
          }}
        />
      </Tooltip>

      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mt: 4 }}>
        CAD Drawing Ai
      </Typography>

      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ fontWeight: "bold", mt: 4 }}
        gutterBottom
      >
        100% Automatically and{" "}
        <Typography component="span" color="secondary">
          Free
        </Typography>
      </Typography>

      <Tooltip title="When clicked, it should open a file dialog allowing users to upload various formats like DWG, DXF, PDF, STEP and JPG. Consider drag-and-drop functionality.">
        <Box
          {...getRootProps()}
          sx={{
            border: "2px dashed #ccc",
            borderRadius: "8px",
            p: 2,
            textAlign: "center",
            cursor: "pointer",
            mt: 2,
            mb: 2,
            backgroundColor: isDragActive ? "#f0f0f0" : "inherit",
          }}
        >
          <input {...getInputProps()} />
          <Typography variant="body2" color="textSecondary">
            {isDragActive ? "Drop the files here..." : "Drag & Drop your files here or click to upload"}
          </Typography>
        </Box>
      </Tooltip>

      <DrawingExamples />

      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        By uploading an image or URL you agree to our{" "}
        <a href="/terms-of-service">Terms of Service</a>. To learn more about
        how we handle your personal data, check our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </Typography>
    </Box>
  );
};

export default Home;
