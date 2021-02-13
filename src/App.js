import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import MyWork from './components/MyWork'
import Logo from './components/assets/logo.png'
import headerstyle from './styles/header.css'




function App() {
  let changeActive = (event) => {
    document.querySelector('.active').classList.remove('active')
    event.currentTarget.classList.add('active')
  }

  return (
    <div className="App">

        <Router>
          <div className="topNav">
            <Link to={'/'} className="homeLogoBtn">
              <img src={Logo} alt='H' className='headerLogo'/>
              <h1 className="headerNameBadge">Hunter Wallen</h1>
            </Link>
            <div className='topNavLinks'>
              <Link to={'/'} className='headerLinks active' onClick={changeActive}>Home</Link>
              <Link to={'/portfolio'} className='headerLinks' onClick={changeActive}>Portfolio</Link>
              <Link to={'/about'} className='headerLinks' onClick={changeActive}>About</Link>
              <Link to={'/contact'} className='headerLinks' onClick={changeActive}>Contact</Link>
            </div>
          </div>


            <Route path="/portfolio"
            render={(props) => <MyWork />} />
  					<Route path="/about" render={(props) => <About />} />
  					<Route path="/contact" render={(props) => <Contact />} />

        </Router>

    </div>
  );
}

export default App;
