import React from 'react'

import imgAbout from '../../img/pic.png'
import cvPdf from '../../img/pdf/VIdrascu-Dinu_CV_Front-End.pdf'

import './about.css'

function About() {
   return (
      <section className="about section" id="about">
         <div className="about__container container grid">
            <h2 className="section__title-1">
               About Me.
            </h2>

            <div className="about__perfil">
               <div className="about__image">
                  <img src={imgAbout} alt="image" className="about__img" />

                  {/* <div className="about__shadow"></div> */}
                  <div className="geometric-box"></div>
                  <div className="about__box"></div>
               </div>
            </div>
            <div className="about__info">
               <p className="about__description">
                  Passionate about creating <b>Web Pages</b> with
                  <b> UI/UX User Interface</b>, I am committed to consistently delivering high-quality.
                  I actively seek opportunities for continuous learning and development to constantly improve my abilities and knowledge.
               </p>

               <ul className="about__list">
                  <li className="about__item">
                     <b>My Skills Are:</b> HTML, CSS, Scss, JavaScript,
                     React, Redux, Git, GitHub, Vercel, Bootstrap, Photoshop &
                     Figma.
                  </li>
               </ul>

               <div className="about__buttons">
                  <a href={cvPdf} target="_blank" className="button">
                     <i className="ri-profile-line"></i>View my resume
                  </a>

                  <a href={cvPdf} download="Dinu_Vidrascu_CV" className="button__ghost" target="_blanks">
                     <i className="ri-download-cloud-2-line"></i>
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About