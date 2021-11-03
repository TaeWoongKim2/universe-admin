import React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '@containers/commons/Header';
import Nav from '@containers/commons/Nav';

export default ({ children }: any) => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Header />
    <Nav />
    <Box
      component="main"
      sx={{
        p: 3,
        flexGrow: 1,
      }}
    >
      <Toolbar />
      {children}
    </Box>
  </Box>
);
