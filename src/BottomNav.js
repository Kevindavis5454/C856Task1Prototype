import React, { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ParkIcon from '@mui/icons-material/Park';
import EmailIcon from '@mui/icons-material/Email';

export const BottomNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [value, setValue] = useState(null);
  useEffect(() => {
    if (pathname) {
      if (pathname.includes('welcome')) {
        setValue(0);
        return;
      }
      if (pathname.includes('booking')) {
        setValue(1);
        return;
      }
      if (pathname.includes('attractions')) {
        setValue(2);
        return;
      }
      if (pathname.includes('contact')) {
        setValue(3);
        return;
      }
    }
  }, [pathname])
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
      >
        <BottomNavigationAction label="Welcome" icon={<HomeIcon />} component={Link} to="/welcome" />
        <BottomNavigationAction label="Booking" icon={<EventSeatIcon />} component={Link} to="/booking" />
        <BottomNavigationAction label="Attractions" icon={<ParkIcon />} component={Link} to="/attractions" />
        <BottomNavigationAction label="Contact" icon={<EmailIcon />} component={Link} to="/contact" />
      </BottomNavigation>
    </Paper>
  );
};
