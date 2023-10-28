import React from 'react';
import './Navbar.css'
const Navbar = (refProp) => {
    const scrollToProjects =()=> refProp.projRef.current.scrollIntoView()
    const scrollToContact =()=> refProp.contRef.current.scrollIntoView()

    console.log(refProp.projRef)
    return (
        <nav className={"NavBarContainer"}>
            <ul className={"NavBar"}>
                <li>
                    <button className={"link"}>About me</button>
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