import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  Typography,
  Button,
  Collapse,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const CameraCapture = ({
  title,
  details,
  onCapture,
  capturedImage,
  showCamera,
  toggleCameraVisibility,
  imageInfo, // Prop for passing image information
}) => {
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const webcamRef = useRef(null);

  const fetchDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );
    setDevices(videoDevices);
    if (videoDevices.length > 0) {
      setSelectedDeviceId(videoDevices[0].deviceId);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const handleDeviceChange = (event) => {
    setSelectedDeviceId(event.target.value);
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    if (imageSrc) {
      // Convert data URL to Blob to get the file size
      const byteString = atob(imageSrc.split(",")[1]);
      const mimeString = imageSrc.split(",")[0].split(":")[1].split(";")[0];
      const buffer = new ArrayBuffer(byteString.length);
      const data = new Uint8Array(buffer);

      for (let i = 0; i < byteString.length; i++) {
        data[i] = byteString.charCodeAt(i);
      }

      const blob = new Blob([buffer], { type: mimeString });

      // Generate a file name
      const fileName = `captured-image-${Date.now()}.png`;

      // Set the image information
      const capturedImageInfo = {
        size: (blob.size / 1024).toFixed(2), // Convert size to KB
        type: mimeString,
        name: fileName,
      };

      // Call the onCapture function with the image and its information
      onCapture(imageSrc, capturedImageInfo);
    }

    toggleCameraVisibility(false); // Hide camera and select menu after capture
  };

  const handleSelectOpen = () => {
    if (devices.length === 0) {
      fetchDevices(); // Re-check for devices if the list is empty
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {details}
      </Typography>

      <Collapse in={showCamera} sx={{ transition: "height 0.5s ease" }}>
        {showCamera && (
          <>
            <Select
             size="small"
              value={selectedDeviceId}
              onChange={handleDeviceChange}
              onOpen={handleSelectOpen}
              sx={{ mb: 2, maxWidth: "100%" }}
              fullWidth
            >
              {devices.length > 0 ? (
                devices.map((device, index) => (
                  <MenuItem key={index} value={device.deviceId}>
                    {device.label || `Camera ${index + 1}`}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="" disabled>
                  No cameras found
                </MenuItem>
              )}
            </Select>

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
          </>
        )}
      </Collapse>

      {capturedImage && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Preview:</Typography>
          <img src={capturedImage} alt="Captured" style={{ maxWidth: "100%" }} />
          {imageInfo && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">File Name: {imageInfo.name}</Typography>
              <Typography variant="body2">File Type: {imageInfo.type}</Typography>
              <Typography variant="body2">File Size: {imageInfo.size} KB</Typography>
            </Box>
          )}
          <Button
            variant="contained"
            onClick={() => toggleCameraVisibility(!showCamera)}
            sx={{ mt: 2, display: 'block', mx: 'auto' }} // Ensure the button is centered
          >
            {showCamera ? "Hide" : "Recapture Image"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CameraCapture;
