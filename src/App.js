import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import {useRef} from "react";
import {useScroll} from "framer-motion";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";

function App() {
    const MainContainerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: MainContainerRef,
        offset: ["start", "end start"]
    })
  return (
    <div className="App" ref={MainContainerRef}>
        <Navbar/>
        <Section1 Y_progress={scrollYProgress}/>
        <Section2 Y_progress={scrollYProgress}/>
        <Section3 Y_progress={scrollYProgress}/>
        <Section4/>
    </div>
  );
}

export default App;
