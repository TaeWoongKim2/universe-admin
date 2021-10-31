import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

import Login from './Login';

import { postLogin } from '../../services/api';
import { saveItem } from '../../services/storage';
import { AuthenticationKey } from '../../services/serviceKey';

const styles = {
  loginBox: {
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' id=\'visual\' viewBox=\'0 0 960 540\' width=\'960\' height=\'540\' version=\'1.1\'%3E%3Crect x=\'0\' y=\'0\' width=\'960\' height=\'540\' fill=\'%23001122\'/%3E%3Cpath d=\'M0 376L22.8 378.3C45.7 380.7 91.3 385.3 137 383.5C182.7 381.7 228.3 373.3 274 377.3C319.7 381.3 365.3 397.7 411.2 406.5C457 415.3 503 416.7 548.8 411.5C594.7 406.3 640.3 394.7 686 390C731.7 385.3 777.3 387.7 823 390C868.7 392.3 914.3 394.7 937.2 395.8L960 397L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z\' fill=\'%23004027\'/%3E%3Cpath d=\'M0 388L22.8 396.7C45.7 405.3 91.3 422.7 137 423.8C182.7 425 228.3 410 274 410.7C319.7 411.3 365.3 427.7 411.2 436C457 444.3 503 444.7 548.8 436.8C594.7 429 640.3 413 686 412.7C731.7 412.3 777.3 427.7 823 433.3C868.7 439 914.3 435 937.2 433L960 431L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z\' fill=\'%230a7842\'/%3E%3Cpath d=\'M0 427L22.8 433.2C45.7 439.3 91.3 451.7 137 455.5C182.7 459.3 228.3 454.7 274 454.5C319.7 454.3 365.3 458.7 411.2 455.5C457 452.3 503 441.7 548.8 437.7C594.7 433.7 640.3 436.3 686 444C731.7 451.7 777.3 464.3 823 460C868.7 455.7 914.3 434.3 937.2 423.7L960 413L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z\' fill=\'%2332b358\'/%3E%3Cpath d=\'M0 511L22.8 506.2C45.7 501.3 91.3 491.7 137 489.7C182.7 487.7 228.3 493.3 274 498.2C319.7 503 365.3 507 411.2 507C457 507 503 503 548.8 496.8C594.7 490.7 640.3 482.3 686 483.7C731.7 485 777.3 496 823 500.2C868.7 504.3 914.3 501.7 937.2 500.3L960 499L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z\' fill=\'%2364f169\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPositionY: '100%',
    backgroundColor: '#021122',
    '& > :not(style)': {
      width: 380,
    },
  },
} as const;

type AdminUser = {
  userId: string;
  password: string;
}

function LoginContainer({
  setAuthentication,
}: any) {
  const login = async (adminUser: AdminUser) => {
    const authentication = await postLogin(adminUser);
    if (authentication) {
      saveItem(AuthenticationKey, JSON.stringify(authentication));
      setAuthentication(authentication);
    }
  };

  return (
    <Box
      sx={styles.loginBox}
    >
      <Paper
        sx={{
          padding: '24px',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          component="div"
          sx={{
            marginBottom: '.75em',
          }}
        >
          <AdminPanelSettingsOutlinedIcon
            color="secondary"
            fontSize="large"
          />
          Sign in
        </Typography>
        <Login onClick={login} />
        <Typography
          variant="overline"
          display="block"
          align="center"
          gutterBottom
          sx={{
            marginTop: '24px',
          }}
        >
          Copyright © 캠밋(Cammit)  2021.
        </Typography>
      </Paper>
    </Box>
  );
}

export default LoginContainer;
