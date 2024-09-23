import "./App.css";
import "./darkMode.css";
// import ParticleBackground from "./ParticleBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
// import Projects from "./pages/Projects";
// import { Poetry } from "./pages/Poems";
import { Footer } from "./components/Footer";
import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa6"
import { BsFillSunFill } from "react-icons/bs";
// import SinglePost from "./pages/SinglePost";

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <div className="App">
      <div className={`App ${theme}`}>
        <Router>
          <Navbar />
          {theme === "dark" ? <button className="theme-button" onClick={toggleTheme}><BsFillSunFill opacity="1" size={40} width="fit-content" height="fit-content" color="white" /></button> : <button className="theme-button" onClick={toggleTheme}><FaMoon size={40} width="fit-content" position="absolute" inset="0" height="fit-content" color="black" /></button>}
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/:id" element={<SinglePost />} /> */}
            {/* <Route path="/blogs" element={<Blogs />} /> */}
            {/* <Route path="/poetry" element={<Poetry />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
      <div className="background">
      </div>
    </div>
  );
}

export default App;