import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailIcon from '@mui/icons-material/Mail';

function MainMenus() {
  return (
    <List>
      {['사용자', '임시메뉴'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0
              ? <AccountCircleOutlinedIcon />
              : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}

export default MainMenus;
