import React from 'react';
import myPhoto from '../../Assets/Andar_Poly.webp';
import {motion, useTransform} from 'framer-motion';
import './Section1.css';
import AnimatedText from "../AnimatedText";

const Section1 = ({Y_progress}) => {

    const ImgAnimation = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                duration: 1,
                delay: 2.5
            },
        },
    };
    const InitialAnimation = {
        hidden: {
            width: "35%",
        },
        visible: {
            width: "50%",
            transition: {
                duration: 0.5,
                delay: 2
            }
        }
    }
    console.log(Y_progress.current)
    const moveImgY = useTransform(Y_progress,[0,0.1,0.15,0.2],[0,800,1200,1400])
    const moveImgX = useTransform(Y_progress,[0,0.13],[0,250])
    const opacity0 = useTransform(Y_progress,[0,0.045],[1,0])
    const opacity1 = useTransform(Y_progress,[0.24,0.28],[1,0])
    return (
            <motion.div className="Section1" initial="hidden" animate="visible" >
                <motion.div
                    className="ImageContainer"
                    variants={InitialAnimation}
                >
                    <motion.img  style={{y:moveImgY ,x:moveImgX,opacity:opacity1 }} variants={ImgAnimation} src={myPhoto} alt="myPhoto"/>
                </motion.div>
                <motion.div className="TextContainer">
                    <AnimatedText text={"Hello, My name is Andria !"} style={{opacity:opacity0}}/>
                </motion.div>
            </motion.div>

    );
};

export default Section1;
