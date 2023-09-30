import React from 'react'
import css from '../../img/skils/css.svg';
import html from '../../img/skils/html.svg';
import scss from '../../img/skils/sass.svg'
import react from '../../img/skils/react.svg'
import redux from '../../img/skils/redux.svg'
import js from '../../img/skils/javascript.svg'
import ps from '../../img/skils/phs.svg'
import figma from '../../img/skils/figma.svg'
import bts from '../../img/skils/bts.svg'
import git from '../../img/skils/git.svg'
import github from '../../img/skils/github.svg'





import './banner.css';

function Banner() {
   return (
      <section className="banner section" id="banner">
         <div className="banner__container container grid">

            <div className="banner__list">
               <div className="banner__item">
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  <img src={scss} alt="" />
                  <img src={js} alt="" />
                  <img src={react} alt="" />
                  <img src={redux} alt="" />
                  <img src={bts} alt="" />
                  <img src={ps} alt="" />
                  <img src={figma} alt="" />
                  <img src={git} alt="" />
                  <img src={github} alt="" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Banner