import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NewsletterSubscription = () => {
  return (
    <Box
      sx={{
        mt: 8,
        padding: 4,
        textAlign: 'center',
        boxShadow: 3,
        borderRadius: '8px',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Newsletter
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: '#6c757d' }}>
        Don't lose a chance to be among the firsts to know about my upcoming news and updates.
      </Typography>

      <Grid container justifyContent="center" spacing={2} sx={{marginTop: 2}}>
        <Grid item xs={8} sm={6} md={4}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            fullWidth
            sx={{
              borderRadius: '4px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            endIcon={<NotificationsIcon />}
            sx={{
              height: '100%',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsletterSubscription;
