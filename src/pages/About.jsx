import React from "react";
import { Box, Container, Typography } from "@mui/material";

import Clients from "../components/sections/client-showcase/Clients";
import Team from "../components/sections/Team";
import Market from "../components/sections/Market";

const About = () => {
	return (
		<>
		<Typography variant="h4" textAlign={"center"} sx={{m:4}}>Our Mission</Typography>
		<Typography variant="body1" textAlign={"center"}>At CADGuardian, we're dedicated to making the design-to-production process faster, easier, and more accessible for everyone.</Typography>
			<Team />
			<Clients />
			<Market />
		</>
	);
};

export default About;
