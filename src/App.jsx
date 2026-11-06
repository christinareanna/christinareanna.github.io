import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/Nav';
import Home from './pages/Home';
import Photos from './pages/Photography';
import MusicPlayer from './components/MusicPlayer';
import './index.css';


const App = () => {

  return (
    <>
      <Router>
        {/* <Nav /> */}
        {/* <MusicPlayer /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path='/photography' element={<Photos />} /> */}
        </Routes>
      </Router>
      <div className="container">
        <div className="card text-center mt-5 bg-dark">
          <div className="card-header text-white" style={{backgroundColor: '#11d929'}}>
            <h1 className="display-6">Echoes of Alra</h1>
          </div>
          <div className="card-body">
            <Game />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;