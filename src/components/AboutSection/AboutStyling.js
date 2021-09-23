import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-bottom: 5%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    padding-top: 90px;
    overflow-x: hidden;

    @media screen and (max-width: 768px){
        padding-left: 5%;
        padding-right: 5%;
    }
`
export const ContentWrapper = styled.div`
    max-width: 900px;
    width: 100%;
    display: grid;
    justify-content: center;
    @media screen and (max-width: 1040px){
        max-width: 700px;
    }
`
export const Row1 = styled.div`
    border-top: 1px solid ${(props) => props.theme.accentColor};
    border-left: 1px solid ${(props) => props.theme.accentColor};
    border-top-left-radius: 6px;
    display: grid;
    grid-template-columns: 65% 35%;
    align-items: stretch;
    @media screen and (max-width: 768px){
        border-radius: 0;
        border-left: none
    }
`
export const Col1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    @media screen and (max-width: 768px){
        grid-column: 1 / 3;
        grid-row: 2 / 2;
    }
`
export const Paragraph = styled.p`
    margin-top: 5%;
    margin-bottom: 2.5%;
    @media screen and (max-width: 768px){
        margin-top: 2.5%;
        margin-bottom: 2.5%;
    }
`
export const InfoWrapper = styled.div`
    padding: 0 0 5% 5%;
    @media screen and (max-width: 768px){
        padding: 0;
    }
`
export const Col2 = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    @media screen and (max-width: 768px){
        grid-column: 1 / 3;
        grid-row: 1 / 2;
    }
`
export const Row2 = styled.div`
    padding-top: 2.5%;
    border-top: 1px solid ${(props) => props.theme.accentColor};
    border-left: 1px solid ${(props) => props.theme.accentColor};
    display: grid;
    grid-template-columns: 65% 35%;
    align-items: stretch;
    @media screen and (max-width: 768px){
        border-left: none
    }
`
export const Col3 = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 1;
    @media screen and (max-width: 768px){
        grid-column: 1 / 2;
        grid-row: 1 / 1;
    }
`
export const IntrestsList = styled.ul`
    color: ${(props) => props.theme.accentColor};
    width: 100%;
    padding-top: 2.5%;
`
export const IntrestItem = styled.li`
    display: inline-block;
    padding-left: 0;
    margin-right: 2%;
`
export const ImgWrap = styled.div`
    max-width: 300px;
    height: auto;
    display: block;
    float: right;
    padding-top: 10%;
    @media screen and (max-width: 768px){
        max-width: 150px;
        float: none;
        margin-right: auto;
        margin-left: auto;
        padding-top: 5%;
    }
`
export const Img = styled.img`
    width: 100%;
    box-shadow: 4px 7px 19px 0px rgba(0, 0, 0, 0.42);
    border-radius: 50% 50%;
`



