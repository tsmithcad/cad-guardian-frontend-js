// src/components/layout/Header.jsx

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  Menu,
  MenuItem,
  Button,
  Box,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import InfoIcon from "@mui/icons-material/Info";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Header = ({ handleDrawerToggle, toggleDarkMode, isDarkMode }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          onClick={handleMenuOpen}
          sx={{ mr: 2 }}
        >
          <Tooltip title="Open User Menu">
            <MenuIcon />
          </Tooltip>
        </IconButton>
        <Typography 
  variant="h6" 
  noWrap 
  component="a" 
  href="/" 
  sx={{ mx:"auto", textDecoration: 'none', color: 'inherit' }}
>
          <strong>CAD GUARDIAN</strong>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mr: 1 }}>
            Theme
          </Typography>
          <Tooltip title="Toggle Light/Dark Mode">
            <Switch checked={isDarkMode} onChange={toggleDarkMode} />
          </Tooltip>
        </Box>
      </Toolbar>
      <Typography variant="body2" component="div" sx={{mx:"auto", color:"powderblue", marginBottom:1}}>
      Your AI-Powered Design Assistant
      </Typography>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ mt: "45px" }}
        PaperProps={{
          style: {
            width: 200,
          },
        }}
      >
        <MenuItem onClick={() => handleNavigation("/")}>
          <HomeIcon sx={{ mr: 1 }} />
          <Button sx={{ width: "100%", textTransform: 'none' }}>Home</Button>
        </MenuItem>
        <MenuItem onClick={() => handleNavigation("/login")}>
          <LoginIcon sx={{ mr: 1 }} />
          <Button sx={{ width: "100%", textTransform: 'none' }}>Login</Button>
        </MenuItem>
        <MenuItem onClick={() => handleNavigation("/signup")}>
          <PersonAddIcon sx={{ mr: 1 }} />
          <Button sx={{ width: "100%", textTransform: 'none' }}>Signup</Button>
        </MenuItem>
        <MenuItem onClick={() => handleNavigation("/recover")}>
          <LockResetIcon sx={{ mr: 1 }} />
          <Button sx={{ width: "100%", textTransform: 'none' }}>Recover</Button>
        </MenuItem>
        <MenuItem onClick={() => handleNavigation("/about")}>
  <InfoIcon sx={{ mr: 1 }} />
  <Button sx={{ width: "100%", textTransform: 'none' }}>About</Button>
</MenuItem>

      </Menu>
    </AppBar>
  );
};

export default Header;
