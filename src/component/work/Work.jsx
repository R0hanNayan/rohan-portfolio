import React from 'react';
import './work.css';

const Work = () => {
    const timelineData = [
        { year: 'Sep 2023', title: 'Software Engineer Intern', description: 'Delhi Web Hosting' },
        { year: 'Oct 2023', title: 'Full-Stack Developer Intern', description: 'Criss Cross Solutions' },
        { year: 'Jun 2024', title: 'Frontend Developer Intern', description: 'Next24 Tech' },
    ];
    return (
        <div className='work-container'>
            <h1 className='work-h1'>Work Experience</h1>
            <div className="timeline-container">
                <div className="timeline">
                    {timelineData.map((event, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-year">{event.year}</div>
                            <div className="timeline-content">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work