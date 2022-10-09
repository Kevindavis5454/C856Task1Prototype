import React, { useState } from 'react';
import {
  Toolbar,
  IconButton,
  BottomNavigation,
  Paper,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ParkIcon from '@mui/icons-material/Park';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

export const TopBar = () => {
  const [open, setOpen] = useState(false);
  const listOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      to: '/welcome',
    },
    {
      text: 'Booking',
      icon: <EventSeatIcon />,
      to: '/booking',
    },
    {
      text: 'Attractions',
      icon: <ParkIcon />,
      to: '/attractions',
    },
    {
      text: 'Contact',
      icon: <EmailIcon />,
      to: '/contact',
    },
    {
      text: 'FAQs',
      icon: <LiveHelpIcon />,
      to: '/faq',
    },
    {
      text: 'Logout',
      icon: <LogoutIcon />,
      to: '/',
    },
  ];
  const list = () => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        {listOptions.map((option, index) => (
          <ListItem key={option.text} disablePadding component={Link} to={option.to}>
            <ListItemButton>
              <ListItemIcon>
                {option.icon}
              </ListItemIcon>
              <ListItemText primary={option.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Taniti Vacations
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </BottomNavigation>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        {list()}
      </Drawer>
    </Paper>
  );
};
