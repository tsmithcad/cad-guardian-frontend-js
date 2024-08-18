import React, { useState } from 'react';
import { Box, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

import { formElementsMap } from './FormElements';

const FormCanvas = ({ formElements, removeFormElement }) => {
  const [open, setOpen] = useState(false);
  const [selectedElementId, setSelectedElementId] = useState(null);

  const handleClickOpen = (id) => {
    setSelectedElementId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedElementId(null);
  };

  const handleDelete = () => {
    removeFormElement(selectedElementId);
    handleClose();
  };

  return (
    <Box width={{ xs: '100%', md: '60%' }} p={1}>
      <Typography variant="h6" gutterBottom>
        Form Canvas
      </Typography>
      <Paper variant="outlined" sx={{ minHeight: '400px', p: 2 }}>
        {formElements.map((element) => {
          const ElementComponent = formElementsMap[element.type];
          return (
            <Box key={element.id} display="flex" alignItems="center" mb={2}>
              <Box flexGrow={1}>
                <ElementComponent />
              </Box>
              <IconButton color="secondary" onClick={() => handleClickOpen(element.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        })}
      </Paper>

      {/* Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Form Element"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this form element? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FormCanvas;
