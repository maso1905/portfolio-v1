import styled from 'styled-components';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { Link as LinkScroll} from "react-scroll";

export const DropdownContainer = styled.aside`
    position: fixed;
    z-index: 999;
    display: grid;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.body};
    transition: .4s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    bottom: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(AiOutlineCloseCircle)`
    text-align: center;
    &:hover{
        color: ${(props) => props.theme.accentColor};
    }
`
export const Icon = styled.div`
    font-size: 40px;
    background: transparent;
    cursor: pointer;
    outline: none;
    position: absolute;
    bottom: 5%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
`
export const Wrapper = styled.div`

`
export const Menu = styled.ul`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 70px);
    text-align: center;
    @media screen and (max-width: 414px){
        grid-template-rows: repeat(5, 60px);
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
    max-width: 100px;
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
    padding: 12px 24px;
`;