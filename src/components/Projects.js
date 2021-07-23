import React, { useState, useRef } from 'react';
import faceBookLite from '../assets/images/projects/facebookLite.jpg'
import shoppingCard from '../assets/images/projects/shoppingCard.jpg'

const projects = [
    {
        image: faceBookLite,
        name: 'Mern facebook lite application',
        type: 'recent',
        github: 'https://github.com/mhshuvoit',
        live: 'https://mern-facebook-lite-mhs.herokuapp.com'
    },
    {
        image: shoppingCard,
        name: 'This is a shopping cart application',
        type: 'running',
        github: 'https://github.com/mhshuvoit',
        live: 'https://mern-facebook-lite-mhs.herokuapp.com'
    }
]

const Projects = ({ goTo }) => {
    const [state, setState] = useState(projects)
    const projectRef = useRef(null)

    if (goTo) {
        projectRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    const handler = (e) => {
        if (e.target.value === 'recent') {
            const project = projects.filter(project => project.type === e.target.value)
            setState(project)
        } else if (e.target.value === 'running') {
            const project = projects.filter(project => project.type === e.target.value)
            setState(project)
        } else {
            setState(projects)
        }
    }

    return (
        <div className="project section-margin" ref={projectRef}>
            <h2>Projects</h2>
            <p>My all own and contribution projects are here</p>
            <hr />
            <button
                className="btn btn--project"
                onClick={handler}
                value="recent">Recent</button>
            <button
                className="btn btn--project"
                onClick={handler}
                value="running">Running</button>
            <button
                className="btn btn--project"
                onClick={handler}
            >All</button>
            <div>
                {state.map(project => (
                    <div key={project.image} className="card">
                        <img className="project__image" src={project.image} alt="" />
                        <p>{project.name}</p>
                        <div className="project__btn">
                            <a target="_blank" rel="noopener noreferrer" href={project.github}>
                                <button className="btn btn--project">Github</button>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={project.live}>
                                <button className="btn btn--project">Live</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
