// components/MainSection.jsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import HeaderText from "./HeaderText";
import LogoGrid from "./LogoGrid";

const ClientShowcase = () => (
	<Container>
		<Box
			sx={{
				padding: 4,
				borderRadius: 2,
				boxShadow: 3,
				textAlign: "center",
			}}>
			<HeaderText />
			<LogoGrid />

			<Typography
				variant="h6"
				color="textSecondary"
				sx={{
					mt: 4,
				}}>
				Share your project requirements, budget, and timeline, and I will
				provide tailored solutions to meet your specific needs.
			</Typography>
		</Box>
	</Container>
);

export default ClientShowcase;
