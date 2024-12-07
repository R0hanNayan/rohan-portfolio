import React from 'react';
import './work.css';


const Work = () => {

    const timelineData = [
        { year: 'Sep 2023', title: 'Software Engineer Intern', description: 'Delhi Web Hosting', img:'/assets/bg1.png' },
        { year: 'Oct 2023', title: 'Full-Stack Developer Intern', description: 'Criss Cross Solutions', img:'/assets/bg2.png'},
        { year: 'Jun 2024', title: 'Frontend Developer Intern', description: 'Next24 Tech', img:'/assets/bg3.png'},
    ];
    return (
        <div className='work-container'>
            <h1 className='work-h1'>Experience</h1>
            <div className="timeline-container">
                <div className='road1'>
                    <p style={{color:'#FFAA80'}}>{timelineData[0].title}</p>
                    <p style={{color:'#73EC8B'}}>{timelineData[0].year}</p>
                    <p style={{color:'#FFEB55'}}>{timelineData[0].description}</p>
                </div>
                <div className='road2'>
                    <p style={{color:'#7C00FE'}}>{timelineData[1].title}</p>
                    <p style={{color:'#F9E400'}}>{timelineData[1].year}</p>
                    <p style={{color:'#FFAF00'}}>{timelineData[1].description}</p>
                </div>
                <div className='road3'>
                    <p style={{color:'#D2FF72'}}>{timelineData[2].title}</p>
                    <p style={{color:'#15B392'}}>{timelineData[2].year}</p>
                    <p style={{color:'#54C392'}}>{timelineData[2].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Work