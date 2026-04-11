import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import { navLinks } from "../../data/navLinks";

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home__shield" aria-hidden>
                <FaShieldAlt />
            </div>
            <div className="home__text-wrapper">
                <h1>Hello, I&apos;m Aditya Sasank Ch</h1>
                <h3>Cyber Defense Analyst | Security Operations </h3>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateY(550px)",
                }}
                end={{
                    transform: "translateX(0px)",
                }}
            >
                <div className="home__contact-me">
                    <div className="home__contact-me__desc">
                        <h2>Can reach out me at</h2>
                    </div>
                    <div className="home__contact-me__whatsapp">
                        <a
                            href="https://wa.me/917659024703?text=Hello%20there!"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp"
                            />
                        </a>
                    </div>
                    <div className="home__contact-me__gmail">
                        <a
                            href="mailto:adithyashashank97@gmail.com?subject=Hello%20there!&body=I%20wanted%20to%20get%20in%20touch%20with%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                                alt="Gmail"
                            />
                        </a>
                    </div>
                </div>
            </Animate>
            <nav className="home__nav" aria-label="Site">
                <ul className="home__nav-list">
                    {navLinks.map((item) => (
                        <li key={item.to}>
                            <Link className="home__nav-link" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
};

export default Home;
