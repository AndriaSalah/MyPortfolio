import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className={"NavBarContainer"}>
            <ul className={"NavBar"}>
                <li>
                    <button className={"link"}>About me</button>
                </li>
                <li>
                    <button className={"link"}>Projects</button>
                </li>
                <li>
                    <button className={"link"}>Contact</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;