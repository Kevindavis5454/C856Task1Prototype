import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { BottomNav } from './BottomNav';
import { TopBar } from './TopBar';
import { Link } from 'react-router-dom';

export const BookingConfirmation = () => {
  return (
    <Box
      sx={{
        paddingTop: '74px',
        paddingBottom: '74px',
        height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
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
            src={require('./assets/thankyou.jpeg')}
            width="100%"
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="center"
          >
            Thank you for booking with us! We look forward to your visit!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Stack>
            <Button component={Link} variant="contained" to="/welcome">Home</Button>
          </Stack>
        </Grid>
      </Grid>
      <BottomNav />
    </Box>
  );
};