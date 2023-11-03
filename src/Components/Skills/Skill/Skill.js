import React, {useContext, useRef} from 'react';
import AnimatedText from "../../AnimatedText";
import './Skill.css'
import {motion, useInView} from "framer-motion";
import {IsMobileContext} from "../../../App";

const Skill = ({title, icon}) => {

    const isMobile = useContext(IsMobileContext)
    const imgAnimation = {
        hidden: {
            opacity: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {type: "spring", mass: 1.3, delay: 0.35}


        }
    }
    const skillAnimation = {
        hidden: {
            opacity: 0,
            y: 20,

        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.55}
        },
        hover: {
            height: "100%",

        }

    }
    const textAnimation = {
        hidden: {

            opacity: 0,
            transition: {
                duration: 0
            }

        },
        hover: {
            opacity: 1,
            transition: {
                delay: 0.2,
            }
        }
    }

    const skillRef = useRef(null)
    const inView = useInView(skillRef, {amount: 0.8 , once : true})
    return (
        <div className={"ghost"}>
        <motion.div variants={skillAnimation} ref={skillRef} initial={"hidden"} animate={inView ? "animate" : "hidden"}
                    whileHover={isMobile?"":"hover"} className={"Skill"}>

                <motion.div variants={textAnimation}>
                    <AnimatedText text={title} Stagger={0} delay={0.25} once={false} hover={true} move={"up-down"}/>
                </motion.div>
                <motion.img variants={imgAnimation} src={icon} alt={icon}/>
        </motion.div>
        </div>
    );
};

export default Skill;