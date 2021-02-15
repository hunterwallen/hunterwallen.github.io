import React, { useState } from "react";
import Avatar from "./assets/avatar.jpg";


export default function About(props) {

	const [subject, setSubject] = useState('')
	const [name, setName] = useState('')
	const [contact, setContact] = useState('')
	const [time, setTime] = useState('')
	const [body, setBody] = useState('')



	const changeSubject = () => {
		setSubject(document.querySelector('#subject').value)
	}
	const changeName = () => {
		setName(document.querySelector('#name').value)
	}
	const changeContact = () => {
		setContact(document.querySelector('#contactInfo').value)
	}
	const changeTime = () => {
		setTime(document.querySelector('#timeToResponsd').value)
	}
	const changeBody = () => {
		setBody(document.querySelector('#body').value)
	}

	const submit = (event) => {
		event.preventDefault()
		sendMessage(event)
	}

	const sendMessage = (event) => {
		event.preventDefault()
		document.querySelector('#submitPost').style.pointerEvents = "none"
		let templateParams = {
			subject: subject,
			name: name,
			contact: contact,
			time: time,
			body: body
		}

		window.emailjs.send('service_ewz739f', 'template_099f0qn', templateParams).then((response)=> {
			document.querySelector('#newPostForm').reset()
			document.querySelector('#newPostForm').style.display = 'none'
			document.querySelector('#messageSuccess').style.display = 'flex'
		}).catch((error) => {
			alert('We hit a snag! Please try again.')
		})

	}


	return (
		<React.Fragment>
    <div style={{ textAlign: "center" }}>
      <h1>Want to say hello?</h1>
			<div className="topContactDiv">
				<h3 id="messageSuccess" style={{display: "none"}}>Thank you! Your message has been successfully submitted. I will be in touch soon!</h3>
				<form onSubmit={sendMessage} id='newPostForm'>
	            <div className="container emailContainer">
	              <p id="topP">Let's connect!</p>

	              <label htmlFor="subject"><b>Subject</b></label>
	              <input type="text" placeholder="Subject" id="subject" onChange={changeSubject}/>

								<label htmlFor="name"><b>Your Name</b></label>
	              <input type="text" placeholder="Who are you?" id="name" onChange={changeName}/>

	              <label htmlFor="contactInfo"><b>Your Contact Info</b></label>
	              <input type="text" placeholder="Phone # / Email" id="contactInfo" onChange={changeContact}/>

								<label htmlFor="timeToResponsd"><b>What days/times work for you?</b></label>
	              <input type="text" placeholder="When should I reach out?" id="timeToResponsd" onChange={changeTime}/>

	              <label htmlFor="body"><b>Message</b></label>
	              <textarea placeholder="Let's connect!" id="body" onChange={changeBody}/>


	              <input className="myButton" type="submit" id="submitPost" value="Send" onClick={submit}/>
	            </div>

	          </form>
					</div>
				<h1>OR</h1>
			<div className="bottomContactDiv">
				<h2>You can find me here too!</h2>
	      <h2>Hunter Wallen</h2>
	      <h3>hunterwallen67@gmail.com</h3>
				<a href='https://www.linkedin.com/in/hunter-wallen'>LinkedIn</a>
				<br/>
				<a href='https://github.com/hunterwallen'>GitHub</a>
	      
			</div>
    </div>
		</React.Fragment>
	);
}
