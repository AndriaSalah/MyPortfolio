import React, {forwardRef} from 'react';
import './Projects.css'
import Project from "./Project/Project";
import {useScroll, useTransform,motion} from "framer-motion";

import icon from "../../logo.svg";
import Ecommerce from '../../Assets/Projects/Ecom.png'
import EcommerceIcon from '../../Assets/Projects/EcommerceIcon.svg'
import MusicPlayer from '../../Assets/Projects/M.png'
import Todo from '../../Assets/Projects/todo.png'
import ludosIcon from '../../Assets/Projects/ludosIcon.png'
import ludosWallpaper from '../../Assets/Projects/LudosWallpaper1.png'
import AnimatedText from "../AnimatedText";
const ProjectsData =[
    {
        Wallpaper:Ecommerce,
        Icon:EcommerceIcon,
        link:"https://andrias-ecom.vercel.app"
    },
    {
        Wallpaper:MusicPlayer,
        Icon:icon,
        link:"https://andrias-music.vercel.app"
    },
    {
        Wallpaper:ludosWallpaper,
        Icon:ludosIcon,
        link:"https://github.com/LUDOOS/Ludos"
    },
    {
        Wallpaper:Todo,
        Icon:icon,
        link:"https://andrias-expense-tracker.vercel.app"
    },

]
const Projects = forwardRef( (props,ContainerRef) => {
    // const ContainerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ContainerRef,
        offset:["start start" ,"end"]
    })
    console.log(scrollYProgress.current)
    const ScrollX = useTransform(scrollYProgress,[0,1],["5%","-60%"])
    return (
        <div ref={ContainerRef} className={"Projects-container"}>
            <div className={"ghost"}>
                <h1><AnimatedText text={"PROJECTS"} /></h1>
                <motion.div className={"Projects-wrapper"} style={{x:ScrollX}}>
                    {ProjectsData.map((project)=>(
                       [<a href={project.link} target="_blank" rel="noreferrer noopener"><Project wallpaper={project.Wallpaper} icon={project.Icon}/></a>]
                    ))}
                </motion.div>
            </div>
        </div>
    );
});

export default Projects;