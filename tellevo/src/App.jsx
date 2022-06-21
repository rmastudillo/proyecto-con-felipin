import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './Routes';
import './App.css';
import Navbar from './components/Navbar'
import UserProvider from './providers/UserProvider';


function App() {

  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Navbar />
          <Rutas />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

