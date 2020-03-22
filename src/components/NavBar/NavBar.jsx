import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import NavBarModal from './NavBarModal';

/**
 * A navigation bar for the wesite.
 * @param {String} props.current The current location name the user is navigating through.
 * @version 1.1
 * @author [David Klein, Polarts](https://github.com/Polarts)
 */
const NavBar = (props) =>  {

    const [isSocialOpen, setSocialOpen] = useState(false);

    const toggleSocialOpen = () => setSocialOpen(!isSocialOpen);
    
    return (
        <nav>
            <a id="homeNav" 
                href="#home">
                <span>
                    Home
                </span>
            </a>
            
            <a id="aboutNav" 
                className={styles.aboutNav}
                href="#about">
                <span>
                    About Us
                </span>
            </a>

            <a id="contactNav" 
                href="#contact">
                <span>
                    Contact
                </span>
            </a>

            <a id="teamNav"
                className={styles.teamNav}
                href="#team">
                <span>
                    Our Team
                </span>
            </a>

            <img className={styles.socialButton} 
                 src={require('../../img/social-icon.png')} 
                 alt="Social"
                 onClick={toggleSocialOpen}/>

            <div className={styles.externalLinks} style={isSocialOpen? {display: 'flex'} : null}>
                <a href="https://www.facebook.com/groups/haifadev/" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook"/>
                </a>
                <a href="https://chat.whatsapp.com/G26LTepUrpT2W3GS26mpoo" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Whatsapp_logo_svg.png" alt="WhatsApp"/>
                </a>
                <a href="https://www.meetup.com/Haifa-dev" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Meetup_Logo.png/626px-Meetup_Logo.png" alt="Meetup"/>
                </a>
            </div>
            
            <NavBarModal open={isSocialOpen} onClose={toggleSocialOpen} />
        </nav>
    ); 
}

export default NavBar;