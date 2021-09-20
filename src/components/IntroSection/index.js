import React from 'react'
import {
    Section,
    Content
} from './IntroStyling';

const IntroSection = () => {
    return (
        <Section id="home">
            <Content>
                <p class="small-welcome">Welcome,</p>
                <h1>My name is Malin.</h1>
                <h2>I'm a <span>Web <div class="devAnim">Developer</div></span></h2>
                <p>This is my portfolio containing some my proudest work so far. Have a look around!</p>
            </Content>
        </Section>
    );
}

export default IntroSection;
