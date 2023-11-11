import React, {useContext} from 'react';
import './Navbar.css'
import {IsMobileContext} from "../../App";
const Navbar = (refProps) => {
    const isMobile = useContext(IsMobileContext)

    const scrollToProjects =()=> refProps.projRef.current.scrollIntoView({block:isMobile? "end" : "start"})
    const scrollToContact =()=> refProps.contRef.current.scrollIntoView()
    const scrollToAbout =()=> refProps.aboutRef.current.scrollIntoView()
    const scrollToSkills =()=> refProps.skillsRef.current.scrollIntoView({block:"center"})

    return (
        <nav className={"NavBarContainer"}>
            <ul className={"NavBar"}>
                <li>
                    <button onClick={scrollToAbout} className={"link"}>About</button>
                </li>
                <li>
                    <button onClick={scrollToProjects} className={"link"}>Projects</button>
                </li>
                <li>
                    <button onClick={scrollToSkills} className={"link"}>Skills</button>
                </li>
                <li>
                    <button onClick={scrollToContact} className={"link"}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;