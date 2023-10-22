import React, {useRef} from 'react';
import './Section4.css'
import {useScroll, useTransform} from "framer-motion";
import myPhoto from '../../Assets/Andar_Poly.webp';
import AnimatedText from "../AnimatedText";
import {motion} from "framer-motion";

const Section4 = () => {

    const TargetRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: TargetRef,
        offset: ["start end", "end"]
    })


    function printY(){
        console.log(scrollYProgress.current)
    }
    const story__P1__Opacity = useTransform(scrollYProgress, [0, 0.3,0.4], [0, 1,0])
    const story__P2__Opacity = useTransform(scrollYProgress, [0.4,0.65,0.7], [0, 1,0])
    const story__P3__Opacity = useTransform(scrollYProgress, [0.7,0.9,0.95], [0, 1,0])
    const story__P4__Opacity = useTransform(scrollYProgress, [0.95,1], [0, 1])
    const imgY = useTransform(scrollYProgress,[0.3,0.55,0.85,1],[350,1000,2100,2400])
    const story__P1__imgScale = useTransform(scrollYProgress,
        [0.11,0.14,0.22,0.3,0.35,0.45,0.58,0.62,0.69,0.73,0.84,0.85,0.87],
        [0,0.3,0.6,1,1,0,0,1,1,0,0,0.5,1])
    return (
        <div className={"Section4"} ref={TargetRef}>
            <button onClick={printY}>print y</button>
            <div className={"IntroStory"}>
                <div className={"parts"}>
                    <AnimatedText
                        text={`Since childhood, I've been intrigued by programming and technology. Despite initially pursuing a different path in medical school, my heart has always been drawn to coding.`}
                        style={{opacity: story__P1__Opacity}}
                        Stagger={0.02}
                    />
                </div>
                <div className={"parts"}>
                    <AnimatedText
                        text={"Not so long after i joined a computer science university Web development was always so puzzling for me but after working with it for some time now, Web development suddenly transformed into an engaging and creative process. "}
                        style={{opacity: story__P2__Opacity}}
                        Stagger={0.02}
                    />
                </div>
                <div className={"parts"}>
                    <AnimatedText
                        text={"The more I learned, the more I fell in love with it. Now, as a fresh computer science graduate, I channel that passion into crafting visually stunning and user-friendly websites."}
                        style={{opacity: story__P3__Opacity}}
                        Stagger={0.02}
                    />
                </div>
                <div className={"parts"}>
                    <AnimatedText
                        text={"My unique journey from medicine to web development gives me a fresh perspective and a drive to create memorable digital experiences."}
                        style={{opacity: story__P4__Opacity}}
                        Stagger={0.02}
                    />
                </div>

                <motion.img src={myPhoto} alt={"my photo"}
                            style={{y:imgY,scale:story__P1__imgScale}}

                />
            </div>

        </div>
    )
        ;
};

export default Section4;