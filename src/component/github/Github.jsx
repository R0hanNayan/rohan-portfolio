import React from "react";
import './github.css';

const Stats = () => {
    return (
        <div className="github-container">
            <div className="github">
                <a href="https://github.com/R0hanNayan"><img src="./assets/github.png" alt="leetcode" /></a>
            </div>
            <div className="github-content">
                <p>Total Stars Earned: <span style={{color:'#00FF9C'}}>10</span></p>
                <p>Total Commits: <span style={{color:'#4CC9FE'}}>774</span></p>
                <p>Total Repositories: <span style={{color:'#FFE700'}}>44</span></p>
                <p>Longest Streak: <span style={{color:'#FF8A8A'}}>67</span></p>
            </div>
        </div>
    )
}

export default Stats