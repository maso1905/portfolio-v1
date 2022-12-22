import React from 'react'
import {
    Section,
    Content
} from './IntroStyling';

const IntroSection = () => {
    return (
        <Section id="home">
            <Content>  
                <p class="small-welcome">Hi!</p>
                <h1>My name is Malin.</h1>
                <h2>I'm a <span>Web <div class="devAnim">Developer</div></span>.</h2>
            </Content>
        </Section>
    );
}

export default IntroSection;
