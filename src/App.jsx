// src/App.jsx

// system
import React, { useState } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recover from "./pages/Recover";
import About from "./pages/About";

// components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NavigationDrawer from "./components/nav/NavigationDrawer";

const drawerWidth = 240;

function App({ toggleDarkMode, isDarkMode }) {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Router>
			<Header
				handleDrawerToggle={handleDrawerToggle}
				toggleDarkMode={toggleDarkMode}
				isDarkMode={isDarkMode}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/recover" element={<Recover />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				
				<Container>
					<Footer />
				</Container>
			</Box>
		</Router>
	);
}

export default App;
