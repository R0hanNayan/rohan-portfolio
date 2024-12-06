import React from 'react';
import './navbar.css';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-menu'>
        <div className='menu-item'>
          <InfoIcon fontSize='larger'/>
          <h5>About</h5>
        </div>
        <div className='menu-item'>
          <HomeRepairServiceIcon fontSize='larger'/>
          <h5>Work</h5>
        </div>
        <div className='menu-item'>
          <AccountTreeIcon fontSize='larger'/>
          <h5>Projects</h5>
        </div>
        <div className='menu-item'>
          <DownloadIcon fontSize='larger'/>
          <h5>Hire Me</h5>
        </div>
        <div className='menu-item'>
          <EmailIcon fontSize='larger'/>
          <h5>Contact</h5>
        </div>
      </div>
    </div>
  )
}

export default Navbar