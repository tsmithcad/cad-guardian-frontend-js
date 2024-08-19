import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Instructions = ({ title, details }) => {
  return (
    <Accordion sx={{margin:4}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography variant="body1">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          {details}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Instructions;
