import React from 'react';
import './about.css';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <div className='about-container'>
            <img src="../../assets/pfp.jpg" alt="pfp" className='profile-image' />
            <h6 className='about-h6'>
                Hello, I am Rohan{" "} <br/>
                <TypeAnimation
                    sequence={[
                        "A Software Engineer",
                        1000,
                        "A Web Developer",
                        1000,
                        "A Cloud Practioner",
                        1000,
                    ]}
                    speed={5}
                    repeat={Infinity}
                    style={{color:'#ba04fb'}}
                />!
            </h6>
        </div>
    )
}

export default About