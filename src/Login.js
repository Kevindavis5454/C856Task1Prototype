import React from 'react';
import { Box, Grid, Stack, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
            src={require('./assets/welcome.jpeg')}
            width="100%"
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField label="Email" variant="filled" fullWidth />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField label="Password" variant="filled" fullWidth />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Stack
            spacing={2}
          >
            <Button component={Link} variant="contained" to="/welcome">Login</Button>
            <Typography
              textAlign="center"
            >
              Not a member yet?
            </Typography>
            <Button component={Link} variant="contained" to="/register">Register</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
