import React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

import MainMenus from './MainMenus';
import SubMenus from './SubMenus';

const drawerWidth = 240;

function Navigation() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{ overflow: 'auto' }}
      >
        <MainMenus />
        <Divider />
        <SubMenus />
      </Box>
    </Drawer>
  );
}

export default Navigation;
