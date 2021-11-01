import React from 'react';

import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';

function SubMenus() {
  return (
    <List>
      <Link
        to="/logout"
        style={{
          color: '#333',
          textDecoration: 'none',
        }}
      >
        <ListItem
          button
        >
          <ListItemIcon
            style={{ minWidth: 40 }}
          >
            <MeetingRoomOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="로그아웃" />
        </ListItem>
      </Link>
    </List>
  );
}

export default SubMenus;
