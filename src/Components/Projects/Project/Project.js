import React from 'react';

import './Project.css'
import {motion} from "framer-motion";

const Project = ({wallpaper,icon}) => {
    const wallpaperAnimation = {
        initial:{
            width: "32vw"
        },
        hover:{
            width:"36vw",
            filter:"brightness(1)"
        }
    }
    const iconAnimation = {
        hover:{
            y:"6vh"
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