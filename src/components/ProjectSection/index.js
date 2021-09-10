import React, {useState, useEffect} from 'react'
import {
    Section,
    ContentWrapper,
    ProjectWrapper,
    ProjectCard,
    ProjectImage,
    ProjectP,
    ProjectH3,
    ProjectTech,
    TechItem
} from './ProjectStyling';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ScrShot1 from '../../images/ofmScr.png'
import "aos/dist/aos.css";
import Aos from 'aos';

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
                        <Tab tabIndex="0">JavaScript</Tab>
                        <Tab tabIndex="0">C#</Tab>
                        <Tab tabIndex="0">Unity</Tab>
                    </TabList>

                    <TabPanel>
                        <ProjectWrapper>
                            <ProjectCard tabIndex="0">
                                <ProjectImage src={ScrShot1} alt="Project title"/>
                                <ProjectH3>Project 1</ProjectH3>
                                <ProjectP>
                                    My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University.
                                </ProjectP> 
                                <ProjectTech className="prjtechs">
                                    <TechItem>React</TechItem>
                                    <TechItem>CSS</TechItem>
                                    <TechItem>After Effects</TechItem>
                                </ProjectTech>                           
                            </ProjectCard>
                            <ProjectCard tabIndex="0">
                                <ProjectImage src={ScrShot1} alt="Project title"/>
                                <ProjectH3>Project 2</ProjectH3>
                                <ProjectP>
                                    My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University.
                                </ProjectP>
                                <ProjectTech className="prjtechs">
                                    <TechItem>React</TechItem>
                                    <TechItem>CSS</TechItem>
                                    <TechItem>After Effects</TechItem>
                                </ProjectTech> 
                            </ProjectCard>
                            <ProjectCard tabIndex="0">
                                <ProjectImage src={ScrShot1} alt="Project title"/>
                                <ProjectH3>Project 3</ProjectH3>
                                <ProjectP>
                                    My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University.
                                </ProjectP>  
                                <ProjectTech className="prjtechs">
                                    <TechItem>React</TechItem>
                                    <TechItem>CSS</TechItem>
                                    <TechItem>After Effects</TechItem>
                                </ProjectTech>                           
                            </ProjectCard>
                            <ProjectCard tabIndex="0">
                                <ProjectImage src={ScrShot1} alt="Project title"/>
                                <ProjectH3>Project 1</ProjectH3>
                                <ProjectP>
                                    My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University.
                                </ProjectP> 
                                <ProjectTech className="prjtechs" alt="Project title">
                                    <TechItem>React</TechItem>
                                    <TechItem>CSS</TechItem>
                                    <TechItem>After Effects</TechItem>
                                </ProjectTech>                           
                            </ProjectCard>
                            <ProjectCard tabIndex="0">
                                <ProjectImage src={ScrShot1} alt="Project title"/>
                                <ProjectH3>Project 2</ProjectH3>
                                <ProjectP>
                                    My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University.
                                </ProjectP>
                                <ProjectTech className="prjtechs">
                                    <TechItem>React</TechItem>
                                    <TechItem>CSS</TechItem>
                                    <TechItem>After Effects</TechItem>
                                </ProjectTech> 
                            </ProjectCard>
                            <ProjectCard tabIndex="0">
                                <ProjectImage src={ScrShot1} alt="Project title"/>
                                <ProjectH3>Project 3</ProjectH3>
                                <ProjectP>
                                    My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University.
                                </ProjectP> 
                                <ProjectTech className="prjtechs">
                                    <TechItem>React</TechItem>
                                    <TechItem>CSS</TechItem>
                                    <TechItem>After Effects</TechItem>
                                </ProjectTech>                            
                            </ProjectCard>
                        </ProjectWrapper>
                    </TabPanel>
                    <TabPanel>
                    <ProjectWrapper>
                            <ProjectCard tabIndex="0">
                                <ProjectImage src={ScrShot1} alt="Project title"/>
                                <ProjectH3>Project 1</ProjectH3>
                                <ProjectP>
                                    My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University.
                                </ProjectP> 
                                <ProjectTech className="prjtechs">
                                    <TechItem>React</TechItem>
                                    <TechItem>CSS</TechItem>
                                    <TechItem>After Effects</TechItem>
                                </ProjectTech>                            
                            </ProjectCard>
                            <ProjectCard tabIndex="0">
                                <ProjectImage src={ScrShot1} alt="Project title"/>
                                <ProjectH3>Project 2</ProjectH3>
                                <ProjectP>
                                    My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University.
                                </ProjectP>
                                <ProjectTech className="prjtechs">
                                    <TechItem>React</TechItem>
                                    <TechItem>CSS</TechItem>
                                    <TechItem>After Effects</TechItem>
                                </ProjectTech> 
                            </ProjectCard>
                        </ProjectWrapper>
                    </TabPanel>
                    <TabPanel>
                    <ProjectWrapper>
                            <ProjectCard tabIndex="0">
                                <ProjectImage src={ScrShot1} alt="Project title"/>
                                <ProjectH3>Project 1</ProjectH3>
                                <ProjectP>
                                    My name is Malin and I’m 29 years old from Stockholm, Sweden and I’m a recent web development gradute from Mid Sweden University.
                                </ProjectP>
                                <ProjectTech className="prjtechs">
                                    <TechItem>React</TechItem>
                                    <TechItem>CSS</TechItem>
                                    <TechItem>After Effects</TechItem>
                                </ProjectTech>                             
                            </ProjectCard>
                        </ProjectWrapper>
                    </TabPanel>
                </Tabs>  
            </ContentWrapper>
        </Section>
    );
}

export default ProjectSection;
