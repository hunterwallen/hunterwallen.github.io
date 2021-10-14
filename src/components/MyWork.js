import React from 'react'
import projectStyles from '../styles/projects.css'
import Onelinr from './assets/1linr.png'
import CouchGourmet from './assets/CouchGourmet.png'
import Vigor from './assets/featurepick.png'
import FlashNewz from './assets/FlashNewz.png'
import Reddit from './assets/Reddit.png'
import SunnyShelter from './assets/SunnyShelter.png'
import Modivcare from './assets/ModivcareApp.png'
import JumpTheLine from './assets/JumpTheLine.png'

export default function About(props) {
	return (
<React.Fragment>
  <ul class='projectsLinks'>
		<li className="projectLink">
			<div className="titleAndPicDiv">
				<a href="https://play.google.com/store/apps/details?id=com.hunterwallen.reactnativefirebase" target='_blank' className="projectTitles">Modivcare
				<img src={Modivcare} alt='Modivcare' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
				<p className="projectInfo">React Native Enterprise Application built in Typescript. Integrates numerous back-end API's and microservices to support high volume usage and secure transmission of confidential data. Utilizes Redux for state management. Modivcare's flagship non-emergency medical transportation application.</p>
				<div className='doubleRepoDiv'>
					<a href="https://www.modivcare.com/" className="gitRepoLinks">Modivcare.com</a>
				</div>
			</div>
		</li>
		<li className="projectLink">
			<div className="titleAndPicDiv">
				<a href="https://play.google.com/store/apps/details?id=com.hunterwallen.reactnativefirebase" target='_blank' className="projectTitles">Jump The Line
				<img src={JumpTheLine} alt='Jump The Line' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
				<p className="projectInfo">React Native Enterprise Application built in Javascript. Integrates multiple back-end API's and third party libraries to support consistent and reliable service. JumpTheLine is at the forefront of improving social engagements. Need to JumpTheLine and save time? We got you.</p>
				<div className='doubleRepoDiv'>
					<a href="https://gojumptheline.io/" className="gitRepoLinks">GoJumpTheLine.io</a>
				</div>
			</div>
		</li>
		<li className="projectLink">
			<div className="titleAndPicDiv">
				<a href="https://play.google.com/store/apps/details?id=com.hunterwallen.reactnativefirebase" target='_blank' className="projectTitles">Vigor
				<img src={Vigor} alt='Vigor' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
				<p className="projectInfo">React Native application built to track refills for medications. Authentication built using Google Firebase. Currently hosted on Google Play Store. Backend API built using Java/Spring that stores medication information in a PostgreSQL Database.</p>
				<div className='doubleRepoDiv'>
					<a href="https://github.com/hunterwallen/vigor_react_native" className="gitRepoLinks">Git Repo Front End</a>
					<a href="https://github.com/hunterwallen/Spring-React-Stack" className="gitRepoLinks">Git Repo Back End</a>
				</div>
			</div>
		</li>
		<li className="projectLink">
			<div className="titleAndPicDiv">
				<a href="https://reddit-two-point-oh-react.herokuapp.com/" target='_blank' className="projectTitles">Reddit 2.0
				<img src={Reddit} alt='Reddit 2.0' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
		    	<p className="projectInfo">Message board application built using a Ruby on Rails and PostgresQL API and a React front end. This application can be found in two repos in my github below. The front and back end are both hosted separately via Heroku.</p>
				<div className='doubleRepoDiv'>
		    		<a href="https://github.com/hunterwallen/reddit_clone_frontend" className="gitRepoLinks">Git Repo Front End</a>
					<a href="https://github.com/hunterwallen/reddit_clone_backend" className="gitRepoLinks">Git Repo Back End</a>
				</div>
			</div>
		</li>
		<li className="projectLink">
			<div className="titleAndPicDiv">
			    <a href="https://thecouchgourmet.herokuapp.com/" target='_blank' className="projectTitles">The Couch Gourmet
					<img src={CouchGourmet} alt='The Couch Gourmet' className="appPic" />
				</a>
				</div>
			<div className="infoRepoDiv">
		    	<p className="projectInfo">Restaurant review single-page application. Full-stack application built using the MERN stack and integrating mulitple React Components, express controllers, MongoDB Atlas collections and CSS animations. I was responsible for writing the React code and the vast majority of the back-end functionality. My partner handled the CSS styling and modal animations.</p>
		     	<a href="https://github.com/hunterwallen/the_couch_gourmet" className="gitRepoLinks">Git Repo</a>
			</div>
		</li>
		<li className="projectLink">
			<div className="titleAndPicDiv">
			    <a href="https://sunnyanimalshelter.herokuapp.com/" target='_blank' className="projectTitles">Sunny Animal Shelter
					<img src={SunnyShelter} alt='Sunny Animal Shelter' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
			    <p className="projectInfo">Full-stack application built using the MERN stack. This app demonstrates full CRUD functionality. The CSS styling is responsive and was completed primarily using Flexbox with mobile first design. I was responsible for building this in a grand total of 4 hours.</p>
			    <a href="https://github.com/hunterwallen/animal_shelter" className="gitRepoLinks">Git Repo</a>
			</div>
		</li>
		<li className="projectLink">
			<div className="titleAndPicDiv">
			    <a href="https://shielded-badlands-55529.herokuapp.com/gatekeeper" target='_blank' className="projectTitles">1LiNR
					<img src={Onelinr} alt='1LiNR' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
			    <p className="projectInfo">Social media application that operates under the premise that less is more. This application uses Express, Node.js, MongoDB Atlas and EJS to create a multi-page experience.</p>
			    <a href="https://github.com/hunterwallen/1LINR" className="gitRepoLinks">Git Repo</a>
			</div>
		</li>
		<li className="projectLink">
			<div className="titleAndPicDiv">
				<a href="https://boring-booth-b430fc.netlify.app/" target='_blank' className="projectTitles">FlashNewz
					<img src={FlashNewz} alt='FlashNewz' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
			     <p className="projectInfo">This application pulls information from the New York Times API and displays them in a simple, easy to digest format.</p>
		    	 <a href="https://github.com/hunterwallen/flashNewz" className="gitRepoLinks">Git Repo</a>
			</div>
		</li>
	</ul>
</React.Fragment>
	);
}
