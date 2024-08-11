import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Avatar, Container, IconButton, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import teamData from '../../data/teamData.json';

const socialIcons = {
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
  GitHub: GitHubIcon,
};

const TeamMemberCard = ({ name, role, socials, image }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        textAlign: 'center',
        height: '100%' // Ensures all cards have the same height
      }}
    >
      <Avatar src={image} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {role}
        </Typography>
      </Box>
      <Box mt={2} display="flex" justifyContent="center">
        {Object.entries(socials).map(([platform, url]) => {
          if (!url) return null;
          const IconComponent = socialIcons[platform];
          return (
            <IconButton key={platform} component="a" href={url} target="_blank" sx={{ color: 'inherit' }}>
              <IconComponent />
            </IconButton>
          );
        })}
      </Box>
    </Box>
  </Grid>
);

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam(teamData);
  }, []);

  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Team
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          
        </Typography>
       
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {team.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </Grid>
      {/* <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          View all
        </Button> */}
    </Container>
  );
};

export default Team;
