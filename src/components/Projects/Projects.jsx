import React from 'react';

import project1 from '../../img/projects/imgbig1.jpg';
import project2 from '../../img/projects/imgbig2.jpg';
import project3 from '../../img/projects/imgbig3.jpg';
import project4 from '../../img/projects/imgbig4.jpg';


import './projects.css';


function Projects() {
   return (
      <section className="projects section" id="projects">
         <h2 className=" section__title-1">
            <span>Projects.</span>
         </h2>
         <div className="projects__container container grid">

            <article className="projects__card">
               <div className="projects__image">
                  <img src={project1} alt="image" className="projects__img" />

                  <a href="#" className="projects__button button">
                     <i className="ri-arrow-right-up-line"></i>
                  </a>
               </div>

               <div className="projects__content">
                  <h3 className="projects__subtitle">Website</h3>
                  <h2 className="projects__title">Restaurant Website</h2>

                  <p className="projects__description">
                     Project that you carry out in the design
                     and structure of the layout, showing the
                     design at the client's request.
                  </p>
               </div>

               <div className="projects__buttons">
                  <a href="#" target="_blank" className="projects__link">
                     <i className="ri-github-line"></i> View
                  </a>
                  <a href="#" target="_blank" className="projects__link">
                     <i className="ri-earth-line"></i> View
                  </a>
               </div>
            </article>

            <article className="projects__card">
               <div className="projects__image">
                  <img src={project2} alt="image" className="projects__img" />

                  <a href="#" className="projects__button button">
                     <i className="ri-arrow-right-up-line"></i>
                  </a>
               </div>

               <div className="projects__content">
                  <h3 className="projects__subtitle">App</h3>
                  <h2 className="projects__title">Yoga App</h2>

                  <p className="projects__description">
                     Project that you carry out in the design
                     and structure of the layout, showing the
                     design at the client's request.
                  </p>
               </div>

               <div className="projects__buttons">
                  <a href="#" target="_blank" className="projects__link">
                     <i className="ri-github-line"></i> View
                  </a>
                  <a href="#" target="_blank" className="projects__link">
                     <i className="ri-earth-line"></i> View
                  </a>
               </div>
            </article>
            <article className="projects__card">
               <div className="projects__image">
                  <img src={project3} alt="image" className="projects__img" />

                  <a href="#" className="projects__button button">
                     <i className="ri-arrow-right-up-line"></i>
                  </a>
               </div>

               <div className="projects__content">
                  <h3 className="projects__subtitle">App</h3>
                  <h2 className="projects__title">Fast Food App</h2>

                  <p className="projects__description">
                     Project that you carry out in the design
                     and structure of the layout, showing the
                     design at the client's request.
                  </p>
               </div>

               <div className="projects__buttons">
                  <a href="#" target="_blank" className="projects__link">
                     <i className="ri-github-line"></i> View
                  </a>
                  <a href="#" target="_blank" className="projects__link">
                     <i className="ri-earth-line"></i> View
                  </a>
               </div>
            </article>

            <article className="projects__card">
               <div className="projects__image">
                  <img src={project4} alt="image" className="projects__img" />

                  <a href="#" className="projects__button button">
                     <i className="ri-arrow-right-up-line"></i>
                  </a>
               </div>

               <div className="projects__content">
                  <h3 className="projects__subtitle">Website</h3>
                  <h2 className="projects__title">Barbershop Website</h2>

                  <p className="projects__description">
                     Project that you carry out in the design
                     and structure of the layout, showing the
                     design at the client's request.
                  </p>
               </div>

               <div className="projects__buttons">
                  <a href="#" target="_blank" className="projects__link">
                     <i className="ri-github-line"></i> View
                  </a>
                  <a href="#" target="_blank" className="projects__link">
                     <i className="ri-earth-line"></i> View
                  </a>
               </div>
            </article>

         </div>
      </section>
   )
}

export default Projects