import React from 'react';

import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type LinkedMenuItem = {
  href: string;
  label: string;
  icon: React.ReactElement<any>;
};

function Menu({ href, label, icon }: LinkedMenuItem) {
  return (
    <Link
      to={href}
      style={{
        color: '#333',
        textDecoration: 'none',
      }}
    >
      <ListItem button>
        <ListItemIcon style={{ minWidth: 40 }}>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  );
}

export default Menu;
