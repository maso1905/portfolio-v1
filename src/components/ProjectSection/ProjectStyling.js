import styled from "styled-components";

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
    max-width: 900px;
    width: 100%;
    height: 100%;
    justify-content: center;
`
export const ProjectWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding-left: 1.25%;
    padding-right: 2.5%;
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
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.32);
    transition: all .4s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: scale(1.02);
        transition: .2s ease-in-out;
        border: .5px solid ${(props) => props.theme.accentColor};
    }
    @media screen and (max-width: 1000px){
        &:hover{
            transform: scale(.98);
            transition: .2s ease-in-out;
            border: .5px solid ${(props) => props.theme.accentColor};
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
`
export const TechItem = styled.li`
    display: inline-block;
    padding: 2%;
    font-size: 14px;
`

