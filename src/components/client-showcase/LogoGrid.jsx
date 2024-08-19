import React, { useContext, useEffect, useState } from 'react';
import { Grid, Typography, Paper } from '@mui/material';

const importAllLogos = async () => {
  const logos = [];
  const context = import.meta.glob('../../assets/logos/*.svg', { eager: true });
  for (const path in context) {
    logos.push({ src: context[path].default, name: path.split('/').pop().split('.')[0] });
  }
  return logos;
};

const LogoGrid = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    importAllLogos().then(setLogos);
  }, []);

  return (
    <Grid container 
    justifyContent="center" 
    component={Paper}
    sx={{ gap:1, padding: 2}}>
      {logos.map((logo, index) => (
        <Grid item key={index}>
          <img
            src={logo.src}
            style={{ margin: 5, fill: 'var(--svg-color)', width: '90px', height: '90px' }}
            alt={logo.name}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default LogoGrid;
