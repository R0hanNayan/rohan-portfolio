import React from 'react';
import './tech.css';
import BallCanvas from '../ball/Ball';

const technologies = [
    {
        name: "HTML 5",
        icon: './assets/html.png',
    },
    {
        name: "CSS 3",
        icon: './assets/css.png',
    },
    {
        name: "C++",
        icon: './assets/cpp.png',
    },
    {
        name: "JavaScript",
        icon: './assets/javascript.png',
    },
    {
        name: "React JS",
        icon: './assets/reactjs.png',
    },
    {
        name: "Node JS",
        icon: './assets/nodejs.png',
    },
    {
        name: "MongoDB",
        icon: './assets/mongodb.png',
    },
    {
        name: "git",
        icon: './assets/git.png',
    },
]

const Tech = () => {
    return (
        <div className='tech-container'>
            {technologies.map((technology) => (
                <div className='balls' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    )
}

export default Tech