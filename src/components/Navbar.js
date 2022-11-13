import React, { useState } from "react";
import "./Navbar.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}

                <div className="logo" >
                    <h2>
                        <span>E</span>MID
                        <span>S</span>core
                    </h2>
                </div>


                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <a href="/" style={{ textDecoration: "none" }}>
                            <li>
                                Home
                            </li></a>

                        <a href="/form" style={{ textDecoration: "none" }}>
                            <li>
                                Check Score
                            </li></a>

                    </ul>
                </div>

                <div className="social-media">

                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu style={{ userSelect: "none" }} />
                        </a>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;