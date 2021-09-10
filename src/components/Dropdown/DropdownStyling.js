import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkScroll} from "react-scroll";

export const DropdownContainer = styled.aside`
    position: fixed;
    z-index: 999;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.body};
    transition: .4s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    
`
export const CloseIcon = styled(FaTimes)`
    &:hover{
        color: ${(props) => props.theme.accentColor};
    }
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`
export const Wrapper = styled.div`

`
export const Menu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 414px){
        grid-template-rows: repeat(6, 60px);
    }

`
export const MenuLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    transition: .2s ease-in-out;
    cursor: pointer;

    &:hover{
        color: ${(props) => props.theme.accentColor};
    }
`
export const BtnWrapp = styled.div`
    display: flex;
    justify-content: center;
`
export const Btn = styled.div`

`

export const NavBtn = styled.nav`
    display: flex;
    justify-content: center;
    align-content: center;
    border: 2px solid ${(props) => props.theme.accentColor};
    border-radius: 4px;
    margin: 0 auto;
    max-width: 20%;
`;
export const NavBtnLink = styled.a`
    display: flex;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    background: none;
    width: 100%;
    color: ${(props) => props.theme.accentColor};
    padding: 12px 12px;
`;