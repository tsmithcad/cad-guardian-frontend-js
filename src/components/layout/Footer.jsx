import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const footerLinks = {
  "CADGuardian": {
    description: "Your AI-powered CAD automation platform, revolutionizing design-to-production workflows.",
  },
  "Explore": [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Login", to: "/login" },
    { text: "Sign Up", to: "/signup" },
    { text: "Recover Account", to: "/recover" },
  ],
  "Resources": [  // Added new Resources section
    { text: "Backlinks", to: "/backlinks" },
    { text: "Terms of Service", to: "/terms-of-service" },
    { text: "Privacy Policy", to: "/privacy-policy" },
  ],
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 3,
        mt: 'auto',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Grid container spacing={1} justifyContent="center">
        {Object.keys(footerLinks).map((section, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              {section}
            </Typography>
            {footerLinks[section].description ? (
              <Typography variant="body2" sx={{ mb: 2 }}>
                {footerLinks[section].description}
              </Typography>
            ) : (
              footerLinks[section].map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.to} // Use "to" instead of "href"
                  style={{ textDecoration: 'none', color: 'inherit' }} // Apply styling similar to Material-UI Link
                >
                  <Typography variant="body2" sx={{ my: 0.5 }}>
                    {link.text}
                  </Typography>
                </Link>
              ))
            )}
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 CADGuardian, Calculated Technologies LLC. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
