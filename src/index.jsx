// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// import React from 'react';
// import { createRoot } from 'react-dom/client'; // 🟢 Updated import
// import App from './App';
// import './index.css'; // or your global styles
// import { ThemeProvider } from '@material-tailwind/react';

// const container = document.getElementById('root');
// const root = createRoot(container); // 🟢 Create the root

// root.render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);