import React from 'react';
import './Navbar.css'
const Navbar = (refProps) => {
    const scrollToProjects =()=> refProps.projRef.current.scrollIntoView()
    const scrollToContact =()=> refProps.contRef.current.scrollIntoView()
    const scrollToAbout =()=> refProps.aboutRef.current.scrollIntoView()

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
                    <button onClick={scrollToContact} className={"link"}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;