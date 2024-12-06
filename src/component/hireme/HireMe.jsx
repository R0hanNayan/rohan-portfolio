import React from 'react';
import './hireme.css';
import Button from '@mui/material/Button';

const HireMe = () => {
    return (
        <div className='hire-container'>
            <Button size='large' variant="outlined" color='inherit' href="https://drive.google.com/file/d/1Lf4qrtYhQKDELL7TPOvgTAdmWbAHIIy4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    background: 'none',
                    border: '0.2rem solid white',
                    borderRadius: '1rem',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 15px rgba(255, 255, 255, 0.3)',
                    },
                }}>
                Hire Me
            </Button>
        </div>
    )
}

export default HireMe