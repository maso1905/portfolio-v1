import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    padding-left: 2.5%;
    padding-right: 2.5%;

    @media screen and (max-width: 768px){
        padding-left: 5%;
        padding-right: 5%;
    }
`
export const ContentWrapper = styled.div`
    max-width: 1300px;
    width: 100%;
    justify-content: center;
`
export const ProjectWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2%;
    padding-right: 2.5%;
    align-items: center;
    overflow-y: hidden;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 1%;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding-right: 0;
    }
`
export const ProjectCard = styled.div`
    background-color: ${(props) => props.theme.darkerBG};
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 6px;
    align-items: center;
    height: 450px;
    margin-top: 5%;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.32);
    transition: all .4s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        transition: .4s ease-in-out;
        border: .5px solid ${(props) => props.theme.accentColor};
        height: 500px;

        .prjtechs{
            visibility: visible;
        }
    }
    @media screen and (max-width: 768px){
        height: 500px;
        margin-top: 1%;
        &:hover{
            height: 550px;
        }
    }
`
export const ProjectImage = styled.img`
    max-width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`
export const ProjectH3 = styled.h3`
    padding: 5%;
`
export const ProjectP = styled.p`
    padding: 0 5% 0 5%;
`
export const ProjectTech = styled.ul`
    padding: 5% 5% 0 5%;
    color: ${(props) => props.theme.accentColor};
    visibility: hidden;

    @media screen and (max-width: 768px){
        visibility: visible;
        margin-top: 2%;
    }
`
export const TechItem = styled.li`
    display: inline-block;
    padding: 2%;
    font-size: 14px;
`

