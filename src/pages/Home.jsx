import React from "react";
import { Box, Button, Typography, Tooltip, Grid } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Home = () => {
	return (
		<Box sx={{ textAlign: "center", p: 2, maxWidth: 320, mx: "auto" }}>
			{/* Placeholder Image */}
			<Box
				component="img"
				src="https://via.placeholder.com/320"
				alt="Placeholder"
				sx={{
					mt: 10,
					maxWidth: "320px",
					width: "100%",
					mx: "auto",
					height: "auto",
					display: "block",
					border: "1px solid #ccc", // Optional: add a border for visual clarity
				}}
			/>

			{/* Main Heading */}
			<Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mt:4 }}>
			DWG, DXF, PDF, STEP and JPG
			</Typography>

			{/* Subheading */}
			<Typography variant="body1" color="textSecondary" sx={{ fontWeight: "bold", mt:4 }} gutterBottom>
				100% Automatically and{" "}
				<Typography component="span" color="primary">
					Free
				</Typography>
			</Typography>

			{/* Upload Button */}
			<Tooltip title="When clicked, it should open a file dialog allowing users to upload various formats like DWG, DXF, PDF, STEP and JPG. Consider drag-and-drop functionality.">
			<Button
				size="large"
				variant="contained"
				color="primary"
				sx={{ mt: 2, mb: 2, width: "100%" }}>
				Upload CAD Drawing
			</Button>
			</Tooltip>

			{/* Alternative Image Suggestions */}
			<Typography variant="body2" gutterBottom>
				No drawing? Try one of these:
			</Typography>
			<Grid container spacing={1} justifyContent="center">
				<Grid item>
					<Box
						component="img"
						src="https://via.placeholder.com/320"
						alt="Sample 1"
						sx={{ width: 50, height: 50, borderRadius: 1 }}
					/>
				</Grid>
				<Grid item>
					<Box
						component="img"
						src="https://via.placeholder.com/320"
						alt="Sample 2"
						sx={{ width: 50, height: 50, borderRadius: 1 }}
					/>
				</Grid>
				<Grid item>
					<Box
						component="img"
						src="https://via.placeholder.com/320"
						alt="Sample 2"
						sx={{ width: 50, height: 50, borderRadius: 1 }}
					/>
				</Grid>
				<Grid item>
					<Box
						component="img"
						src="https://via.placeholder.com/320"
						alt="Sample 2"
						sx={{ width: 50, height: 50, borderRadius: 1 }}
					/>
				</Grid>
				{/* Add more images as necessary */}
			</Grid>

			{/* Footer Text */}
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
