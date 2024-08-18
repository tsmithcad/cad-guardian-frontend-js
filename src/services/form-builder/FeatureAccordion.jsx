import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FeatureAccordion = () => {
  const features = [
    {
      title: 'Responsive Layout',
      description: 'Adaptive design with sidebar toolbox for desktop and bottom drawer toolbox for mobile devices.',
    },
    {
      title: 'Floating Action Button (FAB)',
      description: 'FAB for opening the toolbox drawer on mobile, positioned at the bottom center of the screen for easy access.',
    },
    {
      title: 'Toolbox with Form Elements',
      description: 'Scrollable toolbox on desktop and bottom drawer toolbox for mobile devices with a slide-up gesture.',
    },
    {
      title: 'Form Canvas',
      description: 'Dynamic rendering of selected form elements with integrated delete functionality and confirmation dialog.',
    },
    {
      title: 'Confirmation Dialog',
      description: 'Modern dialog prompts user confirmation before deleting a form element, ensuring actions are deliberate.',
    },
    {
      title: 'Properties Panel',
      description: 'Sidebar panel displaying properties of selected form elements, automatically hidden on smaller screens.',
    },
    {
      title: 'App Bar',
      description: 'Contains options to save and preview the form, making it easy to manage form configurations.',
    },
  ];

  return (
    <Paper sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        AI Form Builder Features
      </Typography>
      {features.map((feature, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="subtitle1">{feature.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{feature.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
};

export default FeatureAccordion;
