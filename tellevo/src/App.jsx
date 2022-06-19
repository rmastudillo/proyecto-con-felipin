import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './Routes';
import './App.css';
import Navbar from './components/Navbar'


function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Rutas />
      </Router>
    </div>
  );
}

export default App;

