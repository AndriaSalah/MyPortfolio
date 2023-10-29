import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import {useRef} from "react";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";



function App() {
    const ProjectsRef = useRef(null)
    const ContactRef = useRef(null)
    return (
        <div className="App" >
            <Navbar  projRef={ProjectsRef} contRef={ContactRef}/>
            <Welcome/>
            <Intro/>
            <Projects ref={ProjectsRef}/>
            <Skills/>
            <Contact ref={ContactRef}/>
        </div>
    );
}

export default App;
