import React from 'react';
import { Box, Drawer } from '@mui/material';
import Sidebar from './Sidebar';

const NavigationDrawer = ({ mobileOpen, handleDrawerToggle, drawerWidth }) => (
  <Box
    component="nav"
    sx={{ flexShrink: { sm: 0 } }}
    aria-label="mailbox folders"
  >
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      <Sidebar />
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
      <Sidebar />
    </Drawer>
  </Box>
);

export default NavigationDrawer;
