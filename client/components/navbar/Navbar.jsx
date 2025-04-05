import React, { useEffect, useRef, useState } from 'react';
import mainLogo from "../../assets/logos/logo.png";
import homeLogo from "../../assets/logos/home.svg";
import contactLogo from "../../assets/logos/contact.svg";
import galleryLogo from "../../assets/logos/gallery.svg";
import aboutLogo from "../../assets/logos/about.svg";
import hamLogo from "../../assets/logos/hamburgerMenu.svg";
import searchIcon from "../../assets/logos/search.svg";
import closeIcon from "../../assets/logos/close.svg";
import video from "../../assets/logos/SHUBHAM-unscreen.gif";
import styles from "./navbar.module.css";
import { Link } from 'react-router';

export default function Navbar() {
    const [hamActive, setHamActive] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver((observers) => {
            observers.forEach((observe) => {
                if (observe.isIntersecting) {
                    window.addEventListener('click', () => {
                        setHamActive(false);
                    });
                }
            });
        }, [hamActive]);
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => {
            observer.disconnect();
        };
    }, [hamActive]);

    const navItems = [
        { path: "/", icon: homeLogo, name: "Home" },
        { path: "/about", icon: aboutLogo, name: "About" },
        { path: "/gallery", icon: galleryLogo, name: "Gallery" },
        { path: "/contact", icon: contactLogo, name: "Contact" }
    ];

    return (
        <>
            <div className={styles.navbar_container}>
                <nav>
                    <div className={styles.logo_section}>
                        <Link to="/" className={styles.logo_link}>
                            <img className={styles.video} src={video} alt="Informatics logo" />
                            <img src={mainLogo} style={{ opacity: '0.1' }} alt="Informatics logo" />
                        </Link>
                    </div>
                    
                    <div className={styles.links_section}>
                        <span className={styles.search_container}>
                            <label htmlFor='search_key'>
                                <img src={searchIcon} alt="Search icon" />
                            </label>
                            <input 
                                style={{ backgroundColor: "inherit" }} 
                                type="text" 
                                id="search_key" 
                                placeholder='Enter keywords' 
                            />
                        </span>
                        
                        <ul className={`${hamActive ? styles.blockMenu : styles.noneMenu}`} ref={ref}>
                            <span 
                                className={styles.closeButton_container} 
                                onClick={() => setHamActive(false)}
                                role="button"
                                tabIndex={0}
                                aria-label="Close menu"
                            >
                                <img src={closeIcon} alt="Close menu" />
                            </span>
                            <hr />
                            {navItems.map((item, index) => (
                                <li key={index} className={styles.nav_Li}>
                                    <Link 
                                        to={item.path} 
                                        className={styles.nav_link}
                                        onClick={() => setHamActive(false)}
                                    >
                                        <img src={item.icon} alt={`${item.name} icon`} />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div 
                        className={styles.ham_menu} 
                        onClick={(e) => {
                            setHamActive(prev => !prev);
                            e.stopPropagation();
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label="Toggle menu"
                    >
                        <img src={hamLogo} alt="Menu" />
                    </div>
                </nav>
            </div>
        </>
    );
}