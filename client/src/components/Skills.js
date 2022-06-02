import React, { useRef } from "react";
import { ProgressBar } from "react-bootstrap";

const Skills = ({ goTo }) => {
  const skillsRef = useRef(null);

  if (goTo) {
    skillsRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <div className="skills section-margin" ref={skillsRef}>
      <h2>My Skills</h2>
      <p>
        Don't possible to judge own skill by yourself but should follow
        convention
      </p>
      <hr />
      <div className="skills__section container">
        <div className="skills__frontend">
          <h4>Frontend Technologies</h4>
          <hr />
          <div className="skills__main">
            <p className="skills__name">Javascript</p>
            <ProgressBar className="skills__bar" now={90} label={`${90}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">React</p>
            <ProgressBar className="skills__bar" now={95} label={`${95}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">Redux (State managment)</p>
            <ProgressBar className="skills__bar" now={90} label={`${90}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">Easy-Peasy (State managment)</p>
            <ProgressBar className="skills__bar" now={95} label={`${95}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">HTML</p>
            <ProgressBar className="skills__bar" now={95} label={`${95}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">CSS</p>
            <ProgressBar className="skills__bar" now={90} label={`${90}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">BEM (CSS Architecture)</p>
            <ProgressBar className="skills__bar" now={95} label={`${95}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">SASS (CSS Processor)</p>
            <ProgressBar className="skills__bar" now={80} label={`${80}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">Tailwind CSS</p>
            <ProgressBar className="skills__bar" now={90} label={`${90}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">
              Bootstrap / React Bootstrap / ReactStrap
            </p>
            <ProgressBar className="skills__bar" now={90} label={`${90}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">Material UI</p>
            <ProgressBar className="skills__bar" now={70} label={`${70}%`} />
          </div>
        </div>
        <div className="skills__backend">
          <h4>Backend Technologies</h4>
          <hr />
          <div className="skills__main">
            <p className="skills__name">Nodejs</p>
            <ProgressBar className="skills__bar" now={70} label={`${70}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">Expressjs</p>
            <ProgressBar className="skills__bar" now={90} label={`${90}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">Mongodb</p>
            <ProgressBar className="skills__bar" now={65} label={`${65}%`} />
          </div>
        </div>
        <div className="skills__tools">
          <h4>Others Technologies</h4>
          <hr />
          <div className="skills__main">
            <p className="skills__name">Git</p>
            <ProgressBar className="skills__bar" now={75} label={`${75}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">Webpack</p>
            <ProgressBar className="skills__bar" now={50} label={`${50}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">JOSN</p>
            <ProgressBar className="skills__bar" now={90} label={`${90}%`} />
          </div>
          <div className="skills__main">
            <p className="skills__name">UML Diagram</p>
            <ProgressBar className="skills__bar" now={90} label={`${90}%`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
