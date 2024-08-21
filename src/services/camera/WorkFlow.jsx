import React, { useState, useEffect, useRef } from "react";
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

// Modified CameraCapture Component
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
		<Box sx={{ textAlign: "center", p: 3 }}>
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
					fullWidth>
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
				</Box>
			)}
		</Box>
	);
};

// Steps Config File
const ObjectStep = ({ stepNumber, label, onCapture, capturedImage }) => (
	<CameraCapture
		title={`Step ${stepNumber} of 6: ${label}`}
		details={`Capture the ${label.toLowerCase()} of the object. Ensure clarity and focus for accurate modeling.`}
		onCapture={onCapture}
		capturedImage={capturedImage}
	/>
);

const DrawingStep = ({ stepNumber, label, icon, capturedImage }) => (
	<Box sx={{ textAlign: "center" }}>
		<Typography variant="h5">{label}</Typography>
		{icon}
		{capturedImage && (
			<Box sx={{ mt: 2 }}>
				<Typography variant="h6">Preview:</Typography>
				<img src={capturedImage} alt="Captured" style={{ maxWidth: "100%" }} />
			</Box>
		)}
	</Box>
);

// Steps Configurations
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

// Main Journey Component
const WorkFlow = ({ journeyType }) => {
	const [activeStep, setActiveStep] = useState(0);
	const [capturedImages, setCapturedImages] = useState({});
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
		setCapturedImages({});
	};

	const handleCapture = (image) => {
		setCapturedImages((prev) => ({
			...prev,
			[activeStep]: image,
		}));
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
				}}>
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
					sx={{ mt: 3, mb: 3 }}>
					{steps.map((step, index) => (
						<Step key={index}>
							<StepLabel>{step.label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<Box sx={{ mb: 2 }}>
					<StepContent
						onCapture={handleCapture}
						capturedImage={capturedImages[activeStep]}
					/>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Button disabled={activeStep === 0} onClick={handleBack}>
						Back
					</Button>
					{activeStep === steps.length - 1 ? (
						<Button onClick={handleReset}>Reset</Button>
					) : (
						<Button onClick={handleNext}>
							{activeStep === steps.length - 1 ? "Finish" : "Next"}
						</Button>
					)}
				</Box>
			</Box>
		</Container>
	);
};

export default WorkFlow;
