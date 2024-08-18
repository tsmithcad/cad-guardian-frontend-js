import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Save as SaveIcon, Preview as PreviewIcon } from '@mui/icons-material';

import Toolbox from './Toolbox';
import FormCanvas from './FormCanvas';
import PropertiesPanel from './PropertiesPanel';
import FloatingActionButton from './FloatingActionButton';

const FormBuilder = () => {
  const [formElements, setFormElements] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addFormElement = (type) => {
    setFormElements([...formElements, { type, id: formElements.length }]);
  };

  const removeFormElement = (id) => {
    setFormElements(formElements.filter(element => element.id !== id));
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Form Builder
          </Typography>
          <Button color="inherit" sx={{ marginRight: 2 }} startIcon={<SaveIcon />}>
            Save
          </Button>
          <Button color="inherit" startIcon={<PreviewIcon />}>
            Preview
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex" p={2} sx={{ position: 'relative', minHeight: '100vh' }}>
        <Toolbox
          formElements={formElements}
          addFormElement={addFormElement}
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
        />
        <FormCanvas formElements={formElements} removeFormElement={removeFormElement} />
        <PropertiesPanel />
        <FloatingActionButton toggleDrawer={toggleDrawer} />
      </Box>
    </Box>
  );
};

export default FormBuilder;
