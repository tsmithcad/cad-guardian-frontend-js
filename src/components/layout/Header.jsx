import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ handleDrawerToggle, toggleDarkMode, isDarkMode }) => (
  <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2}}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        Thomas D Smith II
      </Typography>
      <Switch checked={isDarkMode} onChange={toggleDarkMode} />
    </Toolbar>
  </AppBar>
);

export default Header;
