import styled from "styled-components";
//import { Link as LinkScroll} from "react-scroll";
import { NavHashLink as LinkRouter} from "react-router-hash-link";
import { RiMenu3Line } from 'react-icons/ri';

export const Nav = styled.nav`
    height: 75px;
    position: sticky;
    top: 0;
    z-index: 999;
    margin-top: -75px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    background: ${(props) => props.theme.nav};
    @media screen and (max-width: 768px){
        position: fixed;
        height: 55px;
        left: 0;
        bottom: 0;
        z-index: 5;
        margin-top: 0;
        top: unset;
        background: none;
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
    animation: slide-logo .4s forwards 5.6s ease-in-out;
    @keyframes slide-logo{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @media screen and (max-width: 768px) {
        display: none
    }
`;
export const Logo = styled(LinkRouter)`
    align-content: center;
    justify-content: center;
    color: ${(props) => props.theme.accentColor};
    box-shadow: 0 0 0 0 #F9FF56;
    cursor: pointer;
    margin-right: auto;
`;

export const MobileMenu = styled.ul`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        list-style: none;
        width: 100%;
        font-size: 32px;
        vertical-align: middle;
        margin-bottom: 50px;
    }
`;
export const Bars = styled(RiMenu3Line)`
    margin: 0 auto;
    cursor: pointer;
    opacity: 0;
    font-size: 32px;
    animation: slide-logo .4s forwards 5.6s ease-in-out;
    @keyframes slide-logo{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    &:hover{ 
        color: ${(props) => props.theme.accentColor};
        transform: scale(1.1);
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
    opacity: 0;
    padding: 0 1rem;

    @media screen and (max-width: 768px) {
        height: 48px;
        width: 48px;
        margin: 0;
        margin-top: auto;
        padding: 0.25rem 0.25rem;
        background: ${(props) => props.theme.body};
        border-radius: 50% 50%;
        box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.62);
    }
    &:nth-of-type(1){
        animation: slide-menu-items .4s forwards 5.2s ease-in-out
    }
    &:nth-of-type(2){
        animation: slide-menu-items .4s forwards 5.4s ease-in-out
    }
    &:nth-of-type(3){
        animation: slide-menu-items .4s forwards 5.6s ease-in-out
    }
    &:nth-of-type(4){
        animation: slide-menu-items .4s forwards 5.8s ease-in-out
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
    justify-content: center;
    height: 100%;
    cursor: pointer;
    text-align: center;
    padding: 0 1rem;
  
    @media screen and (max-width: 768px) {
        padding: 0;
        font-size: 30px;
        &:hover{ 
        transform: scale(1.1);
    }
    }
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
    animation: slide-menu-items .4s forwards 6s ease-in-out;

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