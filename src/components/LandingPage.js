
import React from "react";
import homeStyle from "../styles/home.css"
import DownArrow from "./assets/downarrow.png"
import BlackDownArrow from "./assets/blackdownarrow.png"
import Express from "./assets/express.png"
import Javascript from "./assets/javascript.png"
import Mongo from "./assets/mongodb.png"
import Node from "./assets/node.png"
import Postgres from "./assets/postgres.png"
import Rails from "./assets/rails.png"
import ReactLogo from "./assets/react.png"
import ReactNative from "./assets/reactnative.png"
import ChallengePic from "./assets/challengepic.jpeg"
import Github from "./assets/github.png";
import LinkedIn from "./assets/linkedin.png";
import Gmail from "./assets/gmail.png";

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
					<div className="div2Text">
						<h1 className="secondDivText">So far, I have experience with...</h1>
					</div>
					<div className="div2Logos">
						<img src={Javascript} alt="Javascript" className="techLogo" />
						<img src={Express} alt="Express" className="techLogo" />
						<img src={Mongo} alt="MongoDB" className="techLogo" />
						<img src={Node} alt="Node" className="techLogo" />
						<img src={ReactLogo} alt="React.js" className="techLogo" />
						<img src={Postgres} alt="PostgresQL" className="techLogo" />
						<img src={Rails} alt="Rails" className="techLogo" />
						<img src={ReactNative} alt="React Native" className="techLogo" />
					</div>
					<div className="div2SecondText">
						<h1 className="secondDivText">...and I'm learning more everyday.</h1>
						<img src={BlackDownArrow} alt="down arrow" className="downArrow2"/>
					</div>
				</div>
				<div className="homeDiv div3">

					<div className="leftDiv3">
						<h1>There's nothing I enjoy more than a good challenge.</h1>
						<img src={DownArrow} alt="down arrow" className="downArrow"/>
					</div>
				</div>
				<div className="homeDiv div4">

						<h3>So relax, take a look around. If you like what you see and would like to discuss opportunities or you just want to say hello, feel free to reach out via my contact page. I look forward to hearing from you. </h3>

						<div className="landingPageContactDiv">
							<h2>You can also find me here!</h2>
							<div className="landingPageIconDiv">
					      <a href= 'mailto: hunterwallen67@gmail.com' class="emailLink">
								<img src={Gmail} alt="Gmail" className='landingPageContactIcons' />
								</a>
								<br/>
								<a href='https://github.com/hunterwallen' target="_blank">
									<img src={Github} alt="GitHub" className='landingPageContactIcons' />
								</a>
								<br/>
								<a href='https://www.linkedin.com/in/hunter-wallen' target="_blank">
									<img src={LinkedIn} alt="LinkedIn" className='landingPageContactIcons' />
								</a>
								<br/>
							</div>
						</div>
				</div>
			</div>
		</React.Fragment>
	);
}
