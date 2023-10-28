import React, {useRef} from 'react';
import myPhoto from '../../Assets/Andar_Poly.webp';
import {motion, useScroll, useTransform} from 'framer-motion';
import './Welcome.css';
import AnimatedText from "../AnimatedText";

const Welcome = () => {

    const MainContainerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: MainContainerRef,
        offset: ["start", "end start"]
    })

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
    const moveImgY = useTransform(scrollYProgress,[0,0.38,0.75],[0,1200,1900])
    const moveImgX = useTransform(scrollYProgress,[0,0.4],[0,250])
    const opacityTxt_sec1 = useTransform(scrollYProgress,[0,0.18],[1,0])
    const opacityImg_sec1 = useTransform(scrollYProgress,[0.7,0.87],[1,0])

    const opacityTxt_sec2 = useTransform(scrollYProgress, [0.33,0.38,0.5], [0,1,0])
    const opacityTxt_sec3 = useTransform(scrollYProgress, [0.53,0.58,0.65,0.87], [0,1,1,0])

    function printscroll(){
        console.log(scrollYProgress.current)
    }
    return (
        <div ref={MainContainerRef} className={"Welcome"}>
            {/*<button onClick={printscroll} style={{position:"sticky" , top:"50%"}}>print scroll pos</button>*/}
            <motion.div className="Section1" initial="hidden" animate="visible" >
                <motion.div
                    className="ImageContainer"
                    variants={InitialAnimation}>
                    <motion.img  style={{y:moveImgY ,x:moveImgX,opacity:opacityImg_sec1 }} variants={ImgAnimation} src={myPhoto} alt="myPhoto"/>
                </motion.div>
                <motion.div className="TextContainer">
                    <AnimatedText text={"Hello, My name is Andria !"} style={{opacity:opacityTxt_sec1}}/>
                </motion.div>
            </motion.div>
            <div className={"Section2"}>
                <div className={"TextContainer"}>
                    <AnimatedText
                        text={"I'm excited to introduce myself and showcase my work and my passion for Frontend development."}
                        style={{opacity: opacityTxt_sec2}}
                        Stagger={0.03}>
                    </AnimatedText>
                </div>
            </div>
            <div className={"Section3"}>
                <motion.div style={{opacity:opacityTxt_sec3}} className={"TextContainer"}>
                    <AnimatedText text={"let’s start with a brief introduction about me."} Stagger={0.03}/>
                </motion.div>
            </div>
        </div>
    );
};

export default Welcome;
