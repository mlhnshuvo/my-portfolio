import React, { useState, useRef } from "react";
import projects from "../projectsData";

const Projects = ({ goTo }) => {
  const [state, setState] = useState({
    projects: projects.filter((project) => project.type === "react"),
  });
  const projectRef = useRef(null);

  if (goTo) {
    projectRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  const handler = (value) => {
    if (value === "react") {
      setState({
        projects: projects.filter((project) => project.type === value),
      });
    } else if (value === "mern") {
      setState({
        projects: projects.filter((project) => project.type === value),
      });
    } else if (value === "others") {
      setState({
        projects: projects.filter((project) => project.type === value),
      });
    }
  };

  return (
    <div className="project section-margin" ref={projectRef}>
      <h2>Projects</h2>
      <p>My all own and contribution projects are here</p>
      <hr />
      <button className="my-btn btn--project" onClick={() => handler("react")}>
        react
      </button>
      <button
        className="my-btn btn--project"
        onClick={() => handler("mern")}
        value="mern"
      >
        mern
      </button>
      <button
        className="my-btn btn--project"
        onClick={() => handler("others")}
        value="others"
      >
        others
      </button>
      <div className="project__flex container">
        {state.projects.map((project) => (
          <div key={project.live} className="card" data-aos="zoom-in">
            <img className="project__image" src={project.image} alt="" />
            <p className="mt-3">{project.name}</p>
            <div className="project__btn">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}
              >
                <button className="my-btn btn--project">Github</button>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={project.live}>
                <button className="my-btn btn--project">Live</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
