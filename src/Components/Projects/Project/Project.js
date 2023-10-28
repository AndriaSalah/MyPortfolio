import React from 'react';

import './Project.css'
import {motion} from "framer-motion";

const Project = ({wallpaper,icon}) => {
    const wallpaperAnimation = {
        initial:{
            width: "40rem"
        },
        hover:{
            width:"50rem",
            filter:"brightness(1)"
        }
    }
    const iconAnimation = {
        hover:{
            y:"220%"
        }
    }
    return (
        <motion.div initial="initial" whileHover="hover" className={"Project"}>
            <motion.div className={"wallpaper"}><motion.img variants={wallpaperAnimation}  src={wallpaper} alt={"ecommerce"}/></motion.div>
            <motion.div variants={iconAnimation} className={"icon"}><img src={icon} alt={"icon"}/></motion.div>
        </motion.div>

    );
};

export default Project;