import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import React, {createContext, useEffect, useRef, useState} from "react";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import {motion, useScroll, useTransform} from "framer-motion";
import {IoIosArrowUp} from "react-icons/io";
import cv from "./Assets/Andria_salah_roushdy_frontend.pdf";
import {PiFilePdfFill} from "react-icons/pi";
export const IsMobileContext = createContext({})
function App() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 786);
        }

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    const ProjectsRef = useRef(null)
    const ContactRef = useRef(null)
    const aboutRef = useRef(null)
    const welcomeRef = useRef(null)
    const SkillRef = useRef(null)

    const MainContainerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: MainContainerRef,
        offset: ["start", "end start"]
    })
    const ButtonOpacity = useTransform(scrollYProgress, [0.2, 0.23], [0, 1])
    const MoveToTop = () => welcomeRef.current.scrollIntoView()

    return (
        <div ref={MainContainerRef} className="App">
            <IsMobileContext.Provider value={isMobile}>
            <Navbar skillsRef={SkillRef} aboutRef={aboutRef} projRef={ProjectsRef} contRef={ContactRef}/>
            <a className={"cv"} download={"Andria_Salah_Roushdy_frontend.pdf"} href={cv} >CV <PiFilePdfFill/></a>
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
