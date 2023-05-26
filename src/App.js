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
import { Poetry } from "./pages/Poems";
import { Footer } from "./components/Footer";
import React, { useState, useEffect } from "react";

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
          <Navbar/>
        {theme === "light" ? <button onClick={toggleTheme}>Dark Mode</button> : <button onClick={toggleTheme}>Light Mode</button>}
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/blogs" element={<Blogs />} /> */}
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
      <div className="background">
        {/* <ParticleBackground /> */}
      </div>
    </div>
  );
}

export default App;