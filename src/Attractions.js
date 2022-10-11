import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { BottomNav } from './BottomNav';
import SwipeableTextMobileStepper from './Carosel';
import { TopBar } from './TopBar';

export const Attractions = () => {
  const images = [
  {
    label: 'Local Restaurants',
    imgPath: require('./assets/restauraunt.jpeg'),
  },
  {
    label: 'Beaches',
    imgPath: require('./assets/beach1.jpeg'),
  },
  {
    label: 'Art and Museums',
    imgPath: require('./assets/museum.jpeg'),
  },
  {
    label: 'Fishing',
    imgPath: require('./assets/fishing.jpeg'),
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
          <Box
            component="img"
            src={require('./assets/passion.jpeg')}
            width="100%"
          />
        </Grid>
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
          <Typography textAlign="center">
            Find your passion in Taniti!
          </Typography>
        </Grid>
      </Grid>
      <BottomNav />
    </Box>
  );
};
