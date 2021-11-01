import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type LabelMenuItem = {
  label: string,
  icon: React.ReactElement<any>,
}

function Menu({
  label,
  icon,
}: LabelMenuItem) {
  return (
    <ListItem
      button
    >
      <ListItemIcon
        style={{ minWidth: 40 }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={label}
      />
    </ListItem>
  );
}

export default Menu;
