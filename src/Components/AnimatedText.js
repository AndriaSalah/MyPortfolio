import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";


const AnimatedText = (
    {
        text,
        style,
        Stagger = 0.05,
        move = "none",
        delay = 0,
        once = true,
        className
    }) => {

    const DefaultAnimations = {
        hidden: {
            opacity: 0,
            y: (move === "down-up" && 30) | (move === "up-down" && -30) | 0
        },
        visible: {
            opacity: 1,
            y: 0,
        },

    }

    const ContainerRef = useRef(null)
    const inView = useInView(ContainerRef, {amount: 0.7, once: once})
    return (
        <motion.p className={className} style={style && {...style}}>
            <motion.span ref={ContainerRef} initial={"hidden"} animate={inView ? "visible" : "hidden"}
                         transition={{delayChildren: delay, staggerChildren: Stagger}}>
                {text.split(" ").map((word) => (
                    <span style={{display: "inline-block"}}>
                    {word.split('').map((letter, index) => (
                        <motion.span style={{display: "inline-block"}} key={index}
                                 variants={DefaultAnimations}>{letter}
                        </motion.span>
                    ))}
                        <span style={{display: "inline-block"}}>&nbsp;</span>
                </span>
                ))}
            </motion.span>
        </motion.p>
    )
};

export default AnimatedText;