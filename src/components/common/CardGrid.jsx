import React from "react";
import { Box, Typography, Grid, Container, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// CardGrid Component
const CardGrid = ({ title, subtitle, data, iconMap }) => {
  const theme = useTheme();

  const CardItem = ({ icon: Icon, count, title, description }) => (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box
          sx={{
            padding: 2,
            textAlign: "center",
            boxShadow: 3,
            height: "100%",
          }}
        >
          <Icon sx={{ fontSize: 100, color: theme.palette.text }} />
          <Typography sx={{  }} variant="body2" color="textSecondary">
            {description}
          </Typography>
          <Typography variant="body2" sx={{mt: 3 }}>
            {title}
          </Typography>
          
          <Typography variant="body2" sx={{ mt: 3 }}>
            {count}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );

  return (
    <Container>
      <Box
        sx={{
          padding: "40px 20px",
          textAlign: "center",
          mt: 8,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {subtitle}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {data.map(({ muiIcon, count, title, description }, index) => {
            const IconComponent = iconMap[muiIcon];
            return (
              <CardItem
                key={index}
                icon={IconComponent}
                count={count}
                title={title}
                description={description}
              />
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default CardGrid;
