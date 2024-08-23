import React from "react";
import { Box, Container } from "@mui/material";

import Clients from "../components/sections/client-showcase/Clients";
import Team from "../components/sections/Team";
import Market from "../components/sections/Market";

const About = () => {
	return (
		<>
			<Team />
			<Clients />
			<Market />
		</>
	);
};

export default About;
