import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

// import Header from './components/Header'
import Home from './components/LandingPage'
import About from './components/About'
import Contact from './components/Contact'
import MyWork from './components/MyWork'
import Logo from './components/assets/logo.png'
import headerstyle from './styles/header.css'




function App() {

  const [location, setLocation] = useState('/')

  useEffect(()=> {
    const storedLocation = localStorage.getItem("location") || '/'
    setLocation(storedLocation)
    console.log(location);
  }, [])

  useEffect(()=> {
    localStorage.setItem("location", location)
    document.querySelector('.active').classList.remove('active')
    document.getElementById(`${location}`).classList.add('active')
    console.log(location);
  }, [location])


  let changeActive = (event) => {
    if(event.currentTarget.id === "logoHome") {
      setLocation("/")
    } else {
      setLocation(event.target.id)
    }
  }

  return (
    <div className="App">

        <Router>
          <div className="topNav">
            <Link to={'/'} className="homeLogoBtn" onClick={changeActive} id="logoHome">
              <img src={Logo} alt='H' className='headerLogo'/>
            </Link>
            <div className='topNavLinks'>
              <Link to={'/'} className='headerLinks active' onClick={changeActive} id='/'>Home</Link>
              <Link to={'/portfolio'} className='headerLinks' onClick={changeActive} id='/portfolio'>Portfolio</Link>
              <Link to={'/about'} className='headerLinks' onClick={changeActive} id='/about'>About</Link>
              <Link to={'/contact'} className='headerLinks' onClick={changeActive} id='/contact'>Contact</Link>
            </div>

          </div>
          <div className="topPadding"></div>

            <Route exact path="/" render={(props) => <Home />} />
            <Route path="/portfolio"
            render={(props) => <MyWork />} />
  					<Route path="/about" render={(props) => <About />} />
  					<Route path="/contact" render={(props) => <Contact />} />

        </Router>

    </div>
  );
}

export default App;
