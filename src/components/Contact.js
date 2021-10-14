import React, { useState } from "react";
import Github from "./assets/github.png";
import LinkedIn from "./assets/linkedin.png";
import Gmail from "./assets/gmail.png";
import contactStyles from '../styles/contact.css'


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
		document.querySelector('#submitPost').style.cursor = "auto"
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
    <div className="contactContainer">
			<div className="topContactDiv">
				<h3 id="messageSuccess" style={{display: "none"}}>Thank you! Your message has been successfully submitted. I will be in touch soon!</h3>
				<form onSubmit={sendMessage} id='newPostForm'>
				<h1 className="formH1">Want to say hello?</h1>
	            <div className="emailContainer">
								<h3>You can use the form below to send me a message!</h3>

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
				<h1></h1>
			<div className="bottomContactDiv">
				<h2>You can also find me here!</h2>
				<div className="iconDiv">
		      <a href= 'mailto: hunterwallen67@gmail.com' class="emailLink">
					<img src={Gmail} alt="Gmail" className='contactIcons' />
					</a>
					<br/>
					<a href='https://github.com/hunterwallen' target="_blank" >
						<img src={Github} alt="GitHub" className='contactIcons' />
					</a>
					<br/>
					<a href='https://www.linkedin.com/in/hunter-wallen' target="_blank" >
						<img src={LinkedIn} alt="LinkedIn" className='contactIcons' />
					</a>
					<br/>
				</div>
			</div>
    </div>
		</React.Fragment>
	);
}
