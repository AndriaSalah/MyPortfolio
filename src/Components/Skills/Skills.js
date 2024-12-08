import React, {forwardRef} from 'react';
import Skill from "./Skill/Skill";
import './Skills.css'

import reactIcon from "../../logo.svg"
import htmlIcon from "../../Assets/Skills/html.png"
import cssIcon from "../../Assets/Skills/css-3.png"
import jsIcon from "../../Assets/Skills/js.png"
import javaIcon from "../../Assets/Skills/java.png"
import tsIcon from "../../Assets/Skills/typescript.svg"
import nextIcon from "../../Assets/Skills/next-js.svg"
import tailwindIcon from "../../Assets/Skills/tailwindcss.svg"
import reduxIcon from "../../Assets/Skills/redux.svg"
import figmaIcon from "../../Assets/Skills/figma.png"
import sqlIcon from "../../Assets/Skills/sql-server.png"
import AnimatedText from "../AnimatedText";

const SkillsData=[
    {
        title: "ReactJS",
        icon: reactIcon
    },
    {
        title: "Java Script",
        icon: jsIcon
    },
    {
        title: "Type Script",
        icon: tsIcon
    },
    {
        title: "Next.JS",
        icon: nextIcon
    },
    {
        title: "Tailwind",
        icon: tailwindIcon
    },
    {
        title: "Redux TK",
        icon: reduxIcon
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
        title: "Java",
        icon: javaIcon
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
                {SkillsData.map((skill,index)=>(
                    <Skill key={index} title={skill.title} icon={skill.icon} />
                ))}
            </div>
        </div>
    );
});

export default Skills;