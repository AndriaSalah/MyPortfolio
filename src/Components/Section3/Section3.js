import React from 'react';
import "./Section3.css"
import AnimatedText from "../AnimatedText";
import {useTransform,motion} from "framer-motion";

const Section3 = ({Y_progress}) => {
    const opacity = useTransform(Y_progress, [0.19,0.31], [1, 0 ])
    return (
        <div className={"Section3"}>
            <motion.div style={{opacity:opacity}} className={"TextContainer"}>
                <AnimatedText text={"let’s start with a brief introduction about me."} Stagger={0.03}/>
            </motion.div>
        </div>
    );
};

export default Section3;