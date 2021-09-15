import React, {useState} from 'react';
import AboutSection from '../components/AboutSection';
import { ObjOne } from '../components/AboutSection/Data';
import ContactSection from '../components/ContactSection';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import Navbar from '../components/Navbar';
import ProjectSection from '../components/ProjectSection';

const Home = ({themeToggler}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} themeToggler={themeToggler} />
            <IntroSection />
            <AboutSection {...ObjOne}/>
            <ProjectSection />
            <ContactSection {...ObjOne}/>
            <Footer />
        </>
    );
};

export default Home
