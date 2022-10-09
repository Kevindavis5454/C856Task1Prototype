import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { BottomNav } from './BottomNav';
import { TopBar } from './TopBar';
import { Link } from 'react-router-dom';
import SwipeableTextMobileStepper from './Carosel';

export const BookingResults = () => {
  const images = [
  {
    label: 'Hostel',
    imgPath: require('./assets/hostel.jpeg'),
  },
  {
    label: 'Resort',
    imgPath: require('./assets/resort.jpeg'),
  },
  {
    label: 'Bed and Breakfast',
    imgPath: require('./assets/bnb.jpeg'),
  },
  {
    label: 'Hotel',
    imgPath: require('./assets/hotel.jpeg'),
  },
];
  return (
    <Box
      sx={{
        paddingTop: '74px',
        paddingBottom: '74px',
      }}
    >
      <TopBar />
      <Grid
        container
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        spacing={2}
        
      >
        <Grid
          item
          xs={12}
        >
          <SwipeableTextMobileStepper images={images} />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="center"
          >
            Choose the accomodation that best suits your needs!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Stack
            spacing={2}
          >
            <Button component={Link} variant="contained" to="/booking/payment">Proceed to Payment</Button>
            <Button component={Link} variant="contained" to="/booking">Return to Booking</Button>
          </Stack>
        </Grid>
      </Grid>
      <BottomNav />
    </Box>
  );
};

