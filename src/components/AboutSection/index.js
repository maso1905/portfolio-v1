import React, {useEffect} from 'react'
import {
    Section,
    ContentWrapper,
    Row,
    ImgWrap,
    Img,
    Col1,
    Col2,
    InfoWrapper,
    Paragraph
} from './AboutStyling';
import "aos/dist/aos.css";
import Aos from 'aos';

const AboutSection = ({img, alt, p1, p2}) => {
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
                            <Paragraph>{p1}</Paragraph>
                            <Paragraph>{p2}</Paragraph>
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
