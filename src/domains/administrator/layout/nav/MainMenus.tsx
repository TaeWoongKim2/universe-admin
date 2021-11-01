import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

const menuList = [
  {
    key: 'user',
    label: '사용자',
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    key: 'dummy',
    label: '더미메뉴',
    icon: <BlockOutlinedIcon />,
  },
];

function MainMenus() {
  return (
    <List>
      {menuList.map(({ key, label, icon }) => (
        <ListItem
          key={key}
          button
        >
          <ListItemIcon
            style={{ minWidth: 40 }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
}

export default MainMenus;
