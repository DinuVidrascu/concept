import React from 'react'
import imgHero from '../../img/555.png';
import imgArrow from '../../img/curved-arrow.svg';


import './home.css'

function Home() {
   return (
      <section className="home section" id="home">
         <div className="home__container container grid">
            <h1 className="home__name">
               Dinu Vidrascu
            </h1>
            <div className="home__perfil">
               <div className="home__image">
                  <img src={imgHero} alt="image" className="home__img" />
                  <div className="home__shadow"></div>
                  <img src={imgArrow} alt="" className="home__arrow" />
                  <div className="geometric-box"></div>
               </div>

               <div className="home__social">
                  <a href="https://www.instagram.com/dinu.vidrascu/" target="_blank" className="home__social-link">
                     <i className="ri-instagram-line"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/dinu-vidrascu-a922b8226/" target="_blank" className="home__social-link">
                     <i className="ri-linkedin-box-line"></i>
                  </a>

                  <a href="https://github.com/DinuVidrascu" target="_blank" className="home__social-link">
                     <i className="ri-github-line"></i>
                  </a>
               </div>
            </div>
            <div className="home__info">
               <p className="home__description">
                  <b>Frontend Developer</b>,
                  enthusiastic and dedicated  with a passion for creating captivating user experiences.
               </p>
               <a href="#about" className="home__scroll">
                  <div className="home__scroll-box">
                     <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <span className="home__scroll-text">Scroll down</span>
               </a>
            </div>
         </div>
      </section>
   )
}

export default Home;