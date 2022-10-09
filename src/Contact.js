import React from 'react';
import { Box, Button, Grid, Stack, TextareaAutosize, TextField, Typography } from '@mui/material';
import { BottomNav } from './BottomNav';
import { TopBar } from './TopBar';
import { Link } from 'react-router-dom';

export const Contact = () => {
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
            src={require('./assets/contact.jpeg')}
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
            How Can We Help?
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField label="Name" fullWidth type="number" />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField label="Email" fullWidth type="number" />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField label="Phone Number" fullWidth type="tel" />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextareaAutosize placeholder="How Can We Help?" style={{ width: '100%' }} minRows={3} />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Stack>
            <Button component={Link} variant="contained" to="/welcome">Send</Button>
          </Stack>
        </Grid>
      </Grid>
      <BottomNav />
    </Box>
  );
};