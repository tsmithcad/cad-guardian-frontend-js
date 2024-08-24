// system
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// components
import WorkFlow from "../services/camera/WorkFlow";

const Home = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.5 }}>
				<WorkFlow journeyType={"object"} />
			</motion.div>
		</AnimatePresence>
	);
};

export default Home;
