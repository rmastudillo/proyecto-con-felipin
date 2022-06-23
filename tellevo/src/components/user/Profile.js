import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate, renderMatches } from 'react-router-dom';
import { DeleteButton, EditButton, SessionButton, BackgroundProfile, UserInfo,
Username, Name, Email, Driver, ActionButtons } from './styled/Profile.styled';
// import { userContext, toggleUserContext } from '../../providers/UserProvider';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const navigate = useNavigate();
  // const user = useContext(userContext);
  // const userLogin = useContext(toggleUserContext);
  const { currentUser, handleUserLogout } = useAuth();
  console.log("UUUUSSSUARIO", currentUser);
  const deleteUser = async () => {
    axios.delete(`/user/${currentUser.id}`).then((response) => {
      console.log("RESPONSE: ",response);
      if(response.status)
      {
        // userLogin(null);
        // handleUserLogin(null);
        handleUserLogout();
        return navigate('/');
      }
    })
  }

  const editUser = () => {
    return navigate('/user/edit');
  }

  // const endSession = () => {
  //   userLogin(null);
  //   handleUserLogin(null);
  //   navigate('/');
  // }

  if (!currentUser) {
    return navigate('/');
  }

  return (
    <BackgroundProfile>

      <UserInfo>
        <Username>{currentUser.username}</Username>
        {/* <Name>{currentUser.name}</Name> */}
        <Email>{currentUser.email}</Email>
        {currentUser.driver ? <Driver>Registered as driver</Driver> : 
        <Driver>Not registered as driver</Driver>}
      </UserInfo>
      <ActionButtons>
        <EditButton onClick={editUser}>Editar Perfil</EditButton>
        <SessionButton onClick={handleUserLogout}>Cerrar Sesión</SessionButton>
      </ActionButtons>
      <div>
        <DeleteButton onClick={deleteUser}>Eliminar Cuenta</DeleteButton>
      </div>

    </BackgroundProfile>
  )
}

export default Profile
