import React from 'react';
import { Fab } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const FloatingActionButton = ({ toggleDrawer }) => (
  <Fab
    color="primary"
    aria-label="open drawer"
    onClick={toggleDrawer}
    sx={{
      position: 'fixed',
      bottom: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      display: { xs: 'flex', md: 'none' },
    }}
  >
    <MenuIcon />
  </Fab>
);

export default FloatingActionButton;
