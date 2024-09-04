import React from 'react';
import { Box, Typography, Container, Divider, Link } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
    <Helmet>
        <title>Privacy Policy - CADGuardian</title>
        <meta
          name="description"
          content="Learn about CADGuardian's commitment to protecting your privacy. Read our policy on data collection, usage, and security for all users."
        />
      </Helmet>
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
        Privacy Policy
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="body1" gutterBottom>
        At CADGuardian, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" gutterBottom>
          We collect various types of information in connection with the services we provide, including:
        </Typography>
        <Typography variant="body1" component="ul" gutterBottom>
          <li>Personal Information: Such as your name, email address, and payment details.</li>
          <li>Usage Data: Information about how you interact with our website, including IP address, browser type, and access times.</li>
          <li>Cookies: Small data files stored on your device to enhance your experience on our website.</li>
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          We use the information we collect to:
        </Typography>
        <Typography variant="body1" component="ul" gutterBottom>
          <li>Provide and improve our services.</li>
          <li>Process your transactions and manage your account.</li>
          <li>Communicate with you about updates, promotions, and other news.</li>
          <li>Analyze usage patterns to improve our website's performance.</li>
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          3. Sharing Your Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          We do not sell or rent your personal information to third parties. However, we may share your information with:
        </Typography>
        <Typography variant="body1" component="ul" gutterBottom>
          <li>Service Providers: Third-party companies that help us operate our business, such as payment processors and hosting providers.</li>
          <li>Legal Requirements: When required by law or to protect the rights, property, or safety of CADGuardian, our users, or others.</li>
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          4. Security of Your Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          We take the security of your personal information seriously and implement reasonable measures to protect it from unauthorized access, loss, or misuse. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          5. Your Privacy Choices
        </Typography>
        <Typography variant="body1" gutterBottom>
          You have the right to:
        </Typography>
        <Typography variant="body1" component="ul" gutterBottom>
          <li>Access and update your personal information.</li>
          <li>Opt-out of receiving promotional communications from us.</li>
          <li>Request the deletion of your personal information.</li>
        </Typography>
        <Typography variant="body1" gutterBottom>
          To exercise these rights, please contact us at <Link href="mailto:tsmithcad@gmail.com">tsmithcad@gmail.com</Link>.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          6. Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" gutterBottom>
          We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the effective date.
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          7. Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any questions or concerns about this Privacy Policy, please contact us at <Link href="mailto:tsmithcad@gmail.com">tsmithcad@gmail.com</Link>.
        </Typography>
      </Box>
    </Container>
    </>
  );
};

export default PrivacyPolicy;
