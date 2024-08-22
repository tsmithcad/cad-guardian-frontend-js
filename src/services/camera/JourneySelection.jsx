import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Radio } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import WorkFlow from "./WorkFlow";

const JourneyOption = ({ title, description, icon: Icon, selected, onClick }) => (
  <Card onClick={onClick} sx={{ cursor: "pointer", boxShadow: selected ? 3 : 1 }}>
    <CardContent sx={{ textAlign: "center" }}>
      <Icon fontSize="large" />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="textSecondary">{description}</Typography>
      <Radio checked={selected} color="primary" />
    </CardContent>
  </Card>
);

const JourneySelection = () => {
  const [journeyType, setJourneyType] = useState("object");

  return (
    <Box sx={{ marginTop: 2 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={journeyType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {journeyType && <WorkFlow journeyType={journeyType} />}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default JourneySelection;
