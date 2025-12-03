import * as React from 'react';
import { CgMenu } from "react-icons/cg";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function DrawerList() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  

  const DrawerList = (
    <Box sx={{ width: '100vw' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

    </Box>
  );

  return (
    <>
      <CgMenu 
        onClick={toggleDrawer(true)} 
        style={{ color: '#000', width: 50, height: 50, cursor: 'pointer' }}
      />
      <Drawer 
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <CgMenu 
          onClick={toggleDrawer(false)} 
          style={{ color: '#000', width: 50, height: 50, cursor: 'pointer' }}
        />
        {DrawerList}
      </Drawer>
    </>
  );
}
