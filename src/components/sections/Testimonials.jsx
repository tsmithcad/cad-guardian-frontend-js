import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import testimonialsData from "../../data/testimonialsData.json";

const TestimonialCard = ({ rating, text, photo, name, role, highlighted }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
        {Array.from({ length: rating }).map((_, index) => (
          <StarIcon key={index} sx={{ color: "#ffb400" }} />
        ))}
      </Box>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {text}
      </Typography>
      <Avatar src={`/images/${photo}`} sx={{ width: 56, height: 56, mx: "auto", mb: 1 }} />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {role}
      </Typography>
    </Box>
  </Grid>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <Box sx={{ borderRadius: 4, padding: 4, marginTop: 8, boxShadow: 3, }}>
      <Typography variant="h5" textAlign="center" gutterBottom>
        Testimonials
      </Typography>
      <Typography variant="body1" textAlign="center" gutterBottom>
        Companies from across the globe have had fantastic experiences.
        Here’s what they have to say.
      </Typography>
      <Grid container sx={{marginTop:2}} spacing={2} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
