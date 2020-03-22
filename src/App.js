import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import  Navbar  from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import JobsPage from './pages/JobsPage';
import Logo from './assets/img/logoicon.png';
import FromhellPage from './pages/FromhellPage';
import PuzzylesPage from './pages/PuzzylesPage';
import GunzFatePage from './pages/GunzFatePage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "PuniPuni Studios",
      headerLinks: [
        {title: 'Home', path: '/'}
      ],
      home: {
        title: 'Fun with friends',
        subTitle: 'Games that makes difference',
        text: ''
      }
    }
  }
  render () {
    return (
      <Router>
       <Container className="p-0 b-background" fluid={true}>

        <Navbar className="border-bottom navbar-dark" bg="transparent" expand="lg"> 
          <Navbar.Brand><img className="img-fluid rounded logo-img" src={Logo} alt=""></img>
          <a href="/" className="text-light header-logo">PuniPuni Studios</a></Navbar.Brand> 
          <Navbar.Toggle className="border-0 "  aria-controls="navbar-toggle" /> 
          <Navbar.Collapse className="" id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link text-light " to="/">Home</Link>
              <div className="dropdown">
              <button className="btn btn-default text-light dropdown-toggle " 
              type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
              aria-expanded="false">Games</button>
             <div className="dropdown-menu b-background" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item text-light" href="/fromhell">From Hell</a>
              <a className="dropdown-item text-light" href="/puzzyles">Puzzyles</a>
              <a className="dropdown-item text-light" href="/gunzfate">Gunz Fate</a>
               </div>
              </div>
              <Link className="nav-link text-light" to="/about">About</Link>
              <Link className="nav-link text-light" to="/jobs">Jobs</Link>
              <Link className="nav-link text-light" to="/contact">Contact</Link>
              <Link className="nav-link text-info" to="/privacy">Privacy</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <HomePage 
        title={this.state.home.title} 
        subTitle={this.state.home.subTitle} 
        text={this.state.home.text} />} />
        <Route path="/about"  render={() => <AboutPage /> } />
        <Route path="/contact" render={() => <ContactPage /> } />
        <Route path="/jobs" render={() => <JobsPage /> } />
        <Route path="/fromhell" render={() => <FromhellPage /> } />
        <Route path="/puzzyles" render={() => <PuzzylesPage /> } />
        <Route path="/gunzfate" render={() => <GunzFatePage /> } />
        <Route path="/privacy" render={() => <PrivacyPage /> } />
       
        <Footer /> 
          
       </Container>
      </Router>
    );
  }
}

export default App;
