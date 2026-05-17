import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GridLayout from './pages/gridLayout';
import Home from "./pages/Home.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GridLayout />} />
    </Routes>
  );
};

const App = () => {

  return (
    <div className="App">
        <Router>
          <Home />
          <AppRoutes />
        </Router>
    </div>
  );
};

export default App;