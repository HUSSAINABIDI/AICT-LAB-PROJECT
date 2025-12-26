import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css'

import { Box, Button, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Example primary color
    },
    secondary: {
      main: '#f50057', // Example secondary color
    },
    orange: {
      main: '#FF9800', // Custom orange color
    },
    // You can define other custom colors here if needed
  },
})

const Home = () => {
  return (
    <div>
      <div className="home">
        <Box className='home-Component'>
          <Typography className="h1" variant="h1" sx={{ fontSize: '80px', color: 'gold' }}>Food Website</Typography>
          <Typography className="para" variant="paragraph">Best Food In Pakistan</Typography>
          <br />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Link to='/menu'>
              <Button size="large" className="btn" color="orange" variant="contained">Order Now</Button>
            </Link>
          </ThemeProvider>

        </Box>
      </div>
    </div>
  )
}

export default Home
