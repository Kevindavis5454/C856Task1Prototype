import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { BottomNav } from './BottomNav';
import { TopBar } from './TopBar';
import { Link } from 'react-router-dom';

export const Payment = () => {
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
            src={require('./assets/payment.jpeg')}
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
            Please enter your payment details below
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField label="Card Number" fullWidth type="number" />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField label="Name on Card" fullWidth />
        </Grid>
        <Grid
          item
          xs={6}
        >
          <TextField label="Expiration Date" fullWidth />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
        >
          <TextField label="CVV" fullWidth sx={{ marginRight: '10px'} } />
          <TextField label="Postal Code" fullWidth />
        </Grid>
        <Grid
          item
          xs={6}
        >
          
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Stack
            spacing={2}
          >
            <Button component={Link} variant="contained" to="/booking/confirmation">Submit</Button>
            <Button component={Link} variant="contained" to="/booking/results">Return to Results</Button>
          </Stack>
        </Grid>
      </Grid>
      <BottomNav />
    </Box>
  );
};