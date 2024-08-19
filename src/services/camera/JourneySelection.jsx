import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Typography, Radio, IconButton } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
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
  const [journeyType, setJourneyType] = useState(null);

  return (
    <Box sx={{
      p: 3,
      marginTop: 8,
      boxShadow: 3,
      borderRadius: 2,
    }}>
      <Typography variant="h4" sx={{ marginBottom: 1, textAlign: "center" }} gutterBottom>
        Choose your journey
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center", mt:2, marginBottom:4 }} gutterBottom>
        Select between object journey or drawing journey.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <JourneyOption
            title="Object"
            description="Capture object from multiple angles."
            icon={WorkIcon}
            selected={journeyType === "object"}
            onClick={() => setJourneyType("object")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <JourneyOption
            title="Drawing"
            description="Upload drawing images."
            icon={InsertDriveFileIcon}
            selected={journeyType === "drawing"}
            onClick={() => setJourneyType("drawing")}
          />
        </Grid>
      </Grid>
      {journeyType && <WorkFlow journeyType={journeyType} />}
    </Box>
  );
};

export default JourneySelection;
