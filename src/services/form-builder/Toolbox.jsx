import React from 'react';
import { Box, Typography, Button, Drawer } from '@mui/material';

import { formElementsMap } from './FormElements';

const Toolbox = ({ addFormElement, drawerOpen, toggleDrawer }) => (
  <>
    {/* Desktop Toolbox */}
    <Box
      sx={{
        width: { xs: '100%', md: '20%' },
        maxHeight: '300px',
        overflowY: 'auto',
        p: 2,
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Toolbox
      </Typography>
      <Box>
        {Object.keys(formElementsMap).map((key) => (
          <Button
            key={key}
            variant="contained"
            fullWidth
            onClick={() => addFormElement(key)}
            sx={{ mb: 2 }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        ))}
      </Box>
    </Box>

    {/* Mobile Drawer */}
    <Drawer
      anchor="bottom"
      open={drawerOpen}
      onClose={toggleDrawer}
      sx={{ display: { xs: 'block', md: 'none' } }}
    >
      <Box
        sx={{
          maxHeight: '50vh',
          overflowY: 'auto',
          p: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Toolbox
        </Typography>
        <Box>
          {Object.keys(formElementsMap).map((key) => (
            <Button
              key={key}
              variant="contained"
              fullWidth
              onClick={() => {
                addFormElement(key);
                toggleDrawer(); // Close drawer after selection on mobile
              }}
              sx={{ mb: 2 }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Button>
          ))}
        </Box>
      </Box>
    </Drawer>
  </>
);

export default Toolbox;
