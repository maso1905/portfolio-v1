import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-bottom: 10%;
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
export const Row = styled.div`
    display: grid;
    grid-template-columns: 65% 35%;
    align-items: stretch;
    @media screen and (max-width: 768px){
        border-top: 1px solid ${(props) => props.theme.accentColor};
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
export const InfoWrapper = styled.div`
    border-top: 1px solid ${(props) => props.theme.accentColor};
    border-left: 1px solid ${(props) => props.theme.accentColor};
    border-top-left-radius: 6px;
    padding: 2% 0 5% 5%;
    @media screen and (max-width: 768px){
        padding: 2%;
        border: none;
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
export const ImgWrap = styled.div`
    max-width: 300px;
    height: auto;
    display: block;
    float: right;
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



