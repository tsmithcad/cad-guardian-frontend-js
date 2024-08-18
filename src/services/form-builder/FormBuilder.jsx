import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

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
            Ai Form Builder
          </Typography>
        </Toolbar>
      </AppBar>

      <Box display="flex" p={2} sx={{ position: 'relative' }}>
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
