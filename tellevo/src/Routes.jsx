/* modulos necesarios para las rutas */
import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
/* Rutas */
import Login from './views/Login';
import LandingPage from './views/LandingPage'
import Register from './views/Register';
import TripsView from './views/TripsView';
import Trip from './components/Trip';
import Profile from './components/user/Profile';
import CreateTrip from './views/CreateTrip';
import EditUserForm from './components/user/EditUserForm';

/*      */

function Rutas() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/register" element={<Register />} />

      {/* <Route path="/trips/:user_id" element={<TripsView />} /> */}
      <Route path="/trip/:id" element={<Trip />} />
      <Route path="/user/:id" element={<Profile />}/>
      <Route path="/user/edit/:id" element={<EditUserForm />}/>

      <Route path="/trips" element={<TripsView />} />
     
      <Route exact path="/createtrip" element={<CreateTrip />} />

    </Routes>
  );
}

export default function RoutesWrapper() {
  return (
    <Rutas />
  );
}
