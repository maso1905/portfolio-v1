import React, {useEffect} from 'react'
import {
    Section,
    ContentWrapper,
    Row,
    ImgWrap,
    Img,
    Col1,
    Col2,
    InfoWrapper
} from './AboutStyling';
import "aos/dist/aos.css";
import Aos from 'aos';

const AboutSection = ({img, alt}) => {
useEffect(() => {
    Aos.init({
        duration: 1000
    });
}, []);

    return (
        <Section id="about">
            <ContentWrapper data-aos-mirror="true" data-aos-once="false" data-aos="fade-left">   
                <h2>About</h2>
                <Row>
                    <Col1>
                        <InfoWrapper>
                            <p>
                                My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University. Like birds loves their sky, I love being in a creative environment. Creativity can be a lot of things, for me it means to be a part of something small that evolves into something greater. That’s why I love coding, it’s scaleable and powerful!
                            </p>
                            <p>
                                I would define myself as a structured and dedicated person who loves to learn. I have a musical background, playing the guitar in highschool and some piano. Since an early age I’ve also had an affinity for video games, it started when I was 11 years old.. I used to beat my friends in Tekken 3, most likely by pressing all the buttons as fast as I could rather than devine and elegant techniques. Maybe I’m slightly competitive still, but now in my adult years it’s less about winning and more about being ambitious and a solid teamplayer.
                            </p>
                        </InfoWrapper>
                    </Col1>
                    <Col2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Col2>
                </Row>  
            </ContentWrapper>
        </Section>
    );
}

export default AboutSection;
