import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import {useRef} from "react";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import {motion, useScroll, useTransform} from "framer-motion";
import {IoIosArrowUp} from "react-icons/io";

function App() {
    const ProjectsRef = useRef(null)
    const ContactRef = useRef(null)
    const aboutRef = useRef(null)
    const welcomeRef = useRef(null)
    const SkillRef = useRef(null)
    const MoveToTop = ()=> welcomeRef.current.scrollIntoView()
    const MainContainerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: MainContainerRef,
        offset: ["start", "end start"]
    })
    const ButtonOpacity=useTransform(scrollYProgress,[0.2,0.23],[0,1])
    // const ButtonEnabled=useTransform(scrollYProgress,[0.2,0.3],["none","block"])
    return (
        <div ref={MainContainerRef} className="App" >
            <motion.button  className={"GoTop"} onClick={MoveToTop} style={{opacity:ButtonOpacity}}><IoIosArrowUp/></motion.button>
            <Navbar skillsRef={SkillRef} aboutRef={aboutRef}  projRef={ProjectsRef} contRef={ContactRef}/>
            <Welcome ref={welcomeRef}/>
            <Intro ref={aboutRef}/>
            <Projects ref={ProjectsRef}/>
            <Skills ref={SkillRef}/>
            <Contact ref={ContactRef}/>
        </div>
    );
}

export default App;
