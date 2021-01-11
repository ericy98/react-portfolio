import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {

  const [projects] = useState([
    {
      name: 'Red Cat and Co',
      imgName: 'redcat',
      description: 'MERN, Stripe, BootStrap',
      link: 'https://mysterious-island-01047.herokuapp.com/',
      repo: 'https://github.com/GildedRose/redcatandco'
    },
    {
      name: 'Worth My Time',
      imgName: 'worthmytime',
      description: 'HTML, CSS, JS',
      link: 'https://jessbot500.github.io/Worth-My-Time/',
      repo: 'https://github.com/JessBot500/Worth-My-Time'
    }, {
      name: 'Deep Thoughts',
      imgName: 'deepthoughts',
      description: 'React, GraphQL, Apollo',
      link: 'https://shielded-ridge-16421.herokuapp.com/',
      repo: 'https://github.com/ericy98/deep-thoughts'
    },
    {
      name: `I'll Be Honest`,
      imgName: 'illbehonest',
      description: 'MySQL, Handlebars, Sass, ExpressJs',
      link: 'https://illbehonest.herokuapp.com/',
      repo: 'https://github.com/GildedRose/illbehonest'
    },
    {
      name: 'Employee Tracker',
      imgName: 'employeetracker',
      description: 'MySQL, ExpressJS, JS',
      link: 'https://drive.google.com/file/d/1JDbOb6guJJbErGGdCTgC0ZWYCh-dNKOc/view',
      repo: 'https://github.com/ericy98/employee-tracker'
    },
    {
      name: 'Hex Value',
      imgName: 'regextutorial',
      description: 'Regex Tutorial',
      link: 'https://gist.github.com/ericy98/1ff1c5afae3f3c0f26dd2fd747f1d9dc',
      repo: 'https://github.com/ericy98/regex-tutorial'
    }
  ])

  return (
    <div className='portfolio'>
      <div className="flex-row justify-content-center">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;