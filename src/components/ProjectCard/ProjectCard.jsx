import React from 'react'
import BtnGitHub from '../../helpers/BtnGitHub/BtnGitHub'

import './projectcard.css'

function ProjectCard({ title, img, gitHubLink, projectLink, description, skills}) {

   return (
      <article className="projects__card">
         <div className="projects__image">
            <img src={img} alt={title} className="projects__img" />
            <a href={projectLink} target='_blank' className="projects__button button">
               <i className="ri-arrow-right-up-line"></i>
            </a>
         </div>
         <div className="projects__content">
            <h3 className="projects__subtitle">{skills}</h3>
            <h2 className="projects__title">
               {title}
            </h2>
            <p className="projects__description">
               {description}
            </p>
         </div>
         <div className="projects__buttons">
            <BtnGitHub gitHubLink={gitHubLink} />
         </div>
      </article>
   )
}

export default ProjectCard;