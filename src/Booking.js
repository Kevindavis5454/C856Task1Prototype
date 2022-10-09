import React, { useState } from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BottomNav } from './BottomNav';
import { TopBar } from './TopBar';
import { Link } from 'react-router-dom';

export const Booking = () => {
  const [value, setValue] = useState(new Date());
  const [accomodation, setAccomodation] = useState('');
  const handleChange = (event) => {
    setAccomodation(event.target.value);
  };
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
            src={require('./assets/vacation.jpeg')}
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
            Ready to book your vacation? Excellent!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Pick your date!"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <FormControl fullWidth>
            <InputLabel id="accomodation-label">Accomodation</InputLabel>
            <Select
              labelId="accomodation-label"
              id="accomodation"
              value={accomodation}
              label="Accomodation"
              onChange={handleChange}
            >
              <MenuItem value="Hostel">Hostel</MenuItem>
              <MenuItem value="Resort">Resort</MenuItem>
              <MenuItem value="BedAndBreakfast">Bed And Breakfast</MenuItem>
              <MenuItem value="Hotel">Hotel</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField label="Number of Adults" fullWidth type="number" />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField label="Number of Children" fullWidth type="number" />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Stack>
            <Button component={Link} variant="contained" to="/booking/results">Find your Home Away From Home!</Button>
          </Stack>
        </Grid>
      </Grid>
      <BottomNav />
    </Box>
  );
};

