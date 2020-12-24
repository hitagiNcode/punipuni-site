import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import JobsPage from "./pages/JobsPage";
import Logo from "./assets/img/logoicon.png";
import FromhellPage from "./pages/FromhellPage";
import PuzzylesPage from "./pages/PuzzylesPage";
import GunzFatePage from "./pages/GunzFatePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "PuniPuni Studio",
      headerLinks: [{ title: "Home", path: "/" }],
      home: {
        title: "Fun with friends",
        subTitle: "Games that makes difference",
        text: "",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0 b-background deneme" fluid={true}>
          <Navbar
            className="border-bottom navbar-dark"
            bg="transparent"
            expand="lg"
          >
            <Link className="nav-link text-light p-0" to="/">
              <Navbar.Brand>
                <img
                  className="img-fluid rounded logo-img"
                  src={Logo}
                  alt="PuniPuni Header Logo"
                ></img>
                <span className="text-light header-text">PuniPuni Studio</span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              className="border-0 "
              aria-controls="navbar-toggle"
            />
            <Navbar.Collapse className="" id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-light " to="/">
                  Home
                </Link>
                <div className="dropdown">
                  <button
                    className="btn btn-default text-light dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Games
                  </button>
                  <div
                    className="dropdown-menu b-background border border-light"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      className="dropdown-item nav-link text-light "
                      to="/fromhell"
                    >
                      Scary Family
                    </Link>
                    <Link
                      className="dropdown-item nav-link text-light  "
                      to="/puzzyles"
                    >
                      Puzzyles
                    </Link>
                    <Link
                      className="dropdown-item nav-link text-light  "
                      to="/gunzfate"
                    >
                      Gunz Fate
                    </Link>
                  </div>
                </div>
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
                <Link className="nav-link text-light" to="/jobs">
                  Jobs
                </Link>
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
                <Link className="nav-link text-info" to="/privacy">
                  Privacy
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route path="/punipuni-site" render={() => <HomePage />} />
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/jobs" render={() => <JobsPage />} />
          <Route path="/fromhell" render={() => <FromhellPage />} />
          <Route path="/puzzyles" render={() => <PuzzylesPage />} />
          <Route path="/gunzfate" render={() => <GunzFatePage />} />
          <Route path="/privacy" render={() => <PrivacyPage />} />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
