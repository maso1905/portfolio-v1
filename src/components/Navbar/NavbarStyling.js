import styled from "styled-components";
import { Link as LinkScroll} from "react-scroll";
import { NavHashLink as LinkRouter} from "react-router-hash-link";

import { RiMenu3Line } from 'react-icons/ri';

export const Nav = styled.nav`
    height: 75px;
    margin-top: -75px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    background: ${(props) => props.theme.body};
    box-shadow: ${({scrollNav}) => (scrollNav ? '0 6px 2px -2px rgb(16, 15, 41);' : 'transparent')};
    @media screen and (max-width: 768px){
        padding-left: 5%;
        padding-right: 5%;
        height: 55px;
        margin-top: -55px;
    }
`;
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1800px;
    z-index: 1;
`;
export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    opacity: 0;
    animation: slide-logo 1.4s forwards 4.6s ease-in-out;
    @keyframes slide-logo{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;
export const Logo = styled(LinkScroll)`
    height: 32px;
    align-content: center;
    justify-content: center;
    color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 0 0 #F9FF56;
    cursor: pointer;
    margin-right: auto;
`;
export const Icon = styled.img`
    max-width: 32px;
    align-self: center;
`

export const MobileMenu = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 32px;
        &:hover{ color: ${(props) => props.theme.accentColor};}
    }
`;
export const Bars = styled(RiMenu3Line)`
    margin-left: auto;
    cursor: pointer;
    opacity: 0;
    animation: slide-logo .4s forwards 4.6s ease-in-out;
    @keyframes slide-logo{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;
export const NavMenu = styled.ol`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const NavItem = styled.li`
    height: 53px;
    opacity: 0;

    &:nth-of-type(1){
        animation: slide-menu-items .4s forwards 4.6s ease-in-out
    }
    &:nth-of-type(2){
        animation: slide-menu-items .4s forwards 4.8s ease-in-out
    }
    &:nth-of-type(3){
        animation: slide-menu-items .4s forwards 5s ease-in-out
    }
    &:nth-of-type(4){
        animation: slide-menu-items .4s forwards 5.2s ease-in-out
    }
    @keyframes slide-menu-items{
        from{
            transform: translateX(10%);
            opacity: 0;
        }
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
export const NavLink = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-items: space-between;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    /*&.active{
        color: ${(props) => props.theme.accentColor};
        &:first-child{
            border-bottom: none;
        }
    }*/
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    border: 2px solid ${(props) => props.theme.accentColor};
    border-radius: 4px;
    transition: all .4s ease-in-out;
    margin-left: 1rem;
    opacity: 0;
    animation: slide-menu-items .4s forwards 5.4s ease-in-out;

    .dwnload{
        display: none;
        color: ${(props) => props.theme.accentColor};
        width: 24px;
        height: auto;
    }

    &:hover{
        transition: all .4s ease-in-out;
        padding-right: 12px;
        .dwnload{
            display: flex;
            justify-self: flex-end;
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const NavBtnLink = styled.a`
    display: flex;
    justify-self: flex-start;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    background: none;
    width: 100%;
    color: ${(props) => props.theme.accentColor};
    padding: 6px 12px;
`;