import React, {useState, useEffect} from 'react'
import {
    Section,
    ContentWrapper,
    ProjectWrapper
} from './ProjectStyling';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "aos/dist/aos.css";
import Aos from 'aos';
import Card from './Card';
import { Prj1, Prj2, Prj3, Prj4, Prj5, Prj6, Prj7 } from './Data';

const ProjectSection = () => {
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    return (
        <Section id="projects">
            <ContentWrapper data-aos-mirror="true" data-aos-once="false" data-aos="fade-right">   
                <h2>Projects</h2>
                <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList>
                        <Tab tabIndex="0">Featured</Tab>
                        <Tab tabIndex="0">Plans</Tab>
                    </TabList>
                    <TabPanel>
                        <ProjectWrapper>
                            <Card {...Prj1}/>
                            <Card {...Prj2}/>
                            <Card {...Prj3}/>
                            <Card {...Prj4}/>
                            <Card {...Prj5}/>
                            <Card {...Prj6}/>
                        </ProjectWrapper>
                    </TabPanel>
                    <TabPanel>
                        <ProjectWrapper>
                            <Card {...Prj7}/>
                        </ProjectWrapper>
                    </TabPanel>
                </Tabs>  
            </ContentWrapper>
        </Section>
    );
}

export default ProjectSection;
