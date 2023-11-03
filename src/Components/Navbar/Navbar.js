import React from 'react';
import cv from '../../Assets/AndriaSalahRoushdy.pdf'
import './Navbar.css'
import {PiFilePdfFill} from "react-icons/pi";
const Navbar = (refProps) => {
    const scrollToProjects =()=> refProps.projRef.current.scrollIntoView({block:"end"})
    const scrollToContact =()=> refProps.contRef.current.scrollIntoView()
    const scrollToAbout =()=> refProps.aboutRef.current.scrollIntoView()
    const scrollToSkills =()=> refProps.skillsRef.current.scrollIntoView({block:"center"})

    console.log(refProps.projRef)
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