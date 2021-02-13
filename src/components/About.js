import React from "react";
import Avatar from "./assets/avatar.jpg";

export default function About(props) {
	return (
		<React.Fragment>
			<h1 style={{ textAlign: "center" }}>
				I'm a Software Engineer! I build applications
				<br /> for the web, focusing on scalable code
				<br /> and sharp User Interfaces and stuff!
				<br /> When I'm not working, I'm likely at
				<br /> the beach with my girlfriend and our dog.
			</h1>
			<img
				src={Avatar}
				alt={"avatar"}
				style={{
					maxWidth: "15rem",
					borderRadius: "50%",
					display: "block",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			/>
		</React.Fragment>
	);
}
