import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

export const Section = styled.section`
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    padding-top: 90px;
    padding-left: 2.5%;
    padding-right: 2.5%;
    padding-bottom: 10%;
    @media screen and (max-width: 768px){
        padding-left: 5%;
        padding-right: 5%;
    }
`
export const ContentWrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 100%;
    justify-content: center;
    z-index: 1;
`
export const ProjectWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding-left: 1.25%;
    padding-right: 1.25%;
    justify-content: stretch;
    align-items: center;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 568px){
        grid-template-columns: 1fr;
    }
`
export const ProjectCard = styled.div`
    background-color: ${(props) => props.theme.cardColor};
    flex-direction: column;
    justify-content: center;
    border-radius: 6px;
    align-items: center;
    justify-content: stretch;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.32);
    transition: all .2s ease-in-out;
    height: 27rem;
    line-height: 1.3;
    position: relative;

    &:hover{
        -webkit-transform: scale(1.02);
        -moz-transform: scale(1.02);
        -o-transform: scale(1.02);
        -ms-transform: scale(1.02);
        transform: scale(1.02);
        border: .5px solid ${(props) => props.theme.accentColor};
        color: ${(props) => props.theme.fontColor};
        img{
            opacity: 1;
        }
    }
    @media screen and (max-width: 1000px){
        &:active{
            -webkit-transform: scale(.98);
            -moz-transform: scale(.98);
            -o-transform: scale(.98);
            -ms-transform: scale(.98);
            transform: scale(.98);
            border: .5px solid ${(props) => props.theme.accentColor};
        }
    }
    @media screen and (max-width: 1000px){
        height: 31rem;
    }
    @media screen and (max-width: 768px){
        height: 25rem;
    }
    @media screen and (max-width: 568px){
        height: 30rem;
    }
   
`

export const ProjectLink = styled.a`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 2.5%;
    margin-right: 2.5%;
    padding: 0;
    cursor: pointer;
    align-items: center;
    height: 30px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.accentColor};
    opacity: 1;
    z-index: 2;
`
export const OpenTabIcon = styled(MdOpenInNew)`
    font-size: 30px;    
`
export const ProjectImage = styled.img`
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    display: block;
    transition: .5s ease;
    opacity: 0.7;

    @media screen and (max-width: 1000px){
        opacity: 1;
    }
`
export const ProjectH3 = styled.h3`
    padding: 5% 5% 0 5%;
`
export const ProjectP = styled.p`
    padding: 2.5% 5% 0 5%;
`
export const ProjectTech = styled.ul`
    padding: 5%;
    color: ${(props) => props.theme.accentColor};
    position: absolute;
    bottom: 0;
    width: 100%;
`
export const TechItem = styled.li`
    display: inline-block;
    padding: 2%;
    font-size: 14px;
    padding-left: 0;
`
export const GithubLink = styled.a`
    position: absolute;
    right: 0;
    cursor: pointer;
    padding-right: 5%;
    color: ${(props) => props.theme.accentColor};
`
export const Github = styled(FiGithub)`
    font-size: 24px;
`

