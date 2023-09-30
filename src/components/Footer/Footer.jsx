import React from 'react'

import './footer.css';

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__container container grid">
            <ul className="footer__links">
               <li>
                  <a href="#home" className="footer__link">Home</a>
               </li>
               <li>
                  <a href="#about" className="footer__link">About</a>
               </li>
               <li>
                  <a href="#projects" className="footer__link">Projects</a>
               </li>
            </ul>

            <span className="footer__copy">
               &#169; Dino
            </span>
         </div>
      </footer>
   )
}

export default Footer