import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import '../../styles/Footer.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div>
      <Box sx={{ textAlign: 'center', background: '#1A1A19', color: 'white', p: 3 }}>
        <IconButton sx={{ color: 'white', my: "20px" }}>
          <InstagramIcon className='Icon' />
          <TwitterIcon className='Icon' />
          <GitHubIcon className='Icon' />
          <YouTubeIcon className='Icon' />
        </IconButton>
        <Typography variant='h5' sx={{ fontSize: { xs: '1rem' } }}>
          All Right Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </div>
  )
}

export default Footer
