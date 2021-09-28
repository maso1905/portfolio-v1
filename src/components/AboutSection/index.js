import React, {useEffect} from 'react'
import {
    Section,
    ContentWrapper,
    Row1,
    Row2,
    ImgWrap,
    Img,
    Col1,
    Col2,
    Col3,
    InfoWrapper,
    Paragraph,
    IntrestsList,
    IntrestItem
} from './AboutStyling';
import "aos/dist/aos.css";
import Aos from 'aos';

const AboutSection = ({img, alt, p1, intrest1, intrest2, intrest3, intrest4}) => {
    const intrests = [intrest1, intrest2, intrest3, intrest4];

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    return (
        <Section id="about">
            <ContentWrapper data-aos-mirror="true" data-aos-once="false" data-aos="fade-left">   
                <h2>About</h2>
                <Row1>
                    <Col1>
                        <InfoWrapper>
                            <Paragraph>{p1}</Paragraph>
                        </InfoWrapper>
                    </Col1>
                    <Col2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Col2>
                </Row1>  
                <Row2>
                    <Col3>
                        <InfoWrapper>
                            <h3>Current interests:</h3>
                            <IntrestsList>
                                {intrests.map((intrestItem)=>{
                                    return  <IntrestItem>{intrestItem}</IntrestItem>
                                })}
                            </IntrestsList>
                        </InfoWrapper>
                    </Col3>
                </Row2>
            </ContentWrapper>
        </Section>
    );
}

export default AboutSection;
