
import './App.css';
import Forms from './components/Forms';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
// import Alert from './components/Alert';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#353740';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      <Navbar mode={mode} title="TextUtils" About="About" toggleMode={toggleMode} />
      {/* <Alert alert="This is an alert!"/> */}
      <div className="container">
        {/* <Forms text1="Text Area" mode={mode} toggleMode={toggleMode} /> */}
        {/* <About mode={mode} /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Forms mode={mode} />} />
            <Route path="/About" element={<About mode={mode} />} />
          </Routes>
        </BrowserRouter>


      </div>
    </>
  );
}

export default App;