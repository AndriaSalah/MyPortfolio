import React, {forwardRef} from 'react';
import Skill from "./Skill/Skill";
import './Skills.css'

import reactIcon from "../../logo.svg"
import htmlIcon from "../../Assets/Skills/html.png"
import cssIcon from "../../Assets/Skills/css-3.png"
import jsIcon from "../../Assets/Skills/js.png"
import javaIcon from "../../Assets/Skills/java.png"
import unityIcon from "../../Assets/Skills/unity.png"
import cshIcon from "../../Assets/Skills/c-sharp.png"
import cppIcon from "../../Assets/Skills/c-.png"
import figmaIcon from "../../Assets/Skills/figma.png"
import sqlIcon from "../../Assets/Skills/sql-server.png"
import AnimatedText from "../AnimatedText";

const SkillsData=[
    {
        title: "ReactJS",
        icon: reactIcon
    },
    {
        title: "HTML5",
        icon: htmlIcon
    },
    {
        title: "CSS",
        icon: cssIcon
    },
    {
        title: "JS",
        icon: jsIcon
    },
    {
        title: "Java",
        icon: javaIcon
    },
    {
        title: "Unity",
        icon: unityIcon
    },
    {
        title: "C#",
        icon: cshIcon
    },
    {
        title: "C++",
        icon: cppIcon
    },
    {
        title: "Figma",
        icon: figmaIcon
    },
    {
        title: "SQL",
        icon: sqlIcon
    },

]


const Skills = forwardRef ((props, ref) => {
    return (
        <div ref={ref} className={"Skills"}>
            <h1><AnimatedText text={"SKILLS"} /></h1>
            <div className={"SkillsContainer"}>
                {SkillsData.map((skill)=>(
                    <Skill title={skill.title} icon={skill.icon} />
                ))}
            </div>
        </div>
    );
});

export default Skills;