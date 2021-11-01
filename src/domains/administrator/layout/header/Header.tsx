import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          noWrap
        >
          캠밋 관리자 시스템
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
