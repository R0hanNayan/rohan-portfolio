import React from 'react';
import './project.css';

const ProjectCard = ({ img, title, desc, link }) => {
    return (
        <div className='projectCard-container'>
            <img src={img} alt="project image" className='project-img'/>
            <div className='project-title'>
                {title}
            </div>
            <div className='project-desc'>
                {desc}...
            </div>
        </div>
    )
}

export default ProjectCard