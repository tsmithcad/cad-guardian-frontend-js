import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const Header = ({ handleDrawerToggle, toggleDarkMode, isDarkMode }) => {
	const theme = useTheme();

	return (
		<AppBar
			position="static"
			sx={{  zIndex: (theme) => theme.zIndex.drawer + 1 }}>
			<Toolbar>
				{/* <IconButton
					color="#ffffff"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2 }}>
					<MenuIcon />
				</IconButton> */}
				<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
					CADGuardian.com
				</Typography>
				<Typography variant="body1">Theme</Typography>
				<Switch checked={isDarkMode} onChange={toggleDarkMode} />
			</Toolbar>
			<Typography
				sx={{
					textAlign: "center",
					fontStyle: "strong",
					backgroundColor: "gray",
					color: "white",
				}}>
				"Use Ai to create. From napkin to conception!"
			</Typography>
		</AppBar>
		
	);
};

export default Header;
