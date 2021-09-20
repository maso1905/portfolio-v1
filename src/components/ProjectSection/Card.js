import React from 'react'
import {
    ProjectCard,
    ProjectImage,
    ProjectP,
    ProjectH3,
    ProjectTech,
    TechItem,
    ImgContainer
} from './ProjectStyling';

const Card = ({url, img, alt, title, desc, techItem1, techItem2, techItem3, techItem4}) => {

    const techItems = [techItem1, techItem2, techItem3, techItem4];
    return (
        <ProjectCard tabIndex="0" href={url} target="_blank" rel="noreferrer">
            <ImgContainer>
                    <ProjectImage src={img} alt={alt}/>
            </ImgContainer>
            <ProjectH3>{title}</ProjectH3>
            <ProjectP>{desc}</ProjectP> 
            <ProjectTech className="prjtechs">
                {techItems.map((techItem)=>{
                    return <TechItem>{techItem}</TechItem>
                })}
            </ProjectTech>                           
        </ProjectCard>
    )
}

export default Card;
