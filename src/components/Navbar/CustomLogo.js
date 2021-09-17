import React from 'react'
import styled from "styled-components";

const Styling = styled.svg`  
    width: 40px;
    height: 40px;
    #M{
        fill: ${(props) => props.theme.accentColor};
    }
    #Ellipse_12{
        stroke: ${(props) => props.theme.accentColor};
        fill: none;
    }
`
const CustomLogo = () => {
    return (
        <Styling>
            <svg id="Component_8_1" data-name="Component 8 – 1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 143 143">
                <g id="Ellipse_12" data-name="Ellipse 12" stroke-width="9">
                    <circle cx="71.5" cy="71.5" r="71.5" stroke="none"/>
                    <circle cx="71.5" cy="71.5" r="67" fill="none"/>
                </g>
                <text id="M" transform="translate(28 108)" font-size="105" font-family="ArialMT, Arial"><tspan x="0" y="0">M</tspan></text>
            </svg>
        </Styling>
    );
}

export default CustomLogo;