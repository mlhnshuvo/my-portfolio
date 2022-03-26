import React from "react";
import Me from "../assets/images/mhsit.jpg";
import resume from "../assets/resume/resume.pdf";
import facebook from "../assets/images/social/facebook.svg";
import linkedin from "../assets/images/social/linkedin.svg";
import github from "../assets/images/social/github.svg";
import upwork from "../assets/images/social/upwork.svg";
import fiverr from "../assets/images/social/fiverr.svg";
import { saveAs } from "file-saver";

const Sidebar = ({ refHandler }) => {
  const handler = () => {
    saveAs(resume, "mahamudulhasanshuvo.pdf");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <img className="sidebar__avatar" src={Me} alt="" />
        <h6>Mahamudul Hasan Shuvo</h6>
        <p>Professional full stack developer</p>
        <button onClick={handler} className="my-btn sidebar__resume">
          Download resume
        </button>
        <hr />
        <ul className="sidebar__ul">
          <li onClick={() => refHandler("about")} className="sidebar__li">
            About
          </li>
          <li onClick={() => refHandler("skills")} className="sidebar__li">
            Skills
          </li>
          <li onClick={() => refHandler("project")} className="sidebar__li">
            Projects
          </li>
          <li onClick={() => refHandler("contacts")} className="sidebar__li">
            Contact
          </li>
        </ul>
        <hr />
        <div className="sidebar__icon-div">
          <a
            className="sidebar__icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mlhnshuvo"
          >
            <img className="sidebar__upwork" src={github} alt="" />
          </a>
          <a
            className="sidebar__icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/mlhnshuvo"
          >
            <img className="sidebar__upwork" src={facebook} alt="" />
          </a>
          <a
            className="sidebar__icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mlhnshuvo"
          >
            <img className="sidebar__upwork" src={linkedin} alt="" />
          </a>
          <a
            className="sidebar__icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.upwork.com/freelancers/~01ac7ebbe6d926dab4"
          >
            <img className="sidebar__upwork" src={upwork} alt="" />
          </a>
          <a
            className="sidebar__icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.fiverr.com/mhshuvoit"
          >
            <img className="sidebar__upwork" src={fiverr} alt="" />
          </a>
        </div>
        <p className="sidebar__footer">
          <small>All right reserved Mahamudul Hasan Shuvo</small>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
