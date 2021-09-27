import React from 'react'
import {
    ProjectCard,
    ProjectLink,
    OpenTabIcon,
    ProjectImage,
    ProjectP,
    ProjectH3,
    ProjectTech,
    TechItem,
    GithubLink,
    Github
} from './ProjectStyling';


const Card = ({url, img, alt, title, desc, github, techItem1, techItem2, techItem3, techItem4}) => {
    const techItems = [techItem1, techItem2, techItem3, techItem4];

    return (
        <ProjectCard tabIndex="0">
            <ProjectLink href={url} target="_blank" aria-label="Open Tab" role="img" rel="noreferrer">
                <OpenTabIcon />
            </ProjectLink>
            <ProjectImage class="prjImg" src={img} alt={alt}/>
            <ProjectH3>{title}</ProjectH3>
            <ProjectP>{desc}</ProjectP> 
            <ProjectTech className="prjtechs">
                {techItems.map((techItem)=>{
                    return <TechItem>{techItem}</TechItem>
                })}
                <GithubLink class="githubLink" href={github} target="_blank" aria-label="Github Link" role="img" rel="noreferrer">
                    <Github />
                </GithubLink>
            </ProjectTech>                           
        </ProjectCard>
    )
}

export default Card;
