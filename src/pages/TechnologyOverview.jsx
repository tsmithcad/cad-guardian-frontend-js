import React from "react";
import { Box, Typography, Button, Grid, Container, Divider, Paper } from "@mui/material";
import { IntegrationInstructions, Widgets, Animation, Http, SyncAlt, AltRoute, CloudUpload, ThreeDRotation, QuestionAnswer, Headset, Videocam, SaveAlt, PhotoSizeSelectActual, Rule, Commit, CheckCircle, Bolt, Map, Code, Security, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';

// Define a dictionary for frontend and backend technologies
const techStacks = {
  frontend: [
    {
      title: "React 18 & Vite",
      description: "React 18 is used for building UI components, providing concurrent rendering and other performance features. Vite is the build tool, known for its speed and efficient development.",
      icon: <IntegrationInstructions fontSize="large" />,
    },
    {
      title: "Material-UI (MUI)",
      description: "MUI is a comprehensive library of React UI components that follows Google’s Material Design guidelines, ensuring a consistent and responsive UI.",
      icon: <Widgets fontSize="large" />,
    },
    {
      title: "Framer Motion",
      description: "Framer Motion provides simple yet flexible animations for React, allowing you to add smooth and interactive animations to your components.",
      icon: <Animation fontSize="large" />,
    },
    {
      title: "Axios",
      description: "Axios is a promise-based HTTP client used to make API requests and handle responses efficiently in React applications.",
      icon: <Http fontSize="large" />,
    },
    {
      title: "React Router DOM",
      description: "React Router DOM provides client-side routing for the application, allowing navigation between different pages without reloading.",
      icon: <AltRoute fontSize="large" />,
    },
    {
      title: "React Dropzone",
      description: "React Dropzone simplifies file uploading by providing drag-and-drop functionality for images, PDFs, and other file types.",
      icon: <CloudUpload fontSize="large" />,
    },
    {
      title: "Three.js & React Three Fiber",
      description: "Three.js and React Three Fiber enable 3D rendering, making it possible to visualize and interact with 3D CAD models in the browser.",
      icon: <ThreeDRotation fontSize="large" />,
    },
    {
      title: "React Helmet Async",
      description: "React Helmet Async handles dynamic meta tags and titles, improving SEO for the application by managing changes to the document head.",
      icon: <Headset fontSize="large" />,
    },
    {
      title: "LocalForage",
      description: "LocalForage simplifies client-side storage by providing a unified API for IndexedDB, WebSQL, and localStorage, ensuring efficient data storage.",
      icon: <SaveAlt fontSize="large" />,
    },
  ],
  backend: [
    {
      title: "ASP.NET Core 8 & CORS",
      description: "The backend is built on ASP.NET Core 8, ensuring high performance and secure communications through CORS policies.",
      icon: <Security fontSize="large" />,
    },
    {
      title: "OpenAI API Integration",
      description: "CADGuardian uses OpenAI to process image recognition, generate text summaries, and analyze CAD components automatically.",
      icon: <CheckCircle fontSize="large" color="success" />,
    },
  ],
  devTools: [
    {
      title: "ESLint",
      description: "ESLint is a linter tool for identifying and fixing JavaScript code errors and enforcing coding standards.",
      icon: <Rule fontSize="large" />,
    },
    {
      title: "Husky",
      description: "Husky is a tool used to enforce pre-commit hooks like linting, ensuring code quality before pushing changes.",
      icon: <Commit fontSize="large" />,
    },
    {
      title: "Lint-Staged",
      description: "Lint-Staged works with Husky to run linters only on staged git files, speeding up the linting process during commits.",
      icon: <CheckCircle fontSize="large" />,
    },
    {
      title: "Vite",
      description: "Vite is a frontend build tool that provides fast development server startup and a highly optimized build process.",
      icon: <Bolt fontSize="large" />,
    },
    {
      title: "Vite Plugin Sitemap",
      description: "Vite Plugin Sitemap is used to automatically generate sitemaps, improving SEO by helping search engines crawl your app.",
      icon: <Map fontSize="large" />,
    },
    {
      title: "ESLint Plugins",
      description: "A set of ESLint plugins (react, react-hooks, react-refresh) are used to ensure best practices and proper hooks usage in React.",
      icon: <Code fontSize="large" />,
    },
  ],
};

const TechnologyOverview = ({ isDarkMode }) => {
  const theme = useTheme();

  // Function to render the technology stack
  const renderTechStack = (stack) => (
    <Grid container spacing={4}>
      {stack.map((tech, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Box
            component={Paper}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 2, border: `1px solid ${theme.palette.divider}`, borderRadius: "8px", color: theme.palette.text.primary }}
          >
            {tech.icon}
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, color: theme.palette.text.primary }}>
              {tech.title}
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              {tech.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        {/* Main Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center", mt: 4 }}
        >
          <Typography variant="h1" sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
            CADGuardian Technology Overview
          </Typography>
          <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, mt: 2 }}>
            A Comprehensive Guide for Developers and Future Employers
          </Typography>
        </Box>

        {/* Executive Summary Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}>
            Executive Summary
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
            CADGuardian revolutionizes the CAD workflow by leveraging AI to automate the transformation of sketches, CAD files,
            and other drawings into 3D models and production-ready documents. Our platform is designed to streamline every aspect
            of the design-to-production pipeline, providing developers and businesses with a powerful tool to automate their CAD processes.
          </Typography>
        </Box>

        <Divider sx={{ mt: 4, mb: 4, borderColor: theme.palette.divider }} />

        {/* Development Technology Stack */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}>
            Development Technology Stack
          </Typography>
          {renderTechStack(techStacks.devTools)}
        </Box>

        {/* Backend Technology Stack */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}>
            Backend Technology Stack
          </Typography>
          {renderTechStack(techStacks.backend)}
        </Box>

        {/* Frontend Technology Stack */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}>
            Frontend Technology Stack
          </Typography>
          {renderTechStack(techStacks.frontend)}
        </Box>

        <Divider sx={{ mt: 4, mb: 4, borderColor: theme.palette.divider }} />

        

        {/* Call to Action */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            mt: 6,
            textAlign: "center",
            p: 4,
            backgroundColor: theme.palette.background.paper,
            borderRadius: "8px",
            borderColor: theme.palette.divider,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
            Explore CADGuardian
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mt: 2 }}>
            Dive into our tech stack and start automating your CAD workflows today.
          </Typography>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIos />}
            sx={{ mt: 3 }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default TechnologyOverview;
