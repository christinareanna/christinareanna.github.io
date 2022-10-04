import "./App.css";
import ParticleBackground from "./ParticleBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import { Footer } from "./components/Footer";

// added the nav bar
function App() {
  return (
    <div className="App">
      <div className="foreground">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
      <div className="background">
        <ParticleBackground />
      </div>
    </div>
  );
}

export default App;