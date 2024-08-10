import React, { useState } from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Paper,
} from "@mui/material";

// Example JSON data for plans
const plansData = [
  {
    name: "Hobby",
    specs: "8GB / 4CPU * 160 GB SSD disk",
    price: "$40",
    interval: "/ mo",
  },
  {
    name: "Startup",
    specs: "12GB / 6CPU * 180 GB SSD disk",
    price: "$80",
    interval: "/ mo",
  },
  {
    name: "Business",
    specs: "24GB / 12CPU * 240 GB SSD disk",
    price: "$120",
    interval: "/ mo",
  },
  {
    name: "Enterprise",
    specs: "64GB / 32CPU * 340 GB SSD disk",
    price: "$180",
    interval: "/ mo",
  },
];

const StackedRadioGroup = () => {
  const [selectedPlan, setSelectedPlan] = useState(plansData[0].name);

  const handleChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  return (
    <Box
      sx={{
        p: 3,
        marginTop: 8,
        boxShadow: 3,
        borderRadius: 2,
        maxWidth: 550,
        margin: "auto",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Choose server
      </Typography>
      <RadioGroup value={selectedPlan} onChange={handleChange}>
        {plansData.map((plan, index) => (
          <Paper key={index} sx={{ mb: 2, p: 2, boxShadow: 1, borderRadius: 2, width: '100%' }}>
            <FormControlLabel
              value={plan.name}
              control={<Radio />}
              sx={{ width: '100%', m: 0 }}
              label={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {plan.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {plan.specs}
                    </Typography>
                  </Box>
                  <Box sx={{  textAlign: 'right', justifyContent: 'flex-end', }}>
                    {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {plan.price}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {plan.interval}
                    </Typography> */}
                  </Box>
                </Box>
              }
            />
          </Paper>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default StackedRadioGroup;
