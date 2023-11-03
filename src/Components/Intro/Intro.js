import React, {forwardRef, useRef} from 'react';
import {motion, useInView, useScroll, useTransform} from 'framer-motion';
import './Intro.css';
import AnimatedText from "../AnimatedText";
import myPhoto from "../../Assets/Andar_Poly.webp";

const Intro = forwardRef ((props, MainContainerRef) => {


    const {scrollYProgress} = useScroll({
        target: MainContainerRef,
        offset: ["start", "end start"]
    })
    const imgRef = useRef(null)
    const InView = useInView(imgRef, {amount: 0.9})


    const opacityImg_sec1 = useTransform(scrollYProgress, [0,0.1, 0.6], [1, 1, 0])


    const roll = {
        initial: {
            x: "70rem",
            rotate: 360
        },
        animate: {
            x: "-70rem",
            rotate: -360,
            transition: {
                ease: "circInOut",
                repeat: "infinity",
                repeatDelay: 2,
                duration: 6
            }
        },
        hidden:{
            scale:0,
        }
    }



    return (
        <div ref={MainContainerRef} className={"IntroContainer"}>
            {/*<button onClick={printscroll} style={{position:"sticky" , top:"50%"}}>print scroll pos</button>*/}
            <motion.div  className="Intro" initial="initial" animate={InView ? "animate" : "hidden"}>
                <motion.div style={{opacity:opacityImg_sec1}} className={"TextContainer"}>
                    <AnimatedText Stagger={0.03}
                                  text={"I'm Andria, a Frontend Developer who's passionate about creating visually stunning and user-friendly websites. I use ReactJS and Framer Motion to deliver fast websites with captivating animations. I'm also eager to learn and dedicate a lot of time to exploring new libraries and technologies."}/>
                </motion.div>
                <motion.div
                    ref={imgRef}
                    className="ImageContainer">
                    <motion.img variants={roll} src={myPhoto} alt="myPhoto"/>
                </motion.div>
            </motion.div>
        </div>
    );
});

export default Intro;
