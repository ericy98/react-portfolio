import React, { useState } from 'react';
import Project from './Project';

function Portfolio() {

    const [projects] = useState([
        {
            name: 'Worth My Time',
            imgName: 'worthmytime',
            description: 'HTML, CSS, JS',
            link: 'https://jessbot500.github.io/Worth-My-Time/',
            repo: 'https://github.com/JessBot500/Worth-My-Time'
        },
        {
            name: 'Employee Tracker',
            imgName: 'employeetracker',
            description: 'MySQL, ExpressJS, JS',
            link: 'https://drive.google.com/file/d/1JDbOb6guJJbErGGdCTgC0ZWYCh-dNKOc/view',
            repo: 'https://github.com/ericy98/employee-tracker'
        }
    ])

    return (
        <div className="container">
            <h2>Portfolio</h2>
            <div className="row">
                <div className="col">
                    <p>1 of 2</p>
                </div>
                <div className="col">
                    <p>2 of 2</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;