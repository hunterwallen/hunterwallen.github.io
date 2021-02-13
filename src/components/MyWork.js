import React from 'react'

export default function About(props) {
	return (
		<React.Fragment>
    <ul class='projectsLinks'>
  <li class="projectLink">
    <a href="https://thecouchgourmet.herokuapp.com/" target='_blank'>The Couch Gourmet</a>
    <p>Restaurant review single-page application. Full-stack application built using the MERN stack and integrating mulitple React Components, express controllers, MongoDB Atlas collections and CSS animations. I was responsible for writing the React code and the vast majority of the back-end functionality. My partner handled the CSS styling and modal animations.</p>
     <a class="gitRepoLinks" href="https://github.com/hunterwallen/the_couch_gourmet">Git Repo</a>
  </li>
  <li class="projectLink">
    <a href="https://sunnyanimalshelter.herokuapp.com/" target='_blank'>Sunny Animal Shelter</a>
    <p>Full-stack application built using the MERN stack. This app demonstrates full CRUD functionality. The CSS styling is responsive and was completed primarily using Flexbox with mobile first design. I was responsible for building this in a grand total of 4 hours.</p>
    <a class="gitRepoLinks" href="https://github.com/hunterwallen/animal_shelter">Git Repo</a>
  </li>
  <li class="projectLink">
    <a href="https://shielded-badlands-55529.herokuapp.com/gatekeeper" target='_blank'>1LiNR</a>
    <p>Social media application that operates under the premise that less is more. This application uses Express, Node.js, MongoDB Atlas and EJS to create a multi-page experience.</p>
    <a class="gitRepoLinks" href="https://github.com/hunterwallen/1LINR">Git Repo</a>
  </li>
 <li class="projectLink">
   <a href="https://immense-journey-81303.herokuapp.com/store/" target='_blank'>COmade Store</a>
   <p>Multi-page store application built using Express, Node.js, MongoDB Atlas and EJS. This is my first full stack application project.</p>
   <a class="gitRepoLinks" href="https://github.com/hunterwallen/COmade">Git Repo</a>
 </li>
   <li class="projectLink">
     <a href="https://boring-booth-b430fc.netlify.app/" target='_blank'>FlashNewz</a>
     <p>This application pulls information from the New York Times API and displays them in a simple, easy to digest format.</p>
     <a class="gitRepoLinks" href="https://github.com/hunterwallen/flashNewz">Git Repo</a>
   </li>
</ul>
		</React.Fragment>
	);
}
