import React from 'react'
import { 
    DropdownContainer,
    Icon,
    CloseIcon,
    Wrapper,
    Menu,
    MenuLink,
    NavBtn,
    NavBtnLink
} from './DropdownStyling'
import PDF from "../../images/resume.pdf";

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <Wrapper>
                <Menu>
                    <MenuLink to="home" onClick={toggle}>Home</MenuLink>
                    <MenuLink to="about" onClick={toggle}>About</MenuLink>
                    <MenuLink to="projects" onClick={toggle}>Projects</MenuLink>
                    <MenuLink to="contact" onClick={toggle}>Contact</MenuLink>
                </Menu>
                <NavBtn>
                    <NavBtnLink href={PDF} tabIndex="1" target="_blank" rel="noopener noreferrer">Resume</NavBtnLink>
                </NavBtn>
            </Wrapper>
        </DropdownContainer>
    )
}

export default Dropdown
