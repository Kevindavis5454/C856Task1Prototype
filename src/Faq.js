import React from 'react';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { BottomNav } from './BottomNav';
import { TopBar } from './TopBar';
import { Link } from 'react-router-dom';

export const Faq = () => {
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
            src={require('./assets/questions.jpeg')}
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
            Frequently Asked Questions:
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="left"
          >
            Power outlets are 120 volts (the same as in the United States).
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="left"
          >
            Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="left"
          >
            The drinking age on Taniti is 18 and the drinking age is not strictly enforced.
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="left"
          >
            Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="left"
          >
            There is one hospital and several clinics. The hospital has many multilingual employees.
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="left"
          >
            Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes. 
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="left"
          >
            Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly. 
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            textAlign="left"
          >
            Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards. 
          </Typography>
          <Divider />
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