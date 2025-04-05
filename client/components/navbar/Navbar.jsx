import React, { useEffect, useRef, useState } from 'react';
import mainLogo from "../../assets/logos/logo.png";
import homeLogo from "../../assets/logos/home.svg";
import contactLogo from "../../assets/logos/contact.svg";
import galleryLogo from "../../assets/logos/gallery.svg";
import aboutLogo from "../../assets/logos/about.svg";
import hamLogo from "../../assets/logos/hamburgerMenu.svg"
import searchIcon from "../../assets/logos/search.svg";
import closeIcon from "../../assets/logos/close.svg";
import video from "../../assets/logos/SHUBHAM-unscreen.gif"
import styles from "./navbar.module.css";
// import a href from './a href';
// import { Link } from 'react-router';
// import Info_head from './Info_head';

export default function Navbar() {
    const [hamActive, setHamActive] = useState(false);
    const ref = useRef(null);
    useEffect(()=>{
        const observer = new IntersectionObserver((observers)=>{
            observers.forEach((observe)=>{
                if(observe.isIntersecting){
                    window.addEventListener('click',()=>{
                        setHamActive(false)
                        
                        })
                }

            })

        },[hamActive])
        observer.observe(ref.current)

    
      });
    return (
        <>
    

            <div className={styles.navbar_container}>
                <nav>
                    <div className={styles.logo_section}>
                        <a href="/">
                            <img className={styles.video} src={video} />
                            <img src={mainLogo} style={{ opacity: '0.1' }} alt="shubham party palace waling Bp chowk logo" />
                        </a>

                    </div>
                    <div className={styles.links_section}>
                        <span className={styles.search_container}>
                            <label htmlFor='search_key'>

                                <img src={searchIcon} alt="search_icon" /></label>

                            <input style={{ backgroundColor: "inherit" }} type="text" name="" id="search_key" placeholder='Enter keywords' />
                        </span>
                        <ul className={`${hamActive ? `${styles.blockMenu}` : `${styles.noneMenu}`}`} ref={ref}>              
                         <span className={styles.closeButton_container} onClick={(e) => {setHamActive(false)}}>
                            <img src={closeIcon} alt="close_button" />
                        </span>
                            <hr />
                            <a href imgSrc={homeLogo} name='Home' > Home</a>
                            <a href imgSrc={aboutLogo} name='About' > About</a>
                            <a href imgSrc={galleryLogo} name='Gallery' > Gallery</a>
                            <a href imgSrc={contactLogo} name='Contacts' > Contact</a>
                        </ul>
                    </div>
                    <div className={styles.ham_menu} onClick={(e) => {
                        setHamActive(prev=>!prev)
                        e.stopPropagation(); 
                    }}>
                        <img src={hamLogo} alt="menu" />
                    </div>
                </nav>

            </div>

        </>
    )
}
