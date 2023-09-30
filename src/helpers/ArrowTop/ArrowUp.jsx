import React from 'react'

import './arrowup.css';



function ArrowUp() {

   function scrollUp() {
      const scrollUp = document.getElementById('scroll-up');
      window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                           : scrollUp.classList.remove('show-scroll')
   }
   window.addEventListener('scroll', scrollUp)
   return (
      <a href="#" className="scrollup" id="scroll-up" onClick={scrollUp}>
         <i className="ri-arrow-up-s-line"></i>
      </a>
   )
}

export default ArrowUp