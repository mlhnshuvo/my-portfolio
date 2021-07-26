import React, { useEffect, useState } from 'react';
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Skills from "./Skills"

const Main = ({ goTo }) => {
    const [state, setState] = useState(
        {
            about: false,
            skills: false,
            project: false,
            contact: false
        }
    )

    useEffect(() => {
        if (goTo === 'about') {
            setState({ project: false, skills: false, contact: false, about: true })
        } else if (goTo === 'skills') {
            setState({ project: false, skills: true, about: false, contact: false })
        } else if (goTo === 'project') {
            setState({ project: true, skills: false, contact: false, about: false })
        } else if (goTo === 'contacts') {
            setState({ project: false, skills: false, about: false, contact: true })
        }
    }, [goTo]);

    return (
        <div className="main">
            <About goTo={state.about} />
            <Skills goTo={state.skills} />
            <Projects goTo={state.project} />
            <Contact goTo={state.contact} />
        </div>
    )
}

export default Main;
