
import React from "react";
import homeStyle from "../styles/home.css"
import DownArrow from "./assets/downarrow.png"

export default function About(props) {
	return (
		<React.Fragment>
			<div className="landingPage">
				<div className="homeDiv div1">
					<div className="div1Text">
						<h1 className="firstDivText1">My name is Hunter.</h1>
						<h3>I am a Full-Stack <br/>Software Engineer.</h3>
						<img src={DownArrow} alt="down arrow" className="downArrow"/>
					</div>

				</div>
				<div className="homeDiv div2">
				</div>
				<div className="homeDiv div3">
				</div>
				<div className="homeDiv div4">
				</div>
				<div className="homeDiv div5">
				</div>
			</div>
		</React.Fragment>
	);
}
