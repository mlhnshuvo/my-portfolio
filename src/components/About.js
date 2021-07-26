import React, { useRef } from 'react';
import Me from "../assets/images/mahamudulhasan.jpg";

const About = ({ goTo }) => {
    const aboutRef = useRef(null)

    if (goTo) {
        aboutRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    return (
        <div ref={aboutRef}>
            <h2>About Me</h2>
            <p>As a programmer now I am working as a Full Stack Web Developer</p>
            <hr />
            <div className="about__section">
                <img className="about__image" src={Me} alt="" />
                <p className="about__para">As a programmer now I am working as a Full Stack Web Developer. I love new technology and always ready to face new challenges. I will develop a modern and responsive website with the latest technologies. I am a full-time dedicator so I am very serious to satisfy my clients. Feel free to contact me as a friend. Always available for questions and discussions of anything you need. Your satisfaction is my first priority.</p>
            </div>
        </div>
    )
}

export default About;