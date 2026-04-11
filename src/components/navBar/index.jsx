import React, { useState } from "react";
import { FaBars, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { navLinks } from "../../data/navLinks";
import './styles.scss';

const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={"/portfolio/home"} className="navbar__container__logo" aria-label="Home">
                        <FaShieldAlt size={30} aria-hidden />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                    {navLinks.map((item, key) => (
                        <li key={key} className="navbar__container__menu__item">
                            <Link
                                className="navbar__container__menu__item__links"
                                to={item.to}
                                onClick={handleToggleIcon}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
