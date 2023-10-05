import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectsList } from '../../helpers/projectsList';

import './projects.css';


function Projects() {
   return (
      <section className="projects section" id="projects">
         <h2 className=" section__title-1">
            <span>Projects.</span>
         </h2>
         <div className="projects__container container grid">
            {projectsList.map((project) => {
               return (
                  <ProjectCard key={project.id}
                     title={project.title}
                     img={project.img}
                     gitHubLink={project.gitHubLink}
                     projectLink={project.projectLink}
                     description={project.description}
                     skills={project.skills} />
               )
            })}
         </div>
      </section>
   )
}

export default Projects