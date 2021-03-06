/* modulos necesarios para las rutas */
import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
/* Rutas */
import Login from './views/user-crud/Login';
import Register from './views/user-crud/Register';
import TripsView from './views/trip-crud/TripsView';
import LandingPage from './views/LandingPage'
import Trip from './components/Trip';
import Profile from './components/user/Profile';
import CreateTrip from './views/trip-crud/CreateTrip';
import EditUserForm from './components/user/EditUserForm';
import Chat from './views/Chat';

/*      */

function Rutas() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/register" element={<Register />} />

      {/* <Route path="/trips/:user_id" element={<TripsView />} /> */}
      <Route path="/trip/:id" element={<Trip />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/user/edit" element={<EditUserForm />} />

      <Route path="/trips" element={<TripsView />} />

      <Route exact path="/createtrip" element={<CreateTrip />} />
      <Route exact path="/trip/:id/chat" element={<Chat />} />

    </Routes>
  );
}

export default function RoutesWrapper() {
  return (
    <Rutas />
  );
}
