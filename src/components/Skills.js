import React, { useRef } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'JS',
        Skill: '91'
    },
    {
        name: 'React',
        Skill: "98"
    },
    {
        name: 'Redux',
        Skill: "91"
    },
    {
        name: 'EP',
        Skill: "93"
    },
    {
        name: 'HTML',
        Skill: "91"
    },
    {
        name: 'CSS',
        Skill: "90"
    },
    {
        name: 'BEM',
        Skill: "96"
    },
    {
        name: 'SASS',
        Skill: "60"
    },
    {
        name: 'BStrap',
        Skill: "93"
    },
    {
        name: 'Material',
        Skill: "80"
    },
    {
        name: 'Node',
        Skill: "75"
    },
    {
        name: 'Express',
        Skill: "87"
    },
    {
        name: 'Mongo',
        Skill: "65"
    },
    {
        name: 'TS',
        Skill: "65"
    },
    {
        name: 'UD',
        Skill: "80"
    },
    {
        name: 'Webpack',
        Skill: "60"
    }
];

const Skills = ({ goTo }) => {
    const skillsRef = useRef(null)

    if (goTo) {
        skillsRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    let bgcolor = 'rgba(201, 76, 76, 0.6)'
    let textcolor = '#efefef'

    return (
        <div className="skills section-margin" ref={skillsRef}>
            <h2>My Skills</h2>
            <p>Don't possible to judge own skill by yourself but should follow convention</p>
            <hr />
            <div className="skills__charts">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}>
                        <XAxis dataKey="name" stroke={textcolor} />
                        <Tooltip />
                        <Bar dataKey="Skill" fill={bgcolor} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Skills;
