import styled from "styled-components";
import { ImLinkedin } from "react-icons/im";
import { FaGithubAlt } from "react-icons/fa";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0;
    margin-left: 2.5%;
    padding-right: 2.5%;
    padding-top: 2.5%;
    z-index: 0;
    @media screen and (max-width: 768px){
        padding-top: 0;
        margin-bottom: 98px;
    }
`;
export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    text-align: center;

    p{
        font-size: 90%;
        max-width: 200px;
    }
`;

export const SocialWrapper = styled.div`
    display: none;

    @media screen and (max-width: 1040px){
        display: flex;
    }
`

export const SocialIcons = styled.ul`
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const IconItem = styled.li`
    margin: 10px;
`
export const Icon = styled.a`
    fill: ${(props) => props.theme.fontColor};
    margin: 0 auto;
    &:hover{
        fill: ${(props) => props.theme.accentColor};
        color: ${(props) => props.theme.accentColor};
    }
`
export const Github = styled(FaGithubAlt)`
    font-size: 28px;
`
export const LinkedIn = styled(ImLinkedin)`
    font-size: 24px;
`