import React, { useEffect, useState } from 'react';
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

const Main = ({ goTo }) => {
    const [state, setState] = useState(
        {
            about: false,
            project: false,
            contact: false
        }
    )

    useEffect(() => {
        if (goTo === 'about') {
            setState({ project: false, contact: false, about: true })
        } else if (goTo === 'project') {
            setState({ project: true, contact: false, about: false })
        } else if (goTo === 'contacts') {
            setState({ project: false, about: false, contact: true })
        }
    }, [goTo]);

    return (
        <div className="main">
            <About goTo={state.about} />
            <Projects goTo={state.project} />
            <Contact goTo={state.contact} />
        </div>
    )
}

export default Main;
