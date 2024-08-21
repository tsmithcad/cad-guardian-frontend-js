import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

// CameraCapture Component
const CameraCapture = ({ title, details, onCapture, capturedImage }) => {
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const webcamRef = useRef(null);

  useEffect(() => {
    const getDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );
      setDevices(videoDevices);
      setSelectedDeviceId(videoDevices[0]?.deviceId || "");
    };

    getDevices();
  }, []);

  const handleDeviceChange = (event) => {
    setSelectedDeviceId(event.target.value);
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <Box sx={{ textAlign: "center"}}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {details}
      </Typography>
      {devices.length > 1 && (
        <Select
          value={selectedDeviceId}
          onChange={handleDeviceChange}
          sx={{ mb: 2 }}
          fullWidth
        >
          {devices.map((device, index) => (
            <MenuItem key={index} value={device.deviceId}>
              {device.label || `Camera ${index + 1}`}
            </MenuItem>
          ))}
        </Select>
      )}
      <Box sx={{ position: "relative", display: "inline-block", mb: 2 }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          videoConstraints={{ deviceId: selectedDeviceId }}
          screenshotFormat="image/png"
          style={{ width: "100%", height: "auto" }}
        />
        <IconButton
          color="primary"
          onClick={handleCapture}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "48px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <CameraAltIcon sx={{ fontSize: "48px" }} />
        </IconButton>
      </Box>
      {capturedImage && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Preview:</Typography>
          <img src={capturedImage} alt="Captured" style={{ maxWidth: "100%" }} />
        </Box>
      )}
    </Box>
  );
};

export default CameraCapture;
