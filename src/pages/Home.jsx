// system
import React, { useState } from "react";

// components
import Clients from "../components/client-showcase/Clients";
import Market from "../components/tables/Market";
import Team from "../components/sections/Team";
import JourneySelection from "../services/camera/JourneySelection";

// services

// contexts
import { Typography, Box, Button } from "@mui/material";

const Home = () => {
	

	return (
		<>
			<JourneySelection />
		</>
	);
};

export default Home;
