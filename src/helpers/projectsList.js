
import project01 from "./../img/projects/imgbig1.jpg";
import project02 from "./../img/projects/imgbig2.jpg";
import project03 from "./../img/projects/imgbig3.jpg";
import project04 from "./../img/projects/imgbig4.jpg";
import projectnew from "./../img/projects/new.jpg"

const projectsList = [
   {
      id: 1,
      title: 'Marvel Comics',
      skills: 'React.JS, Scss',
      img: project01,
      description: 'you description',
      gitHubLink:'https://github.com/DinuVidrascu/marvel_React',
      projectLink: 'https://marvel-react-bay.vercel.app/',
   },
   {
      id: 2,
      title: 'Food service',
      skills: 'JavaScript, Css, PHP, webpack',
      img: project02,
      description: 'you description',
      gitHubLink:'https://github.com/DinuVidrascu/Food',
      projectLink: 'https://food-woad.vercel.app/',
   },
   {
      id: 3,
      title: 'E-Store',
      skills: 'React.JS, CSS',
      img: project03,
      description: 'you description',
      gitHubLink:'https://github.com/DinuVidrascu/E-Store',
      projectLink: 'https://e-store-navy.vercel.app/',
   },
   {
      id: 4,
      title: 'Window-Installation',
      skills: 'Html, Css, JavaScript, Gulp',
      img: project04,
      description: 'you description',
      gitHubLink:'https://github.com/DinuVidrascu/window-store',
      projectLink: 'https://dinuvidrascu.github.io/window-store/dist/',
   },
   {
      id: 10,
      title: 'New Project',
      skills: 'Loading',
      description: '...',
      img: projectnew,
   },

]

export {projectsList}