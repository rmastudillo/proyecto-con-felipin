import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate, renderMatches } from 'react-router-dom';
import { DeleteButton, EditButton } from './styled/Profile.styled';
// import EditUserForm from './EditUserForm';

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`${id}`, requestOptions)
      .then((response) => {
        if (response.status === 404) {
          return navigate(`/`);;
        }
        return response.json();
      })
      .then((data) => { setUser(data) });
  }, []);



  const deleteUser = async () => {
    axios.delete(`/user/${id}`).then((response) => {
      console.log("RESPONSE: " + response.data.error)
    })
  }

  const editUser = () => {
    navigate(`/user/edit/${id}`);
  }
  return (
    <>

    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {user.driver ? <p>Registered as driver</p> : 
      <p>Not registered as driver</p>}
    </div>
    <EditButton onClick={editUser}>Edit profile</EditButton>
    <div>
      <DeleteButton onClick={deleteUser}>Delete Account</DeleteButton>
    </div>

    </>
  )
}

export default Profile
