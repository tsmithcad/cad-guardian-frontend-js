import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, TextField, Button, Typography } from '@mui/material';
import businessDetails from '../../data/businessDetails.json';

const Contact = () => {
  const [details, setDetails] = useState({
    phone: '',
    email: '',
    address: {
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    }
  });

  useEffect(() => {
    setDetails(businessDetails);
  }, []);

  return (
    <Container>
      <Box
        sx={{
          padding: '40px 20px',
          borderRadius: 2,
          boxShadow: 3,
          mt: 8,
        }}
      >
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Get in touch
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              We'd love to talk about how we can help you.
            </Typography>
            <Box
              component="iframe"
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Milan,Italy`}
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              sx={{ borderRadius: 2, boxShadow: 3 }}
            />
            <Typography variant="body1" sx={{ mt: 2 }}>
              Call us:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {details.phone}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Email us:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {details.email}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Address:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {details.address.streetAddress}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {details.address.city}, {details.address.state} {details.address.postalCode}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {details.address.country}
            </Typography>
          </Grid>
          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                By clicking on "submit" you agree to our <a href="#">Privacy Policy</a>, <a href="#">Data Policy</a> and <a href="#">Cookie Policy</a>.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ mt: 4, textAlign: 'center' }}>
        We'll get back to you in 1-2 business days.
      </Typography>
    </Container>
  );
};

export default Contact;
