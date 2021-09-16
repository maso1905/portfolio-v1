import React, {useState, useEffect} from 'react'
import { AiOutlineDownload as Download} from "react-icons/ai";
import { ImHome as Home } from 'react-icons/im';
//import {animateScroll as scroll} from 'react-scroll';
import PDF from "../../images/resume.pdf";
import CustomLogo from './CustomLogo';
import { 
    Nav,
    NavContainer,
    NavLogo,
    Logo,
    MobileMenu,
    Bars,
    NavItem,
    NavLink, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from './NavbarStyling';
import { Button, ModeIcon } from "../Socials/SocialStyling";

const Navbar = ({toggle, themeToggler}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 75) {
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    };

    const toggleHome = () => {  
        window.location.reload(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
           <Nav scrollNav={scrollNav}>
               <NavContainer>
                    <NavLogo>
                        <Logo 
                            onClick={toggleHome}
                            to="/"
                            smooth={true} 
                            duration={700} 
                            spy={true} 
                            exact='true' 
                            offset={-75}
                            tabIndex="1"
                            aria-label="Home logo" >  
                            <CustomLogo alt="Home logo" />
                        </Logo>
                    </NavLogo>
                    <MobileMenu>
                        <NavItem>
                            <NavLink 
                                to="/#home"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-75}
                                tabIndex="1"
                                aria-label="Home Mobile">   
                                <Home alt="Home Mobile"/>
                            </NavLink>                        
                        </NavItem>
                        <NavItem>
                            <Bars onClick={toggle} />
                        </NavItem>
                        <NavItem>
                            <Button type="button" onClick={themeToggler} aria-label="Darkmode and Lightmode Toggle" alt="Darkmode and Lightmode Toggle">
                                <ModeIcon alt="Darkmode and Lightmode Toggle"/>
                            </Button>
                        </NavItem>    
                    </MobileMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLink 
                                to="/#home"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-75}
                                tabIndex="1"
                                aria-label="Home Desktop">   
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to="/#about"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-75}
                                tabIndex="1">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to="/#projects"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-75}
                                tabIndex="1">
                                Projects
                            </NavLink>
                        </NavItem>      
                        <NavItem>
                            <NavLink 
                                to="/#contact"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-75}
                                tabIndex="1">
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink tabIndex="1" href={PDF} target="_blank" rel="noopener noreferrer">Resume</NavBtnLink>
                            <Download className="dwnload" />
                        </NavBtn>
                    </NavMenu>
               </NavContainer>
           </Nav>
        </>
    );
}

export default Navbar;
