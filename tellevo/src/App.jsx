import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './Routes';
import './App.css';
import Navbar from './components/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import useAuth from './hooks/useAuth';
// import UserProvider from './providers/UserProvider';


function App() {
  // const { currentUser } = useAuth();
  // console.log("AAAAAAH", currentUser);

  return (
    <div className="App">
      {/* <UserProvider> */}
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Rutas />
        </AuthContextProvider>
      </Router>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;

