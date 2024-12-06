import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";
import './project.css';
import ProjectCard from './ProjectCard';

const projects = [
    {
        "img": "../assets/proxy.png",
        "title": "Multi-Threaded Proxy Web Server",
        "desc": "Designed and deployed a multi-threaded proxy server with caching using C and POSIX threads, optimizing web traffic handling and reducing latency, improving server performance by 40%. Implemented a 200 MB LRU cache, achieving a 90% reduction in response times for cached requests.",
        "line": 'https://github.com/R0hanNayan/Daily-Scribble-2.0'
    },
    {
        "img": "../assets/backit.jpg",
        "title": "BackIt - Decentralized Crowdfunding Platform",
        "desc": "Built a scalable decentralized crowdfunding platform using React, Tailwind CSS, Solidity, and Thirdweb, featuring secure ETH transactions through MetaMask integration. Developed smart contracts on the Ethereum blockchain to manage campaigns, process donations, and reduce fraud risk by 70%."
    },
    {
        "img": "../assets/dailyScribble.jpg",
        "title": "The Daily Scribble - MERN Blogging Platform",
        "desc": "Launched a MERN-based blogging platform with user registration, blog creation, and Bcrypt-secured authentication. Implemented REST APIs for seamless data management and smooth user interaction."
    },
    {
        "img": "../assets/python.png",
        "title": "Sales Analysis Using Python",
        "desc": "Performed data cleaning and exploratory data analysis using pandas, matplotlib, and seaborn. Identified key customer demographics and top-selling product categories, enhancing inventory planning and improving customer experience."
    }
];

export function Project() {


    return (
        <div className='project-container'>
            <h1>Projects</h1>
            <Slider
                className='project-slider'
                centerMode={true}
                variableWidth={true}
                autoplay={true}
                autoplaySpeed={2000}
                pauseOnHover={true}
                infinite={true}
            >
                {
                    projects.map((item) => (
                        <ProjectCard
                            img={item.img}
                            title={item.title}
                            desc={item.desc.substring(0, 100)}
                        />
                    ))
                }
            </Slider>
        </div>
    )
}

export default Project