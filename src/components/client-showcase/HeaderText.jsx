// components/HeaderText.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const HeaderText = () => (
	<Box
		sx={{
			textAlign: "center",
			marginBottom: 4,
		}}>

		<Typography variant="h5" gutterBottom>
			Clients
		</Typography>

		<Typography variant="body2" color="textSecondary">
			Over the past decade, I have delivered{" "}
			<strong>innovative software solutions</strong> and{" "}
			<strong>precise CAD designs</strong> to leading companies across various
			industries.
		</Typography>
	</Box>
);

export default HeaderText;
