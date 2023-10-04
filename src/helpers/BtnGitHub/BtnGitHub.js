import React from 'react'
import './btngithub.css'

function BtnGitHub({gitHubLink}) {
   return (
      <a href={gitHubLink} target="_blank" rel='noreferrer' className="projects__link">
         <i className="ri-github-line"></i> View
      </a>
   )
}

export default BtnGitHub