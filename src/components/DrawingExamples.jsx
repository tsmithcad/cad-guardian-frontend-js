import React from "react";
import { Box, Typography, Tooltip, Grid } from "@mui/material";

const DrawingExamples = () => {
	return (
		<>
			<Typography variant="body2" gutterBottom>
			Supported formats: DWG, DXF, STEP, PDF, JPG. No drawing? Try one of these:
			</Typography>

			<Grid container spacing={1} justifyContent="center">
				<Grid item>
					<Box
						component="img"
						src="https://via.placeholder.com/50"
						alt="Sample 1"
						sx={{ width: 50, height: 50, borderRadius: 1 }}
					/>
				</Grid>
				<Grid item>
					<Box
						component="img"
						src="https://via.placeholder.com/50"
						alt="Sample 2"
						sx={{ width: 50, height: 50, borderRadius: 1 }}
					/>
				</Grid>
				<Grid item>
					<Box
						component="img"
						src="https://via.placeholder.com/50"
						alt="Sample 2"
						sx={{ width: 50, height: 50, borderRadius: 1 }}
					/>
				</Grid>
				<Grid item>
					<Box
						component="img"
						src="https://via.placeholder.com/50"
						alt="Sample 2"
						sx={{ width: 50, height: 50, borderRadius: 1 }}
					/>
				</Grid>
				{/* Add more images as necessary */}
			</Grid>
		</>
	);
};

export default DrawingExamples;
