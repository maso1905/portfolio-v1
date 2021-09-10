import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;    
    padding-bottom: 10%;
    height: auto;

    @media screen and (max-width: 768px){
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 30%;
        padding-bottom: 30%;
    }
`
export const ContentWrapper = styled.div`
    max-width: 900px;
    width: 100%;
    display: grid;
    justify-content: center;
`
export const Row1 = styled.div`
    display: grid;
    grid-template-columns: 100%;
    text-align: center;
    border-top: 1px solid ${(props) => props.theme.accentColor};
    border-left: 1px solid ${(props) => props.theme.accentColor};
    border-right: 1px solid ${(props) => props.theme.accentColor};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`
export const Row2 = styled.div`
    display: grid;
    grid-template-columns: 100%;
    text-align: center;
`
export const Col1 = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
`
export const ImgWrap = styled.div`
    width: 100%;
    height: auto;
    display: block;
    align-items: center;
`
export const NavBtn = styled.div`
    display: flex;
    align-content: center;
    border-radius: 4px;
    transition: all .2s ease-in-out;
    max-width: 150px;
    height: 64px;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
    margin-top: 5%;
    &:hover{
        transform: scale(1.1);
        color: ${(props) => props.theme.accentColor};
    }
`;
export const NavBtnLink = styled.a`
    display: inline-block;
    position: relative;
    background: none;
    text-decoration: none;
    margin: 0 auto;
    font-size: 64px;
    text-align: center;
    color: ${(props) => props.theme.fontColor};
`;


