import React from 'react';
import {
  Box,
  Container,
  CssBaseline,
} from '@mui/material';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ height: '100vh' }}>
          <Outlet />
        </Box>
      </Container>
    </React.Fragment>
    
  );
}

export default App;
