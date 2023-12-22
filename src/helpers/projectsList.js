
import project01 from "./../img/projects/imgbig1.jpg";
import project02 from "./../img/projects/imgbig2.jpg";
import project03 from "./../img/projects/imgbig3.jpg";
import project04 from "./../img/projects/imgbig5.jpg"
import project06 from "./../img/projects/imgbig7.jpg"
import project07 from "./../img/projects/imgbig6.jpg"
import projectnew from "./../img/projects/one.jpg"


const projectsList = [
   {
      id: 1,
      title: 'Marvel Comics',
      skills: 'React - Scss - API',
      img: project01,
      description: 'This web application provides access to an extensive database of characters, comics and the Marvel Comics universe.',
      gitHubLink:'https://github.com/DinuVidrascu/marvel_React',
      projectLink: 'https://marvel-react-bay.vercel.app/',
   },
   {
      id: 2,
      title: 'Food service',
      skills: 'JS - Css',
      img: project02,
      description: 'This web app helps you find and order food that fits your specific diet. Users can calculate the required calories with a calorie calculator.',
      gitHubLink:'https://github.com/DinuVidrascu/Food',
      projectLink: 'https://food-woad.vercel.app/',
   },
   {
      id: 3,
      title: 'E-Store',
      skills: 'React - CSS',
      img: project03,
      description: 'An e-commerce web project specializing in mobile. It includes a furniture catalogue, search and filtering functionality, detailed product pages, shopping cart.',
      gitHubLink:'https://github.com/DinuVidrascu/E-Store',
      projectLink: 'https://e-store-navy.vercel.app/',
   },
   {
      id: 4,
      title: 'Concept OnePlus Site',
      skills: 'JS - CSS - ScrollReveal',
      description: 'A web presentation project specializing in the OnePlus brand. It includes a catalog of phones, top specification on the new phone, general presentation of the brand.',
      gitHubLink: 'https://github.com/DinuVidrascu/concept_oneplus',
      projectLink:'https://dinuvidrascu.github.io/concept_oneplus/',
      img: project04,
   },
   {
      id: 5,
      title: 'Interior Design Portfolio',
      skills: 'JS - CSS - 3D Scroll',
      description: 'This is a Portfolio created for an Interior Designer where his professional work is demonstrated',
      gitHubLink: 'https://github.com/DinuVidrascu/pet-shop',
      projectLink:'https://pet-shop-three-ashen.vercel.app/',
      img: project06,
   },
   {
      id: 6,
      title: 'Pet-Shop',
      skills: 'React - CSS',
      description: 'This is a web shop designed for selling food products for cats and dogs.',
      gitHubLink: 'https://github.com/DinuVidrascu/pet-shop',
      projectLink:'https://pet-shop-three-ashen.vercel.app/',
      img: project07,
   },
   {
      id: 10,
      title: 'New Project',
      skills: 'Loading',
      projectLink:'https://dinuvidrascu.github.io/New404/',
      img: projectnew,
   },

]

export {projectsList}