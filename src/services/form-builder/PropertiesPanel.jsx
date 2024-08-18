import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const PropertiesPanel = () => (
  <Box
    width="20%"
    p={2}
    sx={{
      display: { xs: 'none', md: 'block' },
    }}
  >
    <Typography variant="h6" gutterBottom>
      Field Properties
    </Typography>
    <Paper variant="outlined" sx={{ minHeight: '400px', p: 2 }}>
      <Typography variant="body2">Select a field to see its properties</Typography>
    </Paper>
  </Box>
);

export default PropertiesPanel;
