import React, {useState, useEffect} from 'react'
import { AiOutlineDownload as Download} from "react-icons/ai";
//import {animateScroll as scroll} from 'react-scroll';
import Img from '../../images/logo.png';
import PDF from "../../images/resume.pdf";
import { 
    Nav,
    NavContainer,
    NavLogo,
    Logo,
    Icon,
    MobileMenu,
    Bars,
    NavItem,
    NavLink, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from './NavbarStyling';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 75) {
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    };

    /*const toggleHome = () => {
        
        window.location.reload(false);
    };*/

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
    
    return (
        <>
           <Nav scrollNav={scrollNav}>
               <NavContainer>
                    <NavLogo>
                        <Logo 
                            //onClick={toggleHome}
                            to="/#home"
                            smooth={true} 
                            duration={700} 
                            spy={true} 
                            exact='true' 
                            offset={-75}
                            tabIndex="1">  
                            <Icon src={Img} alt="Logo"/>
                        </Logo>
                    </NavLogo>
                    <MobileMenu onClick={toggle}>
                        <Bars />
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
                                tabIndex="1">   
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
