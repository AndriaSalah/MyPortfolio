import React from 'react';
import cv from '../../Assets/AndriaSalahRoushdy.pdf'
import './Navbar.css'
import {FaRegFilePdf} from "react-icons/fa";
const Navbar = (refProps) => {
    const scrollToProjects =()=> refProps.projRef.current.scrollIntoView()
    const scrollToContact =()=> refProps.contRef.current.scrollIntoView()
    const scrollToAbout =()=> refProps.aboutRef.current.scrollIntoView()
    const scrollToSkills =()=> refProps.skillsRef.current.scrollIntoView()

    console.log(refProps.projRef)
    return (
        <nav className={"NavBarContainer"}>
            <ul className={"NavBar"}>
                <li>
                    <button onClick={scrollToAbout} className={"link"}>About me</button>
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
            <a className={"link cv"} target="_blank" rel="noreferrer noopener" href={cv} >CV <FaRegFilePdf/></a>
        </nav>
    );
};

export default Navbar;