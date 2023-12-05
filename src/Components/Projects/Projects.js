import React, {forwardRef, useContext} from 'react';
import './Projects.css'
import Project from "./Project/Project";
import {useScroll, useTransform,motion} from "framer-motion";

import icon from "../../logo.svg";
import Ecommerce from '../../Assets/Projects/Ecom.webp'
import EcommerceIcon from '../../Assets/Projects/EcommerceIcon.svg'
import MusicPlayer from '../../Assets/Projects/MusicPlayer.webp'
import Todo from '../../Assets/Projects/todo.webp'
import ludosIcon from '../../Assets/Projects/LudosIcon.png'
import ludosWallpaper from '../../Assets/Projects/LudosWallpaper.webp'
import WeatherIcon from '../../Assets/Projects/WeatherIcon.svg'
import WeatherWallpaper from '../../Assets/Projects/Weather.webp'
import AnimatedText from "../AnimatedText";
import {IsMobileContext} from "../../App";

const Projects = forwardRef( (props,ContainerRef) => {
    const ProjectsData =[
        {
            Wallpaper:WeatherWallpaper,
            Icon:WeatherIcon,
            link:"https://andrias-weather.vercel.app"
        },
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
    const isMobile=useContext(IsMobileContext)
    const {scrollYProgress} = useScroll({
        target:ContainerRef,
        offset:["start start" ,"end"]
    })
    const ScrollX = useTransform(scrollYProgress,[0,1],["5%","-55%"])
    return (
        <div ref={ContainerRef} className={"Projects-container"}>
            <div className={"ghost"}>
                <h1><AnimatedText text={"PROJECTS"} /></h1>
                <motion.div className={"Projects-wrapper"} style={{x: isMobile? 0:ScrollX}}>
                    {ProjectsData.map((project,index)=>(
                       [<a href={project.link} key={index} target="_blank" rel="noreferrer noopener"><Project wallpaper={project.Wallpaper} icon={project.Icon}/></a>]
                    ))}
                </motion.div>
            </div>
        </div>
    );
});

export default Projects;