// src/App.jsx

// system
import React, { useState } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recover from "./pages/Recover";

// components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NavigationDrawer from "./components/nav/NavigationDrawer";

const drawerWidth = 240;

function App({ toggleDarkMode }) {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Router>
			<Header
				handleDrawerToggle={handleDrawerToggle}
				toggleDarkMode={toggleDarkMode}
			/>

			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/recover" element={<Recover />} />
				<Route path="/" element={<Home />} />
			</Routes>

			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<NavigationDrawer
					mobileOpen={mobileOpen}
					handleDrawerToggle={handleDrawerToggle}
					drawerWidth={drawerWidth}
				/>

				<Container>
					<Footer />
				</Container>
			</Box>
		</Router>
	);
}

export default App;
