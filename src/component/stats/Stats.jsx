import React from "react";
import GaugeComponent from 'react-gauge-component';
import './stats.css';

const Stats = () => {
    return (
        <div className="stats-container">
            <div className="leetcode">
                <a href="https://leetcode.com/RohanNayan04/"><img src="./assets/leetcode.png" alt="leetcode" /></a>
            </div>
            <GaugeComponent
                type="semicircle"
                minValue={0}
                maxValue={3374}
                arc={{
                    cornerRadius: 6,
                    colorArray: ['#00FF15', '#FF2121'],
                    padding: 0.02,
                    subArcs:
                        [
                            { limit: 772},
                            { limit: 840 },
                            { limit: 1762 },
                            {}
                        ]
                }}
                pointer={{ type: "blob", animationDelay: 0 }}
                value={475}
                style={{
                    fontWeight:'700',
                    
                }}
            />
        </div>
    )
}

export default Stats