import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ p: 3, mt: 'auto', textAlign: 'center' }}>

    <hr/>

    <Typography variant="body2" color="textSecondary">
      &copy; CadGuardian. 2024, Complimentary Intelligence. All rights reserved
    </Typography>

    <Typography variant="body2" color="textSecondary">
      When you visit or interact with our sites, services or tools, we or our authorized service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
    </Typography>

    <Link href="#">Privacy Policy</Link> | <Link href="#">Data Policy</Link> | <Link href="#">Cookie Policy</Link>
  </Box>
);

export default Footer;
