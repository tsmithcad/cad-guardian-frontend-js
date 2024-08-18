import React, { useState, useEffect, useRef } from "react";
import { Box, Button, IconButton, MenuItem, Select, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const CameraCapture = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Request camera permission and enumerate devices
    const getDevices = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(stream);
        const deviceInfos = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = deviceInfos.filter(device => device.kind === "videoinput");
        setDevices(videoDevices);
        setSelectedDeviceId(videoDevices[0]?.deviceId || "");
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    getDevices();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  useEffect(() => {
    if (selectedDeviceId) {
      const startVideo = async () => {
        try {
          const videoStream = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: selectedDeviceId },
          });
          videoRef.current.srcObject = videoStream;
        } catch (error) {
          console.error("Error starting video:", error);
        }
      };

      startVideo();
    }
  }, [selectedDeviceId]);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    setCapturedImage(canvas.toDataURL("image/png"));
  };

  const handleDeviceChange = (event) => {
    setSelectedDeviceId(event.target.value);
  };

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Capture Image
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
  <video ref={videoRef} autoPlay playsInline style={{ width: "100%", height: "auto" }} />
  <canvas ref={canvasRef} style={{ display: "none" }} />
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
      '&:hover': {
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
