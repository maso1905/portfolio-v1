import styled from "styled-components";
import { ImLinkedin } from "react-icons/im";
import { FaGithubAlt } from "react-icons/fa";

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

    @media screen and (max-width: 1000px){
        display: none;
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
    animation: fadeinSocial .6s forwards 5s ease-in-out;

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
`
export const ModeWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: center;
    width: 100%;
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
        animation: pulse 1.2s infinite ease-in-out;
        transform: scale(1);
        @keyframes pulse {
            0% {
                transform: scale(1.1) rotate(0deg);
                
            }
            100% {
                transform: scale(1.1) rotate(360deg);
            }
        }
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
export const Email = styled.a`
    width: 30px;
    cursor: pointer;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    letter-spacing: 0.1em;

    &:hover{
        transform: scale(1.03);
        transition: all .2s ease-in-out;
    }
`