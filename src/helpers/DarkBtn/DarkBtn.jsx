import { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import moon from '../../img/moon.svg';
import sun from '../../img/sun.svg';


import './darkbtn.css'


function DarkBtn() {

   const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

   useEffect(() => {

      if (darkMode === 'dark-theme') {
         document.body.classList.add('dark-theme')
      } else {
         document.body.classList.remove('dark-theme')
      }
   }, [darkMode])

   useEffect(() => {
      window.matchMedia("(prefers-color-scheme: dark-theme)")
         .addEventListener('change', (e) => {
            const newColorScheme = e.matches ? "dark-theme" : 'light';
            setDarkMode(newColorScheme);
         })
   }, [setDarkMode])

   const toogleDarkMode = () => {
      setDarkMode((currentValue) => {
         return currentValue === 'light' ? 'dark-theme' : 'light';
      })
   }

   const btnNormal = 'dark-mode-btn';
   const btnACtive = 'dark-mode-btn dark-mode-btn--active';




   return (
      <div className={darkMode === 'dark-theme' ? btnACtive : btnNormal} onClick={toogleDarkMode}>
         <img className="dark-mode-btn_icon"
            src={sun} alt="Light mode" />
         <img className="dark-mode-btn_icon"
            src={moon} alt="Dark mode" />
      </div>
   )
}

export default DarkBtn