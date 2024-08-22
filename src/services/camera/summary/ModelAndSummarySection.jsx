import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ModelViewer = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  return (
    <Canvas style={{ height: 400 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
};

const ModelAndSummarySection = ({ modelUrl, summary }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* 3D Model Viewer */}
      <Box>
        <Typography variant="h5" gutterBottom>
          3D Model Preview
        </Typography>
        <ModelViewer modelUrl={modelUrl} />
      </Box>

      {/* Summary Section */}
      <Box>
        <Typography variant="h5" gutterBottom>
          AI-Generated Summary
        </Typography>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={summary}
          sx={{ mt: 2 }}
        />
      </Box>
    </Box>
  );
};

export default ModelAndSummarySection;
