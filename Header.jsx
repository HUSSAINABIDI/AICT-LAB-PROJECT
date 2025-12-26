import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer } from '@mui/material'


import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import '../../styles/Header.css'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(true)
  }

  function removeDrawer() {
    setToggle(false)
  }

  const drawer = (
    <Box onClick={removeDrawer}>
      <IconButton sx={{ color: 'white', ml: '200px' }}>
        <CloseIcon />
      </IconButton>
      <ul className='drawer'>
        <li>
          <NavLink activeClassName="active" to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={'/AboutUs'}>About Us</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={'/Contact'}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={'/Menu'}>Menu</NavLink>
        </li>
      </ul>
    </Box>
  )

  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ background: 'black' }}>
          <Toolbar>
            <IconButton color='inherit' sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color={'gold'} variant='h5' component={'div'} sx={{ flexGrow: 1 }} >
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation'>
                <li>
                  <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={'/AboutUs'}>About Us</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={'/Contact'}>Contact Us</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={'/Menu'}>Menu</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav' >
          <Drawer variant='temporary' open={toggle} onClose={handleToggle}
            sx={{
              display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
                boxSizing: 'border-box',
                width: '250px',
                background: 'black'
              }
            }} >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </div>
  )
}

export default Header
