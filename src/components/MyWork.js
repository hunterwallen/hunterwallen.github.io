import React from 'react'
import EmissionResponder from './assets/EmissionResponder.png'
import Modivcare from './assets/ModivcareApp.png'
import JumpTheLine from './assets/JumpTheLine.png'
import HelloAlice from './assets/HelloAlice.png'

export default function About(props) {
	return (
<React.Fragment>
  <ul class='projectsLinks'>
	<li className="projectLink">
			<div className="titleAndPicDiv">
				<a href="https://play.google.com/store/apps/details?id=com.mobile_canary" target='_blank' className="projectTitles">Emission Responder Kit
				<img src={EmissionResponder} alt='Project Canary' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
				<p className="projectInfo">React Native Application built using Typescript, Context, Mapbox, Plotly and Turf.js. Integrates via BLE with an IoT methane measurement sensor to allow for complex data management, modeling and visualization.</p>
				<div className='doubleRepoDiv'>
					<a href="https://www.projectcanary.com/" className="gitRepoLinks">ProjectCanary.com</a>
				</div>
			</div>
		</li>
		<li className="projectLink">
			<div className="titleAndPicDiv">
				<a href="https://play.google.com/store/search?q=hello%20alice&c=apps&hl=en_US&gl=US" target='_blank' className="projectTitles">Hello Alice
				<img src={HelloAlice} alt='Hello Alice' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
				<p className="projectInfo">React Native Application built using Javascript, using the Context API for state management and integrating with GraphQL as well as REST architecture. Integrates OAuth2.0 level authentication to ensure bank level security. Hello Alice provides solutions and funding for small business owners with a focus on the new majority.</p>
				<div className='doubleRepoDiv'>
					<a href="https://helloalice.com/" className="gitRepoLinks">HelloAlice.com</a>
				</div>
			</div>
		</li>
		<li className="projectLink">
			<div className="titleAndPicDiv">
				<a href="https://play.google.com/store/apps/details?id=com.modivcareriderapp&hl=en_US&gl=US" target='_blank' className="projectTitles">Modivcare
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
				<a href="https://play.google.com/store/apps/details?id=com.jumptheline.app&hl=en_US&gl=US" target='_blank' className="projectTitles">Jump The Line
				<img src={JumpTheLine} alt='Jump The Line' className="appPic" />
				</a>
			</div>
			<div className="infoRepoDiv">
				<p className="projectInfo">React Native Application built in Javascript. Integrates multiple back-end API's and third party libraries to support consistent and reliable service. JumpTheLine is at the forefront of improving social engagements. Need to JumpTheLine and save time? We got you.</p>
				<div className='doubleRepoDiv'>
					<a href="https://gojumptheline.io/" className="gitRepoLinks">GoJumpTheLine.io</a>
				</div>
			</div>
		</li>
	</ul>
</React.Fragment>
	);
}
