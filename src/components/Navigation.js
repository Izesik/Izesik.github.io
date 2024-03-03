
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Navigation() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#112d4e' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}> {/* Align items to the right */}
        <Typography variant="h6" component="div">
          Portfolio Site
        </Typography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;