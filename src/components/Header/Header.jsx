import React from 'react'
import DarkBtn from '../../helpers/DarkBtn/DarkBtn';

import './header.css';

function Header() {

   function toggle() {
      const navMenu = document.getElementById('nav-menu'),
         navToggle = document.getElementById('nav-toggle'),
         navClose = document.getElementById('nav-close')
      /*=============== MENU SHOW ===============*/
      // Validate if constant exists //
      if (navToggle) {
         navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
         })
      }
      /*=============== MENU HIDDEN ===============*/
      // Validate if constant exists //
      if (navClose) {
         navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
         })
      }
   }

   function linkAction() {
      const navMenu = document.getElementById('nav-menu'),
         navLink = document.querySelectorAll('.nav__link')
      // When we click on each nav__link, we remove the show-menu close //
      navLink.forEach(n => n.addEventListener('click',
         navMenu.classList.remove('show-menu')))
   }


   return (
      <header className="header" id="header">
         <div className="nav container">
            <a href="/#" className="nav__logo">
               <span className="nav__logo-circle">dev</span>
               <span className="nav__logo-name">.Dinu</span>
            </a>
            <div className="nav__menu" id="nav-menu" onClick={linkAction}>
               <span className="nav__title">Menu</span>
               <h3 className="nav__name">Dinu</h3>
               <ul className="nav__list">

                  <li className="nav__item">
                     <a href="#home" className="nav__link">Home</a>
                  </li>

                  <li className="nav__item">
                     <a href="#about" className="nav__link">About Me</a>
                  </li>

                  <li className="nav__item">
                     <a href="#projects" className="nav__link">Projects</a>
                  </li>

                  <li className="nav__item">
                     <a href="#contact" className="nav__link ">Contact Me</a>
                  </li>
               </ul>

               <div className="nav__close" id="nav-close">
                  <i className="ri-close-line"></i>
               </div>
            </div>


            <div className="nav__buttons">
               <DarkBtn />
               <div className="nav__toggle" id="nav-toggle">
                  <i className="ri-menu-4-line" onClick={toggle}></i>
               </div>
            </div>
         </div>
      </header>

   )
}

export default Header