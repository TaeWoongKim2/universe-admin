import React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './layout/header/Header';
import Navigation from './layout/nav/Navigation';
import Content from './layout/content/Content';

import UserPage from './domains/user/UserPage';

function ClippedDrawer() {
  return (
    <>
      <Header />
      <Navigation />
      <Content />
    </>
  );
}

function AdminSystem() {
  return (
    <Box
      sx={{ display: 'flex' }}
    >
      <CssBaseline />
      <ClippedDrawer />
      <UserPage />
    </Box>
  );
}

export default AdminSystem;
