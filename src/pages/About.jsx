import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

import Clients from "../components/sections/client-showcase/Clients";
import Team from "../components/sections/Team";
import Market from "../components/sections/Market";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About Us - CADGuardian</title>
				<meta
					name="description"
					content="Learn more about CADGuardian's mission to transform CAD workflows with AI-powered solutions. Meet the team and discover our commitment to innovative CAD automation."
				/>
			</Helmet>
			<Typography variant="h1" textAlign={"center"} sx={{ m: 4 }}>
				Our Mission
			</Typography>
			<Typography variant="body1" textAlign={"center"}>
				At CADGuardian, we're dedicated to making the design-to-production
				process faster, easier, and more accessible for everyone.
			</Typography>
			<Team />
			<Clients />
			<Market />
		</>
	);
};

export default About;
