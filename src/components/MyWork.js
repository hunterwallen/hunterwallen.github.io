import React from 'react'
import projectStyles from '../styles/projects.css'

export default function About(props) {
	return (
		<React.Fragment>
    <ul class='projectsLinks'>
			<li class="projectLink">
		    <a href="https://reddit-two-point-oh-react.herokuapp.com/" target='_blank' className="projectTitles">Reddit 2.0</a>
		    <p className="projectInfo">Message board application built using a Ruby on Rails and PostgresQL API and a React front end. This application can be found in two repos in my github below. The front and back end are both hosted separately via Heroku.</p>
				<div className='doubleRepoDiv'>
		     <a href="https://github.com/hunterwallen/reddit_clone_frontend" className="gitRepoLinks">Git Repo Front End</a>
				 <a href="https://github.com/hunterwallen/reddit_clone_backend" className="gitRepoLinks">Git Repo Back End</a>
				</div>
		  </li>
		  <li class="projectLink">
		    <a href="https://thecouchgourmet.herokuapp.com/" target='_blank' className="projectTitles">The Couch Gourmet</a>
		    <p className="projectInfo">Restaurant review single-page application. Full-stack application built using the MERN stack and integrating mulitple React Components, express controllers, MongoDB Atlas collections and CSS animations. I was responsible for writing the React code and the vast majority of the back-end functionality. My partner handled the CSS styling and modal animations.</p>
		     <a href="https://github.com/hunterwallen/the_couch_gourmet" className="gitRepoLinks">Git Repo</a>
		  </li>
		  <li class="projectLink">
		    <a href="https://sunnyanimalshelter.herokuapp.com/" target='_blank' className="projectTitles">Sunny Animal Shelter</a>
		    <p className="projectInfo">Full-stack application built using the MERN stack. This app demonstrates full CRUD functionality. The CSS styling is responsive and was completed primarily using Flexbox with mobile first design. I was responsible for building this in a grand total of 4 hours.</p>
		    <a href="https://github.com/hunterwallen/animal_shelter" className="gitRepoLinks">Git Repo</a>
		  </li>
		  <li class="projectLink">
		    <a href="https://shielded-badlands-55529.herokuapp.com/gatekeeper" target='_blank' className="projectTitles">1LiNR</a>
		    <p className="projectInfo">Social media application that operates under the premise that less is more. This application uses Express, Node.js, MongoDB Atlas and EJS to create a multi-page experience.</p>
		    <a href="https://github.com/hunterwallen/1LINR" className="gitRepoLinks">Git Repo</a>
		  </li>
		   <li class="projectLink">
		     <a href="https://boring-booth-b430fc.netlify.app/" target='_blank' className="projectTitles">FlashNewz</a>
		     <p className="projectInfo">This application pulls information from the New York Times API and displays them in a simple, easy to digest format.</p>
		     <a href="https://github.com/hunterwallen/flashNewz" className="gitRepoLinks">Git Repo</a>
		   </li>
		</ul>
		</React.Fragment>
	);
}
