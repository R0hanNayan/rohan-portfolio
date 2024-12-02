import React, { useState } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography, Box, Menu, MenuList, MenuItem } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' sx={{
      display: 'flex',
      justifyContent: 'center',
      background: 'rgba(255, 255, 255, 0.15)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(4px)',
      borderRadius: '4rem',
      width: '90%',
      height: { lg: '5rem', sm: '3rem' },
      margin: '0 auto'
    }}
      className='nav-container'
    >
      <Toolbar>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ marginLeft: { lg: '0.5rem' } }} onClick={handleClick}>
            <BoltIcon sx={{color:'red'}} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              top:{lg:'2rem', md:'1rem', xs:'1rem'},
            }}
            PaperProps={{
              sx: {
                width: '200px', 
                background: 'rgba(255, 255, 255, 0.15)', 
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', 
                backdropFilter: 'blur(4px)', 
              }
            }}
          >
            <MenuList sx={{color:'white'}}>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Work</MenuItem>
              <MenuItem onClick={handleClose}>Projects</MenuItem>
              <MenuItem onClick={handleClose}>Hire Me</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Typography variant='h6' component='div' sx={{
          marginLeft: { lg: '2rem', xs: '1.5rem' },
          fontSize: '1.5rem',
          letterSpacing: '0.2rem'
        }}>
          ROHAN NAYAN 
        </Typography>

        <Box sx={{
          display: { lg: 'flex', xs: 'none', md: 'none' },
          marginLeft: '14rem',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          width: '60%',
        }}>
          <Button color='inherit' sx={{ fontSize: '1.5rem' }}>About</Button>
          <Button color='inherit' sx={{ fontSize: '1.5rem' }}>Work</Button>
          <Button color='inherit' sx={{ fontSize: '1.5rem' }}>Projects</Button>
          <Button color='inherit' sx={{ fontSize: '1.5rem' }}>Hire Me</Button>
          <Button color='inherit' sx={{ fontSize: '1.5rem' }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar