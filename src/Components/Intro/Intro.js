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


    const Intro_Text_animation = useTransform(scrollYProgress, [0,0.1, 0.6], [1, 1, 0])


    const ImgRoll_animation = {
        hidden: {
            x: "70rem",
            rotate: 360,
        },
        visible: {
            x: "-70rem",
            rotate: -360,
            transition: {
                ease: "circInOut",
                repeat: "infinity",
                repeatDelay: 2,
                duration: 6
            }
        }
    };


    return (
        <div ref={MainContainerRef} className={"IntroContainer"}>
            {/*<button onClick={printscroll} style={{position:"sticky" , top:"50%"}}>print scroll pos</button>*/}
            <motion.div  className="Intro" initial="hidden" animate={InView ? "visible" : "hidden"}>
                <motion.div style={{opacity:Intro_Text_animation}} className={"TextContainer"}>
                    <AnimatedText Stagger={0.02}
                                  text={"I'm Andria, a Frontend Developer who's passionate about creating visually stunning and user-friendly websites. I use ReactJS and Framer Motion to deliver fast websites with captivating animations. I'm also eager to learn and dedicate a lot of time to exploring new libraries and technologies."}/>
                </motion.div>
                <motion.div
                    ref={imgRef}
                    className="ImageContainer">
                    <motion.img variants={ImgRoll_animation} src={myPhoto} alt="myPhoto"/>
                </motion.div>
            </motion.div>
        </div>
    );
});

export default Intro;
