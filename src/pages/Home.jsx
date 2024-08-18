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

// contexts
import { PricingProvider } from "../contexts/PricingContext";
import { List, Typography } from "@mui/material";

const Home = () => (
	<>
	<Typography  textAlign={"center"} sx={{m:4,fontWeight: 'bold',}}>Under Construction</Typography>

	<FormBuilder/>
		{/* <Features  /> */}
		{/* <Clients /> */}
		{/* <Subscribe /> */}
		{/* <TargetMarket /> */}
		{/* <Team /> */}
		{/* <Statistics /> */}
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