import React, {forwardRef, useContext} from 'react';
import './Contact.css'
import AnimatedText from "../AnimatedText";
import linkedIn from '../../Assets/Contact/linkedin.png'
import facebook from '../../Assets/Contact/facebook.png'
import discord from '../../Assets/Contact/discord.png'
import github from '../../Assets/Contact/github.png'
import mail from '../../Assets/Contact/email.png'
import {motion, useInView} from "framer-motion";
import {IsMobileContext} from "../../App";
import AppLink from "../AppLink";

const Contact = forwardRef((props, MainContainer) => {
    const isMobile = useContext(IsMobileContext)
    const Icons_animation = {
        Icon1: {
            initial: {
                opacity: 0,
                x: 150,

            },
            animate: {
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    mass: 1.3
                }
            }
        },
        Icon2: {
            initial: {
                opacity: 0,
                y: -150
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    mass: 1.3
                }
            }
        },
        Icon3: {
            initial: {
                opacity: 0,
                x: -150,

            },
            animate: {
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    mass: 1.3
                }
            }
        },
        Icon4: {
            initial: {
                opacity: 0,
                y: 150
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    mass: 1.3
                }
            }
        },
        Icon5: {
            initial: {
                opacity: 0,
                rotate: 180,
                // scale: 0
            },
            animate: {
                opacity: 1,
                rotate: 0,
                // scale:1,
                transition: {
                    type: "spring",
                    mass: 1.3
                }
            },
        }
    }
    const Contact_Text_animation = {

        initial: {
            x: isMobile ? "0" : "45%",
            y: isMobile ? "20vh" : "0"
        },
        animate: {
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                delay: 3.5
            }
        }
    }


    const inView = useInView(MainContainer, {amount: 0.7, once: true})
    return (
        <div ref={MainContainer} className={"Contact"}>
            <div className={"ContactWrapper"}>
                <motion.div className={"text"} initial={"initial"} animate={inView ? "animate" : "initial"}
                            variants={Contact_Text_animation}>
                    <div>
                        <h3><AnimatedText text={"Got a design in mind ?"}/></h3>
                        <AnimatedText delay={1.5} className={"extra"} text={"Hit me up and let's build it together !"}/>
                    </div>
                </motion.div>
                <motion.div initial={"initial"} animate={inView ? "animate" : "initial"}
                            transition={{delayChildren: isMobile ? 4 : 3.5, staggerChildren: 0.3}} className="Links">
                    <motion.div variants={Icons_animation.Icon1} whileHover={{scale: 1.2}} className="div1">
                        <AppLink appLink={ "linkedin://profile/andria-salah-2a4133183"} webLink={"https://www.linkedin.com/in/andria-salah-2a4133183/"}>
                            <img src={linkedIn} alt={""}/></AppLink>
                    </motion.div>
                    <motion.div variants={Icons_animation.Icon2} whileHover={{scale: 1.2}} className="div2">
                        <AppLink appLink={"fb://profile/andria.salah"} webLink={"https://www.facebook.com/andria.salah"}>
                            <img src={facebook} alt={""}/></AppLink>
                    </motion.div>
                    <motion.div variants={Icons_animation.Icon3} whileHover={{scale: 1.2}} className="div3">
                        <a href={"https://discordapp.com/users/304239529391423488"} target="_blank"
                           rel="noreferrer noopener"><img src={discord} alt={""}/></a>
                    </motion.div>
                    <motion.div variants={Icons_animation.Icon4} whileHover={{scale: 1.2}} className="div4">
                        <a href={"https://github.com/AndriaSalah"} target="_blank" rel="noreferrer noopener"><img
                            src={github} alt={""}/></a>
                    </motion.div>
                    <motion.div variants={Icons_animation.Icon5} whileHover={{scale: 1.2}} className="div5">
                        <a href={"mailto: andriasalah.r@hotomail.com"} target="_blank" rel="noreferrer noopener"><img
                            src={mail} alt={""}/></a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
});


export default Contact;