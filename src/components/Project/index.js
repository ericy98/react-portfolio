import React from 'react';

function Project({ project }) {
    const { name, imgName, description, link, repo } = project

    return (
        <div>
            <img
                src={require(`../../assets/${imgName}.png`)}
                alt={imgName}
                className="img-thumbnail"
            />
            <div>
                <h3>
                    <a href={link}>{name}</a>
                    <a href={repo}>
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Project;