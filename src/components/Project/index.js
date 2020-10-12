import React from 'react';

function Project({ project }) {
    const { name, imgName, description, link, repo } = project

    return (
        <div className="project" key={name}>
            <img
                src={require(`../../assets/${imgName}.png`)}
                alt={imgName}
                className="project-bg"
            />
            <div className="project-text text-center">
                <h3>
                    <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Project;