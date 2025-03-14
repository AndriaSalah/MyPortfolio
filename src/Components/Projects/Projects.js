import React, {forwardRef, useContext} from 'react';
import './Projects.css'
import Project from "./Project/Project";
import {useScroll, useTransform,motion} from "framer-motion";

import icon from "../../logo.svg";
import Ecommerce from '../../Assets/Projects/Ecom.webp'
import EcommerceIcon from '../../Assets/Projects/EcommerceIcon.svg'
import MusicPlayer from '../../Assets/Projects/MusicPlayer.webp'
import Todo from '../../Assets/Projects/todo.webp'
import ludosIcon from '../../Assets/Projects/Ludos.svg'
import ludosWallpaper from '../../Assets/Projects/LudosWallpaper.webp'
import WeatherIcon from '../../Assets/Projects/WeatherIcon.svg'
import WeatherWallpaper from '../../Assets/Projects/Weather.webp'
import fluentIcon from '../../Assets/Projects/Fluent-weather-icon.png'
import fluentWall from '../../Assets/Projects/Fluent-weather-wall.webp'
import eventecIcon from '../../Assets/Projects/eventecIcon.png'
import eventecWallpaper from '../../Assets/Projects/eventecWallpaper.webp'
import finansakWallpaper from '../../Assets/Projects/finansakWallpaper.webp'
import finansakIcon from '../../Assets/Projects/finansakIcon.svg'
import thecoinsappWallpaper from '../../Assets/Projects/thecoinsappWallpaper.webp'
import thecoinsappIcon from '../../Assets/Projects/thecoinsappIcon.png'

import AnimatedText from "../AnimatedText";
import {IsMobileContext} from "../../App";

const Projects = forwardRef( (props,ContainerRef) => {
    const ProjectsData =[
        {
            Wallpaper:thecoinsappWallpaper,
            Icon:thecoinsappIcon,
            link:"https://thecoins.app",
            full: true
        },
        {
            Wallpaper:finansakWallpaper,
            Icon:finansakIcon,
            link:"https://finansak.com",
            full: true
        },
        {
            Wallpaper:eventecWallpaper,
            Icon:eventecIcon,
            link:"https://andrias-eventec.vercel.app/",
            full: true
        },
        {
            Wallpaper:fluentWall,
            Icon:fluentIcon,
            link:"https://Fluent-weather.vercel.app",
            full:true
        },
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
    const ScrollX = useTransform(scrollYProgress,[0,1],["5%","-75%"])
    return (
        <div ref={ContainerRef} className={"Projects-container"}>
            <div className={"ghost"}>
                <h1><AnimatedText text={"PROJECTS"} /></h1>
                <motion.div className={"Projects-wrapper"} style={{x: isMobile? 0:ScrollX}}>
                    {ProjectsData.map((project,index)=>(
                       [<a href={project.link} key={index} target="_blank" rel="noreferrer noopener"><Project wallpaper={project.Wallpaper} icon={project.Icon} full={project.full}/></a>]
                    ))}
                </motion.div>
            </div>
        </div>
    );
});

export default Projects;