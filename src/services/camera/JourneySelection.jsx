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
      marginTop: 2,
    }}>


      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <JourneyOption
            title="Object"
            description="Capture images."
            icon={WorkIcon}
            selected={journeyType === "object"}
            onClick={() => setJourneyType("object")}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <JourneyOption
            title="Drawing"
            description="Upload drawings."
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
