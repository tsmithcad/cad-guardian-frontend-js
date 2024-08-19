// system
import React from "react";

// components
import Clients from "../components/client-showcase/Clients";
import Subscribe from "../components/NewsletterSubscription";
import TargetMarket from "../components/tables/TargetMarket";
import Team from "../components/sections/Team";
import Statistics from "../components/sections/Statistics";
import Process from "../components/Process";
import Testimonials from "../components/sections/Testimonials";
import Journey from "../components/Journey";
import Pricing from "../components/sections/Pricing";
import StackedRadioGroup from "../components/StackedRadioGroup";
import Contact from "../components/sections/Contact";
import Features from "../components/sections//Features";

// services
import FormBuilder from "../services/form-builder/FormBuilder";
import CameraCapture from "../services/camera/CameraCapture";

// contexts
import { PricingProvider } from "../contexts/PricingContext";
import { colors, List, Typography } from "@mui/material";

const Home = () => (
	<>
	<Typography sx={{textAlign:"center", fontStyle:"strong", backgroundColor:"pink", color:"blue"}}>"Use Ai to create. From napkin to conception!"</Typography>
		<Team />
		<CameraCapture />
		{/* <Statistics /> */}
		{/* <FormBuilder/> */}
		{/* <Features  /> */}
		<TargetMarket />
		<Clients />
		{/* <Subscribe /> */}
		{/* <Process /> */}
		{/* <Testimonials /> */}
		{/* <Journey /> */}
		{/* <PricingProvider>
			<Pricing />
		</PricingProvider> */}
		{/* <StackedRadioGroup /> */}
		{/* <Contact /> */}
	</>
);

export default Home;
