// import "./App.css";
// import "./darkMode.css";
// // import ParticleBackground from "./ParticleBackground";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// // import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// import Portfolio from "./pages/Portfolio";
// import Navbar from "./components/Navbar";
// // import Projects from "./pages/Projects";
// // import { Poetry } from "./pages/Poems";
// import { Footer } from "./components/Footer";
// import React, { useState, useEffect } from "react";
// import { FaMoon } from "react-icons/fa6"
// import { BsFillSunFill } from "react-icons/bs";
// // import SinglePost from "./pages/SinglePost";
// import PasswordPopup from './PasswordPopup';

// function App() {
//   const [theme, setTheme] = useState('light');
//   const [isPopupOpen, setIsPopupOpen] = useState(true); // Start with the popup open
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleValid = () => {
//     localStorage.setItem('isAuthenticated', 'true');
//     setIsAuthenticated(true);
//     setIsPopupOpen(false);
//   }

//   useEffect(() => {
//     const authenticated = localStorage.getItem('isAuthenticated') === 'true';
//     setIsAuthenticated(authenticated);
//     if (authenticated) {
//       setIsPopupOpen(false); // Close the popup if authenticated
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//     } else {
//       setTheme('light');
//     }
//   };

//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);


//   const handlePortfolioAccess = () => {
//     if (!isAuthenticated) {
//       setIsPopupOpen(true); // Show popup if not authenticated
//     }
//   }

//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         {isPopupOpen && !isAuthenticated && (
//           <>
//             <div className="backdrop" onClick={() => setIsPopupOpen(false)} />
//             <PasswordPopup onClose={() => setIsPopupOpen(false)} onValid={handleValid} />
//           </>
//         )}

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/portfolio"
//             element={
//               isAuthenticated ? (
//                 <Portfolio />
//               ) : (
//                 // Redirect to home or show password popup if not authenticated
//                 <Navigate to="/" onClick={handlePortfolioAccess} />
//               )
//             }
//           />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Routes>
//         {theme === "dark" ? (
//           <button className="theme-button" onClick={toggleTheme}>
//             <BsFillSunFill opacity="1" size={40} color="white" />
//           </button>
//         ) : (
//           <button className="theme-button" onClick={toggleTheme}>
//             <FaMoon size={40} color="black" />
//           </button>
//         )}
//         <Footer />
//       </Router>
//       <div className="background" />
//     </div>
//   );
// };

// export default App;





// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import PasswordPopup from './PasswordPopup';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import { Footer } from "./components/Footer";
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import './App.css';

const AppRoutes = ({ isAuthenticated, setIsPopupOpen, setIsAuthenticated }) => {
  const location = useLocation();

  useEffect(() => {
    // Open the popup only if navigating to the portfolio route and not authenticated
    if (location.pathname === '/portfolio' && !isAuthenticated) {
      setIsPopupOpen(true);
    }
  }, [location.pathname, isAuthenticated, setIsPopupOpen]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/portfolio"
        element={isAuthenticated ? <Portfolio /> : <Navigate to="/" />} // Redirect if not authenticated
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const authenticated = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authenticated);
  }, []);

  const handleValid = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    setIsPopupOpen(false);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="App">
      <div className={`App ${theme}`}>
        <Router>
          <Navbar />
          {isAuthenticated && (
            <button className="theme-button" onClick={toggleTheme}>
              {theme === "dark" ? <BsFillSunFill className="theme-button" size={40} color="white" />
                :
                <FaMoon size={40} className="theme-button" width="fit-content" height="fit-content" color="black" />}
            </button>
          )}

          {isPopupOpen && !isAuthenticated && (
            <>
              <div className="backdrop" onClick={() => setIsPopupOpen(false)} />
              <PasswordPopup onClose={() => setIsPopupOpen(false)} onValid={handleValid} />
            </>
          )}

          <AppRoutes
            isAuthenticated={isAuthenticated}
            setIsPopupOpen={setIsPopupOpen}
            setIsAuthenticated={setIsAuthenticated}
          />

          <Footer />
        </Router>
        <div className="background" />
      </div>
    </div>
  );
};

export default App;