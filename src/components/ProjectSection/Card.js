import React from 'react'
import {
    ProjectCard,
    ProjectImage,
    ProjectP,
    ProjectH3,
    ProjectTech,
    TechItem
} from './ProjectStyling';

const Card = ({url, img, alt, title, desc, techItem1, techItem2, techItem3, techItem4}) => {

    const techItems = [techItem1, techItem2, techItem3, techItem4];
    return (
        <ProjectCard tabIndex="0" href={url} target="_blank" rel="noreferrer">
            <ProjectImage class="prjImg" src={img} alt={alt}/>
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
