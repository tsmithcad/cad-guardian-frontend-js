import React, { useState } from "react";
import { Box, Button, Typography, Tooltip, CircularProgress } from "@mui/material";
import { useDropzone } from "react-dropzone";
import DrawingExamples from "../components/DrawingExamples";
import cadImage from '../assets/img/cad-image.jpg';
import { Helmet } from 'react-helmet-async';
import axios from 'axios'; // Import axios

const Home = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onDrop = async (acceptedFiles) => {
    setError("");  // Clear any previous errors
    setLoading(true);  // Start loading indicator

    try {
        const file = acceptedFiles[0];  // Assuming only one file is uploaded

        // Create FormData to send the file
        const formData = new FormData();
        formData.append('file', file);

        // Send the file to the backend
        const response = await axios.post('http://localhost:5001/openai/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // Get summary from the response
        const { summary } = response.data;
        setSummary(summary);  // Display the summary to the user
    } catch (err) {
        // Check if there's a response from the backend
        if (err.response) {
            // Handle specific error responses from the backend
            const { message, errorCode } = err.response.data;
            setError(`Error: ${message} (Code: ${errorCode})`);
        } else {
            // Handle network or unexpected errors
            setError("Failed to summarize the file. Please try again.");
        }
    } finally {
        setLoading(false);  // Stop loading indicator
    }
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
    <>
      <Helmet>
        <title>CADGuardian - AI-Powered CAD Workflow Automation</title>
        <meta
          name="description"
          content="Revolutionize your CAD workflows with CADGuardian's AI-powered automation. From concept to production, automate every step and streamline your design process."
        />
      </Helmet>
      <Box sx={{ textAlign: "center", p: 2, maxWidth: 320, mx: "auto" }}>
        <Tooltip title="Easily convert your drawings into fully detailed CAD models and shop drawings.">
          <Box
            component="img"
            src={cadImage}
            alt="Placeholder"
            sx={{
              mt: 2,
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

        <Typography variant="h1" gutterBottom sx={{ fontWeight: "bold", mt: 2 }}>
          AI-Powered CAD Automation 
        </Typography>

        <Typography
          variant="h2"
          color="textSecondary"
          sx={{ fontWeight: "bold", mt: 2 }}
          gutterBottom
        >
          100% Automatically and{" "}
          <Typography component="span" color="secondary">
            Free
          </Typography>
        </Typography>

        {/* Dropzone Area */}
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

        {/* Show Loading Indicator */}
        {loading && <CircularProgress sx={{ mt: 2 }} />}

        {/* Display the summary */}
        {summary && (
          <Box sx={{ mt: 2, p: 2, border: '1px solid #ccc', borderRadius: '8px', textAlign: 'left' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Summary:</Typography>
            <Typography variant="body1">{summary}</Typography>
          </Box>
        )}

        {/* Display Error */}
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        <DrawingExamples />

        <Typography variant="caption" display="block" sx={{ mt: 2 }}>
          By uploading an image or URL you agree to our{" "}
          <a href="/terms-of-service">Terms of Service</a>. To learn more about
          how we handle your personal data, check our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </Typography>
      </Box>
    </>
  );
};

export default Home;
