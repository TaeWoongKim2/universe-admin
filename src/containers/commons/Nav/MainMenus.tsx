import React from 'react';

import List from '@mui/material/List';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

import LinkedMenu from './LinkedMenu';

const menuList = [
  {
    key: 'user',
    to: '/user',
    label: '사용자',
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    key: 'dummy',
    to: '/dummy',
    label: '더미메뉴',
    icon: <BlockOutlinedIcon />,
  },
];

function MainMenus() {
  return (
    <List>
      {menuList.map(({ key, to, label, icon }) => (
        <LinkedMenu key={key} href={to} label={label} icon={icon} />
      ))}
    </List>
  );
}

export default MainMenus;
