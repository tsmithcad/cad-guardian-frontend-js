import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Terms of Service
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Welcome to CADGuardian! These Terms of Service ("Terms") govern your use of our website and services ("Services"). By using our Services, you agree to comply with these Terms. If you do not agree to these Terms, you may not use our Services.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          1. Use of Services
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          You agree to use the Services only for lawful purposes and in accordance with these Terms. You must not use our Services in any way that may cause harm to CADGuardian, its users, or any third party.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          2. Account Registration
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, complete, and current information when registering for an account. You are responsible for maintaining the confidentiality of your account information and for any activities that occur under your account.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          3. Intellectual Property
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          All content and materials provided on CADGuardian, including text, graphics, logos, and software, are the property of CADGuardian or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on our platform without our prior written consent.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          4. User-Generated Content
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          By submitting or posting content on CADGuardian, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and display such content as necessary to provide our Services. You are solely responsible for any content you post, and you agree not to post content that is unlawful, harmful, or infringes on the rights of others.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          5. Termination
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          We reserve the right to suspend or terminate your access to our Services at any time, for any reason, without notice. Upon termination, your right to use the Services will cease immediately, and any data associated with your account may be deleted.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          6. Limitation of Liability
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          CADGuardian and its affiliates will not be liable for any indirect, incidental, special, or consequential damages arising from your use of our Services. Our liability to you for any direct damages will be limited to the amount you have paid for the use of our Services.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          7. Changes to the Terms
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          We may update these Terms from time to time. When we make changes, we will update the "Last Updated" date at the top of this page. Your continued use of our Services after the changes take effect constitutes your acceptance of the new Terms.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          8. Governing Law
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
          9. Contact Us
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          If you have any questions about these Terms, please contact us at <Link href="mailto:support@cadguardian.com">support@cadguardian.com</Link>.
        </Typography>
      </Box>

      <Typography variant="body2" sx={{ color: 'textSecondary' }}>
        Last Updated: September 3rd, 2024 (9-3-2024)
      </Typography>
    </Container>
  );
};

export default TermsOfService;
