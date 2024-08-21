import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import PublishIcon from '@mui/icons-material/Publish';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import processData from '../data/processData.json';
import { useTheme } from "@mui/material/styles";


// Icon mapping
const iconMap = {
  AssessmentIcon: AssessmentIcon,
  ArchitectureIcon: ArchitectureIcon,
  BuildIcon: BuildIcon,
  BugReportIcon: BugReportIcon,
  PublishIcon: PublishIcon,
  SupportAgentIcon: SupportAgentIcon,
  // Add other icons...
};


// ProcessStep Component
const ProcessStep = ({ icon: Icon, title, subtitle, description }) =>{ 
  const theme = useTheme();

  return (
  <Box
    sx={{
      display: 'flex',
      padding: 2,
      boxShadow: 1,
      borderRadius: 2,
      mb: 2,
      '&:hover': {
        boxShadow: 4,
        transform: 'translateY(-5px)',
        transition: '0.3s',
      }
    }}
  >
    <Box sx={{ mr: 2 }}>
      <Icon sx={{ fontSize: 40, color: theme.palette.primary }} />
    </Box>
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle2" color="textSecondary">{subtitle}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>{description}</Typography>
    </Box>
  </Box>
);
};

// Main Process Component
const Process = () => {
  const [processSteps, setProcessSteps] = useState([]);

  useEffect(() => {
    setProcessSteps(processData);
  }, []);

  return (
    <Container sx={{ mt: 4}}>
      <Typography variant="h5" sx={{ textAlign: "center" }} gutterBottom>Process</Typography>
      <Grid container direction="column">
        {processSteps.map(({ muiIcon, title, subtitle, description }, index) => {
          const IconComponent = iconMap[muiIcon];
          return (
            <Grid item key={index}>
              <ProcessStep
                icon={IconComponent}
                title={title}
                subtitle={subtitle}
                description={description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Process;
