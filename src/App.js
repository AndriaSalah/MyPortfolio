import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import React, {createContext, useRef} from "react";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import {motion, useScroll, useTransform} from "framer-motion";
import {IoIosArrowUp} from "react-icons/io";
import cv from "./Assets/AndriaSalahRoushdy.pdf";
import {PiFilePdfFill} from "react-icons/pi";
export const IsMobileContext = createContext({})
function App() {

    const isMobile = window.innerWidth < 768

    const ProjectsRef = useRef(null)
    const ContactRef = useRef(null)
    const aboutRef = useRef(null)
    const welcomeRef = useRef(null)
    const SkillRef = useRef(null)
    const MoveToTop = () => welcomeRef.current.scrollIntoView()
    const MainContainerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: MainContainerRef,
        offset: ["start", "end start"]
    })
    const ButtonOpacity = useTransform(scrollYProgress, [0.2, 0.23], [0, 1])
    // const ButtonEnabled=useTransform(scrollYProgress,[0.2,0.3],["none","block"])
    console.log(isMobile)
    return (
        <div ref={MainContainerRef} className="App">
            <div style={{position: "absolute", top:0, left:0, width:"100%", height:"100%", pointerEvents:"none"}}></div>
            <Navbar skillsRef={SkillRef} aboutRef={aboutRef} projRef={ProjectsRef} contRef={ContactRef}/>
            <a className={"link cv"} download={"Andria_Salah_Roushdy.pdf"} href={cv} >CV <PiFilePdfFill/></a>
            <IsMobileContext.Provider value={isMobile}>
                <Welcome ref={welcomeRef}/>
                <Intro ref={aboutRef}/>
                <Projects ref={ProjectsRef}/>
                <Skills ref={SkillRef}/>
                <Contact ref={ContactRef}/>
                <motion.button className={"GoTop"} onClick={MoveToTop} style={{opacity: ButtonOpacity}}><IoIosArrowUp/>
                </motion.button>
            </IsMobileContext.Provider>
        </div>
    );
}

export default App;
