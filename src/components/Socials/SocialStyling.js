import styled from "styled-components";
import { ImLinkedin } from "react-icons/im";
import { FaGithubAlt } from "react-icons/fa";
import {RiSunFoggyFill} from "react-icons/ri";

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    padding-left: 2.5%;
    padding-right: 2.5%;
    position: fixed;
    bottom: 0;
    width: 100%;
    @media screen and (max-width: 1040px) {
        width: 20%;
        right: 0;
    }
`
export const Content = styled.div`
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    max-width: 1800px;
    width: 100%;
    z-index: 1;
    opacity: 0;
    animation: fadeinSocial .6s forwards 5.2s ease-in-out;

    @keyframes fadeinSocial{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
    }
`
export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 1040px){
        display: none;
    }
`
export const ModeWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: center;
    width: 100%;
    @media screen and (max-width: 1040px) {
        width: 100%;
    }
`

export const SocialIcons = styled.ul`
    flex-direction: column;
    margin: 0px;
    padding: 0px;
`
export const IconItem = styled.li`
    display: flex;
    margin: 16px auto;
    min-height: 32px;
    &:last-child{
        margin: 0 auto;
        height: 72px;
        @media screen and (max-width: 1040px){
            display: none;
        }
    }
    @media screen and (max-width: 1040px) {
        margin-top: 0;
        padding: 0.3rem 0.3rem;
        background: ${(props) => props.theme.body};
        border-radius: 50% 50%;
        box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.62);
        &:active{
            animation: zoom .6s forwards ease-in-out;
            @keyframes zoom {
                0% {
                    transform: scale(1.3, 1.3);
                }
                100% {
                    transform: scale(0, 0);
                }
            }
        }
    }
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const Icon = styled.a`
    width: 26px;
    cursor: pointer;
    fill: ${(props) => props.theme.fontColor};
    margin: 0 auto;
    &:hover{
        fill: ${(props) => props.theme.accentColor};
        color: ${(props) => props.theme.accentColor};
        transform: scale(1.1);
    }
`
export const Stick = styled.svg`
    width: 32px;
    height: 100%;
    stroke: ${(props) => props.theme.fontColor};
`
export const Github = styled(FaGithubAlt)`
    font-size: 26px;
`
export const LinkedIn = styled(ImLinkedin)`
    font-size: 26px;
`
export const Button = styled.button`
    cursor: pointer;
    color: ${(props) => props.theme.fontColor};
    margin: 0 auto;
    background: none;
    border: none;
    &:hover{
        color: ${(props) => props.theme.accentColor};
        transform: scale(1.1);
    }
    &:active{
        animation: zoom .6s forwards ease-in-out;
        @keyframes zoom {
        0% {
            transform: scale(1.3, 1.3);
        }
        100% {
            transform: scale(0, 0);
        }
    }
    }
`
export const ModeIcon = styled(RiSunFoggyFill)`
    font-size: 32px;
`