import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate, renderMatches } from 'react-router-dom';
import { DeleteButton, EditButton, SessionButton, BackgroundProfile, UserInfo,
Username, Name, Email, Driver, ActionButtons } from './styled/Profile.styled';
import { userContext, toggleUserContext } from '../../providers/UserProvider';
// import EditUserForm from './EditUserForm';

const Profile = () => {
  const navigate = useNavigate();
  const user = useContext(userContext);
  const userLogin = useContext(toggleUserContext);

  const deleteUser = async () => {
    axios.delete(`/user/${user.id}`).then((response) => {
      console.log("RESPONSE: " + response.data.error);
      if(response.ok)
      {
        userLogin(null);
      }
    })
  }

  const editUser = () => {
    navigate('/user/edit');
  }

  const endSession = () => {
    userLogin(null);
    navigate('/');
  }

  return (
    <BackgroundProfile>

      <UserInfo>
        <Username>{user.username}</Username>
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
        {user.driver ? <Driver>Registered as driver</Driver> : 
        <Driver>Not registered as driver</Driver>}
      </UserInfo>
      <ActionButtons>
        <EditButton onClick={editUser}>Editar Perfil</EditButton>
        <SessionButton onClick={endSession}>Cerrar Sesión</SessionButton>
      </ActionButtons>
      <div>
        <DeleteButton onClick={deleteUser}>Eliminar Cuenta</DeleteButton>
      </div>

    </BackgroundProfile>
  )
}

export default Profile
