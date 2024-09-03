import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const footerLinks = {
  "CADGuardian": {
    description: "Your AI-powered CAD automation platform, revolutionizing design-to-production workflows.",
  },
  "Explore": [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Login", href: "/login" },
    { text: "Sign Up", href: "/signup" },
    { text: "Recover Account", href: "/recover" },
  ],
  "Legal": [
    { text: "Terms of Service", href: "/terms-of-service" },
    { text: "Privacy Policy", href: "/privacy-policy" },
  ]
};

const Footer = () => (
  <Box sx={{ p: 3, mt: 'auto', backgroundColor: '#f8f9fa', color: '#6c757d', borderTop: '1px solid #e0e0e0' }}>
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
                href={link.href}
                color="inherit"
                underline="hover"
                variant="body2"
                display="block"
                sx={{ my: 0.5 }}
              >
                {link.text}
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

export default Footer;
