import React from 'react';

import List from '@mui/material/List';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

import LabelMenu from './LabelMenu';

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
        <LabelMenu
          key={key}
          label={label}
          icon={icon}
        />
      ))}
    </List>
  );
}

export default MainMenus;
