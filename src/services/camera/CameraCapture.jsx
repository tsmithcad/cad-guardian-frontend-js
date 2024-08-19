import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Instructions from "../../components/common/Instructions";

const CameraCapture = () => {
	const [devices, setDevices] = useState([]);
	const [selectedDeviceId, setSelectedDeviceId] = useState("");
	const [stream, setStream] = useState(null);
	const [capturedImage, setCapturedImage] = useState(null);
	const [summary, setSummary] = useState("");
	const videoRef = useRef(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		// Request camera permission and enumerate devices
		const getDevices = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true,
				});
				setStream(stream);
				const deviceInfos = await navigator.mediaDevices.enumerateDevices();
				const videoDevices = deviceInfos.filter(
					(device) => device.kind === "videoinput"
				);
				setDevices(videoDevices);
				setSelectedDeviceId(videoDevices[0]?.deviceId || "");
			} catch (error) {
				console.error("Error accessing camera:", error);
			}
		};

		getDevices();

		return () => {
			if (stream) {
				stream.getTracks().forEach((track) => track.stop());
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

	const handleDeviceChange = async (event) => {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
		}

		const newDeviceId = event.target.value;
		setSelectedDeviceId(newDeviceId);

		try {
			const videoStream = await navigator.mediaDevices.getUserMedia({
				video: { deviceId: newDeviceId },
			});
			videoRef.current.srcObject = videoStream;
			setStream(videoStream);
		} catch (error) {
			console.error("Error switching video stream:", error);
		}
	};

	const handleCapture = async () => {
		const canvas = canvasRef.current;
		const video = videoRef.current;
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		const context = canvas.getContext("2d");
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
		const capturedImage = canvas.toDataURL("image/png");
		setCapturedImage(capturedImage);

		try {
			const response = await fetch(
				"https://cad-guardian-backend-js.vercel.app/summarize",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ image: capturedImage }),
				}
			);
			const data = await response.json();
			console.log("Summary:", data.summary);
			setSummary(data.summary);
		} catch (error) {
			console.error("Error fetching summary:", error);
		}
	};

	const title = "Capture Image";
	const details =
		"Easily capture high-quality images for accurate 3D model creation. The AI-powered backend processes these images to generate detailed 3D models, which can be further analyzed, marked up, and used for automated drawings, BOMs, and marketing materials.";

	return (
		<Box sx={{ textAlign: "center", p: 3 }}>
			<Instructions title={title} details={details} />

			{devices.length > 1 && (
				<Select
					value={selectedDeviceId}
					onChange={handleDeviceChange}
					sx={{ mb: 2 }}
					fullWidth>
					{devices.map((device, index) => (
						<MenuItem key={index} value={device.deviceId}>
							{device.label || `Camera ${index + 1}`}
						</MenuItem>
					))}
				</Select>
			)}
			<Box sx={{ position: "relative", display: "inline-block", mb: 2 }}>
				<video
					ref={videoRef}
					autoPlay
					playsInline
					style={{ width: "100%", height: "auto" }}
				/>
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
						"&:hover": {
							backgroundColor: "rgba(255, 255, 255, 1)",
						},
					}}>
					<CameraAltIcon sx={{ fontSize: "48px" }} />
				</IconButton>
			</Box>
			{capturedImage && (
				<Box sx={{ mt: 2 }}>
					<Typography variant="h6">Preview:</Typography>
					<img
						src={capturedImage}
						alt="Captured"
						style={{ maxWidth: "100%" }}
					/>
					{summary && (
						<Typography variant="body1" sx={{ mt: 2 }}>
							Summary: {summary}
						</Typography>
					)}
				</Box>
			)}
		</Box>
	);
};

export default CameraCapture;
