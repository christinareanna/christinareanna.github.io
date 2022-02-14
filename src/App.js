import "./App.css";
import Card from "react-bootstrap/Card"
import ParticleBackground from "./ParticleBackground";
// import photochristmas from "./photochristmas.jpg";
import react from "./react.png"
import photo5 from "./photo5.jpg"
import github from "./github.png"
import heroku from "./heroku.png"
import javascript from "./javascript.png"
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import ContactForm from "./components/ContactForm";
import thinkful from "./thinkful.png"
import accenture from "./accenture.png"


function App() {
  return (
    <div className="App">
      <div className="foreground">
        <Router>
          <Home />
        </Router>
        <header>
          Welcome to my page!
        </header>
          Still under construction for mobile dev purposes
        <div>
          <img className="photo5" src={photo5} alt="me"></img>
        </div>
        <h1 id="about" style={{ textDecoration: "underline" }}>About Me</h1>
        <Card style={{ width: '24rem', display: "inline-block", backgroundColor: "lightgrey", border: "2px lightgrey groove", padding: "20px", margin: "30px 0" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "32px" }}>I'm Christina.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "24px" }}>Software Engineer</Card.Subtitle>
            <Card.Text>
              <img className="thinkful" src={thinkful} alt="thinkful" style={{ width: "300px", height: "100px", padding: "0 20px" }}></img>
              Graduate of Thinkful Bootcamp.
              <img className="thinkful" src={accenture} alt="accenture" style={{ width: "250px", padding: "40px 40px 20px" }}></img>
              Apprentice at Accenture.
            </Card.Text>
          </Card.Body>
        </Card>
        <h1 id="discover" style={{ textDecoration: "underline" }}>Discover</h1>
        <Card style={{ width: '24rem', display: "inline-block", backgroundColor: "lightgrey", border: "2px lightgrey groove", padding: "20px", margin: "30px 0", textAlign: "center" }}>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>Just graduated from Thinkful in Feb '22.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Click to see my favorite projects from school!</Card.Subtitle>
            <Card.Text className="card-text">
              <a href="https://github.com/stars/christinareanna/lists/react-projects" rel="noreferrer noopener" target="_blank"><img className="react" src={react} alt="react" style={{ width: "100px", padding: "0 20px" }} /></a>
              <a href="https://github.com/christinareanna" rel="noreferrer noopener" target="_blank"><img className="github" src={github} alt="github" style={{ width: "100px", padding: "0 20px" }} /></a>
              <a href="https://github.com/stars/christinareanna/lists/javascript-projects" rel="noreferrer noopener" target="_blank"><img className="javascript" src={javascript} alt="javascript" style={{ width: "100px", padding: "0 20px" }} /></a>
              <a href="https://final-capstone-front-end.herokuapp.com/dashboard" rel="noreferrer noopener" target="_blank"><img className="heroku" src={heroku} alt="heroku" style={{ width: "100px", padding: "0 20px" }} /></a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '24rem', display: "inline-block", backgroundColor: "lightgrey", border: "2px lightgrey groove", padding: "20px", margin: "30px 0" }}>
          <Card.Body>
            <Card.Title>I'm Christina.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Software Engineer</Card.Subtitle>
            <Card.Text>
              <img className="thinkful" src={thinkful} alt="thinkful" style={{ width: "300px", padding: "0 20px" }}></img>
              Graduate of Thinkful Bootcamp.
              <img className="accenture" src={accenture} alt="accenture" style={{ width: "300px", padding: "0 20px" }}></img>
              Apprentice at Accenture.
            </Card.Text>
          </Card.Body>
        </Card>
        <h1 id="contact" style={{ textDecoration: "underline" }}>Contact</h1>
        <ContactForm />
      </div>
      <div className="background">
        <ParticleBackground />
      </div>
    </div>
  );
}

export default App;
