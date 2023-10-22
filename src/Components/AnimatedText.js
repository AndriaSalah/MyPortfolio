import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";

const AnimatedText = ({text, style, Stagger= 0.05}) => {

    const DefaultAnimations = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }

    const ref = useRef(null)
    const inView = useInView(ref,{amount:0.7,once : true})
    return (
        <motion.p style={style && {...style}}>
         <motion.span ref={ref} initial={"hidden"} animate={inView ? "visible" : "hidden"} transition={{staggerChildren: Stagger}}>
            {text.split(" ").map((word)=>(
                <span style={{display:"inline-block"}}>
                {word.split('').map((letter,index) => (
                <motion.span style={{display:"inline-block"}} key={index} variants={DefaultAnimations}>{letter}</motion.span>
            ))}
                    <span style={{display:"inline-block"}}>&nbsp;</span>
                </span>
            ))}
         </motion.span>
        </motion.p>
    )
};

export default AnimatedText;