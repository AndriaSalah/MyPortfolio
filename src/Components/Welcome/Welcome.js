import React, {forwardRef, useContext} from 'react';
import myPhoto from '../../Assets/Andar_Poly.webp';
import {motion, useScroll, useTransform} from 'framer-motion';
import './Welcome.css';
import AnimatedText from "../AnimatedText";
import {IsMobileContext} from "../../App";

const Welcome = forwardRef ((props, MainContainerRef) => {

    const isMobile = useContext(IsMobileContext)
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


    const Section1_Img_animation={
        desktop: {
            y:useTransform(scrollYProgress,[0,0.38,0.75],["0","129vh","200vh"]) ,
            x:useTransform(scrollYProgress,[0,0.3],["0","85%"]) ,
            opacity: useTransform(scrollYProgress,[0.7,0.87],[1,0])
        },
        mobile:{
            y:useTransform(scrollYProgress,[0],["0"]) ,
            opacity: useTransform(scrollYProgress,[0.7,0.87],[1,0])
        }
    }
    const Section1_Txt_animation={
        desktop:{
            opacity:useTransform(scrollYProgress,[0,0.18],[1,0])
        },
        mobile:{
            opacity:useTransform(scrollYProgress,[0,0.18],[1,0])
        }
    }
    const Section2_Txt_animation={
        desktop:{
            opacity:useTransform(scrollYProgress, [0.34,0.38,0.43,0.5], [0,1,1,0])
        },
        mobile:{
            opacity:useTransform(scrollYProgress, [0.24,0.3,0.4,0.5], [0,1,1,0])
        }
    }
    const Section3_Txt_animation={
        desktop:{
            opacity:useTransform(scrollYProgress, [0.53,0.58,0.65,0.87], [0,1,1,0])
        },
        mobile:{
            opacity:useTransform(scrollYProgress, [0.53,0.65,0.8], [0,1,0])
        }
    }

    // function printscroll(){
    //     console.log(scrollYProgress.current)
    // }

    return (
        <div ref={MainContainerRef} className={"Welcome"}>
            {/*<button onClick={printscroll} style={{position:"sticky" , top:"50%"}}>print scroll pos</button>*/}

            <motion.div className="Section1" initial={"hidden"} animate={"visible"} >
                <motion.div
                    className="ImageContainer"
                    variants={InitialAnimation}>
                    <motion.img  style={isMobile? Section1_Img_animation.mobile : Section1_Img_animation.desktop} variants={ImgAnimation} src={myPhoto} alt="myPhoto"/>
                </motion.div>
                <motion.div className="TextContainer">
                    <AnimatedText text={"Hello, My name is Andria !"}  style={isMobile? Section1_Txt_animation.mobile : Section1_Txt_animation.desktop}/>
                </motion.div>
            </motion.div>
            <div className={"Section2"}>
                <div className={"TextContainer"}>
                    <AnimatedText
                        text={"I'm excited to introduce myself and showcase my work and my passion for Frontend development."}
                        style={isMobile? Section2_Txt_animation.mobile : Section2_Txt_animation.desktop}
                        Stagger={0.03}>
                    </AnimatedText>
                </div>
            </div>
            <div className={"Section3"}>
                <motion.div style={isMobile? Section3_Txt_animation.mobile : Section3_Txt_animation.desktop} className={"TextContainer"}>
                    <AnimatedText text={"let’s start with a brief introduction about me."} Stagger={0.03}/>
                </motion.div>
            </div>
        </div>
    );
});

export default Welcome;
