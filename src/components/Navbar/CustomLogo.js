import React from 'react'
import styled from "styled-components";

const Styling = styled.svg`
    fill: ${(props) => props.theme.accentColor};
    font-family: Calibri;
    font-size: 116.98px;
    width: 32px;
    height: 32px;
`

const CustomLogo = () => {
    return (
        <Styling>
            <svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 159">
                <g>
                    <path class="cls-1" d="M150.5,68A70.5,70.5,0,1,1,80,138.5,70.58,70.58,0,0,1,150.5,68m0-9A79.5,79.5,0,1,0,230,138.5,79.5,79.5,0,0,0,150.5,59Z" transform="translate(-71 -59)"/>
                    <text class="cls-2" transform="translate(34.5 112.45) scale(0.89 1)">M</text>
                </g>
            </svg>
        </Styling>
    );
}

export default CustomLogo;