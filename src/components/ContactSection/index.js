import React, {useEffect, useRef} from 'react'
import {
    Section,
    ContentWrapper,
    Row1,
    Row2,
    Col1,
    ImgWrap,
    NavBtn,
    NavBtnLink
} from './ContactStyling';
import "aos/dist/aos.css";
import Aos from 'aos';
import lottie from "lottie-web";
import { BiMailSend as Icon } from "react-icons/bi"

const ContactSection = () => {
    const container = useRef(null);

    useEffect(() => {
        Aos.init({
            duration: 1000
        });

        lottie.loadAnimation({
            container: container.current,
            render: "svg",
            loop: true,
            autoplay: true,
            animationData: require('../../images/data.json')
        })
    }, []);

    return (
        <Section id="contact">
            <ContentWrapper data-aos-mirror="true" data-aos-once="false" data-aos="fade-left">   
                <h2>Contact</h2>
                <Row1>
                    <Col1>
                        <ImgWrap className="container" ref={container} />
                    </Col1>
                </Row1>  
                <Row2>
                    <Col1>       
                        <NavBtn>
                            <NavBtnLink href="mailto:mallasoderlund@hotmail.com" aria-label="E-mail" role="img" rel="noreferrer">
                                <Icon />
                            </NavBtnLink>
                        </NavBtn>
                    </Col1>
                </Row2>
            </ContentWrapper>
        </Section>
    );
}

export default ContactSection;
