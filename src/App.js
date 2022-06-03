import "./App.css";
// import Card from "react-bootstrap/Card"
import ParticleBackground from "./ParticleBackground";
// import photochristmas from "./photochristmas.jpg";
// import react from "./react.png"
// import photo5 from "./photo5.jpg"
// import github from "./github.png"
// import heroku from "./heroku.png"
// import instagram from "./instagram.png"
// import facebook from "./facebook.png"
// import javascript from "./javascript.png"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
// import ContactForm from "./components/ContactForm";
// import thinkful from "./thinkful.png"
// import accenture from "./accenture.png"
import Navbar from "./components/Navbar"

// added the nav bar
function App() {
  return (
    <div className="App">
      <div className="foreground">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Home />} />
              {/* <Route element={<Home />} /> */}
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>

        {/* <div>
          <img className="photo5" src={photo5} alt="me"></img>
        </div> */}

        {/* ABOUT ME INFOOOOO */}

        {/* <h1 id="about" style={{ textDecoration: "underline" }}>About Me</h1>
        <Card style={{ maxWidth: '300px', display: "inline-block", position: "initial", backgroundColor: "lightgrey", border: "2px lightgrey groove", margin: "10px" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "32px" }}>I'm Christina.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "24px" }}>Software Engineer</Card.Subtitle>
            <Card.Text>
              <img className="thinkful" src={thinkful} alt="thinkful" style={{ width: "300px", height: "100px" }}></img>
              Graduate of Thinkful Bootcamp.
              <img className="thinkful" src={accenture} alt="accenture" style={{ width: "250px", padding: "20px" }}></img>
              Apprentice at Accenture.
            </Card.Text>
          </Card.Body>
        </Card> */}

        {/* DISCOVER INFOOOO */}
        {/* <div>
          <h1 id="discover" style={{ textDecoration: "underline" }}>Discover</h1>
          <Card style={{ maxWidth: '300px', display: "inline-block", position: "initial", backgroundColor: "lightgrey", border: "2px lightgrey groove", padding: "0 10px", margin: "0 10px" }}>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Just graduated from Thinkful in Feb '22.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Click to see my favorite projects from school!</Card.Subtitle>
              <Card.Text className="card-text">
                <a href="https://github.com/stars/christinareanna/lists/react-projects" rel="noreferrer noopener" target="_blank"><img className="icon" src={react} alt="react" style={{ width: "100px", padding: "0 10px" }} /></a>
                <a href="https://github.com/christinareanna" rel="noreferrer noopener" target="_blank"><img className="icon" src={github} alt="github" style={{ width: "100px", padding: "0 20px" }} /></a>
                <a href="https://github.com/stars/christinareanna/lists/javascript-projects" rel="noreferrer noopener" target="_blank"><img className="icon" src={javascript} alt="javascript" style={{ width: "100px", padding: "0 10px" }} /></a>
                <a href="https://final-capstone-front-end.herokuapp.com/dashboard" rel="noreferrer noopener" target="_blank"><img className="icon" src={heroku} alt="heroku" style={{ width: "100px", padding: "0 10px" }} /></a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div> */}

        {/* MORE DISCOVER INFOOOO */}

        {/* <div>
          <Card style={{ maxWidth: '300px', display: "inline-block", position: "initial", backgroundColor: "lightgrey", border: "2px lightgrey groove", padding: "0 10px", margin: "30px 0" }}>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Social Media</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Feel free to follow my journey.</Card.Subtitle>
              <Card.Text className="card-text">
                <a href="https://www.facebook.com/chrissyreanna/" rel="noreferrer noopener" target="_blank"><img className="icon" src={facebook} alt="facebook" style={{ width: "100px", padding: "0 20px" }} /></a>
                <a href="https://www.instagram.com/wanderlustclusterfuck/" rel="noreferrer noopener" target="_blank"><img className="icon" src={instagram} alt="instagram" style={{ width: "100px", padding: "0 20px" }} /></a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div> */}

        {/* CONTACT INFO */}
        {/* <h1 id="contact" style={{ textDecoration: "underline" }}>Contact</h1> */}
        {/* <ContactForm /> */}
      </div>
      <div className="background">
        <ParticleBackground />
      </div>
    </div>
  );
}

export default App;
