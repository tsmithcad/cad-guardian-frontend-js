import React, { useState } from 'react';
import { Box, Paper, TextField, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const FormElementWrapper = ({ children, defaultTitle }) => {
  const [title, setTitle] = useState(defaultTitle);
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box display="flex" alignItems="center" mb={1}>
        {isEditing ? (
          <TextField
            value={title}
            onChange={handleTitleChange}
            onBlur={toggleEdit}
            variant="outlined"
            size="small"
            autoFocus
            fullWidth
          />
        ) : (
          <Typography variant="body1" onClick={toggleEdit} sx={{ cursor: 'pointer', flexGrow: 1 }}>
            {title}
          </Typography>
        )}
        <IconButton size="small" onClick={toggleEdit}>
          <EditIcon />
        </IconButton>
      </Box>
      <Paper variant="outlined" sx={{ p: 1 }}>
        {children}
      </Paper>
    </Box>
  );
};

export default FormElementWrapper;
