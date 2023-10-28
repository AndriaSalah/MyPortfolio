import React, {forwardRef} from 'react';
import './Contact.css'
import AnimatedText from "../AnimatedText";
import linkedIn from '../../Assets/Contact/linkedin.png'
import facebook from '../../Assets/Contact/facebook.png'
import discord from '../../Assets/Contact/discord.png'
import github from '../../Assets/Contact/github.png'
import mail from '../../Assets/Contact/email.png'
import {motion, useInView} from "framer-motion";

const Contact = forwardRef ((props, MainContainer) => {

    const icon1Animation={
        initial:{
            opacity:0,
            x:150,

        },
        animate:{
            opacity: 1,
            x:0,
            transition:{
                type:"spring",
                mass:1.3
            }
        }
    }
    const icon2Animation={
        initial:{
            opacity:0,
            y:-150
        },
        animate:{
            opacity: 1,
            y:0,
            transition:{
                type:"spring",
                mass:1.3
            }
        }
    }
    const icon3Animation={
        initial:{
            opacity:0,
            x:-150,

        },
        animate:{
            opacity: 1,
            x:0,
            transition:{
                type:"spring",
                mass:1.3
            }
        }
    }
    const icon4Animation={
        initial:{
            opacity:0,
            y:150
        },
        animate:{
            opacity: 1,
            y:0,
            transition:{
                type:"spring",
                mass:1.3
            }
        }
    }
    const icon5Animation={
        initial:{
            opacity:0,
            rotate:180,
            // scale: 0
        },
        animate:{
            opacity: 1,
            rotate: 0,
            // scale:1,
            transition:{
                type:"spring",
                mass:1.3
            }
        },
        hover:{
            scale:1.2
        }
    }
    const testAnimation={
        initial:{
            x:"50%",
        },
        animate:{
           x:0,
            transition:{
              type:"spring",
               delay:3.5
            }
        }
    }


    const inView = useInView(MainContainer, {amount: 0.7, once: true})
    return (
        <div ref={MainContainer} className={"Contact"}>
            {/*<h1><AnimatedText text={"Contact"}/></h1>*/}
            <div className={"ContactWrapper"}>
                <motion.div className={"text"} initial={testAnimation.initial} animate={inView? testAnimation.animate: testAnimation.initial} >
                    <div>
                        <h3><AnimatedText text={"Got a design in mind ?"}/></h3>
                        <AnimatedText delay={1.5} className={"extra"} text={"Hit me up and let's build it together !"}/>
                    </div>
                </motion.div>
                <motion.div initial={"initial"} animate={ inView?"animate":"initial"} transition={{delayChildren:3.5,staggerChildren:0.3}}  className="Links">
                    <motion.div variants={icon1Animation} whileHover={{scale:1.2}} className="div1">
                        <a href={"https://www.linkedin.com/in/andria-salah-2a4133183/"} target="_blank" rel="noreferrer noopener" ><img src={linkedIn} alt={""}/></a>
                    </motion.div>
                    <motion.div variants={icon2Animation} whileHover={{scale:1.2}} className="div2">
                       <a href={"https://www.facebook.com/andria.salah"} target="_blank" rel="noreferrer noopener" ><img src={facebook} alt={""}/></a>
                    </motion.div>
                    <motion.div variants={icon3Animation} whileHover={{scale:1.2}} className="div3">
                        <a href={"https://discordapp.com/users/304239529391423488"} target="_blank" rel="noreferrer noopener" ><img src={discord} alt={""}/></a>
                    </motion.div>
                    <motion.div variants={icon4Animation} whileHover={{scale:1.2}} className="div4">
                        <a href={"https://github.com/AndriaSalah"} target="_blank" rel="noreferrer noopener" ><img src={github} alt={""}/></a>
                    </motion.div>
                    <motion.div variants={icon5Animation} whileHover={{scale:1.2}} className="div5">
                        <a href={"mailto: andriasalah.r@hotomail.com"} target="_blank" rel="noreferrer noopener" ><img src={mail} alt={""}/></a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
});


export default Contact;