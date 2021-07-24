import React from 'react';
import Me from "../assets/images/mhsit.jpg"
import resume from "../assets/resume/resume.pdf"
import { saveAs } from 'file-saver';

const Sidebar = ({ refHandler }) => {

  const handler = () => {
    saveAs(resume, "mahamudulhasanshuvo.pdf");
  }

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <img className="sidebar__avatar" src={Me} alt="" />
        <h2>Mahamudul Hasan Shuvo</h2>
        <p>Professional full stack developer</p>
        <button
          onClick={handler}
          className="btn sidebar__resume">Download resume</button>
        <hr />
        <ul className="sidebar__ul">
          <li
            onClick={() => refHandler('about')}
            className="sidebar__li">About</li>
          <li
            onClick={() => refHandler('project')}
            className="sidebar__li">Projects</li>
          <li
            onClick={() => refHandler('contacts')}
            className="sidebar__li">Contact</li>
        </ul>
        <hr />
        <div className="sidebar__icon-div">
          <a className="sidebar__icon" target="_blank" rel="noopener noreferrer" href="https://github.com/mhshuvoit">
            <i className="fab fa-github"></i>
          </a>
          <a className="sidebar__icon" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mhshuvoit">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="sidebar__icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mhshuvoit">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="sidebar__footer"><small>All right reserved Mahamudul Hasan Shuvo</small></p>
      </div>
    </div>
  )
}

export default Sidebar;
