import React from "react";
import Avatar from "./assets/avatar.jpg";
import aboutStyles from '../styles/about.css'

export default function About(props) {
	return (
		<React.Fragment>
			<div className="fullAboutPage">
				<div className="aboutContent">
				<h2 className="nameTitle">A Little About Me</h2>
				<img
					src={Avatar}
					alt={"avatar"}
					className="aboutPic"
				/>
					<h1 style={{ textAlign: "center" }}>
					I am a full-stack software engineer that takes pride in delivering clean, scalable solutions. There is nothing in life that brings me more joy than the pursuit of knowledge. I consider myself to forever be a student and find great satisfaction in learning new things.
					<br/> 
					<br/>Outside of coding and developing software, I love the great outdoors. There's nothing like taking in a beautiful sunset from the top of a mountain to refresh the soul.
					<br/>
					<br/>If you have an opportunity you think I would be a good fit for, I would love to chat!
					</h1>
				</div>
			</div>
		</React.Fragment>
	);
}
