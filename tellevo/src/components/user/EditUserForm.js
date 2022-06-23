import React, {Fragment, useEffect, useState, useContext} from 'react';
import { Form } from './styled/EditUserForm.styled';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { userContext, toggleUserContext } from '../../providers/UserProvider';
import useAuth from '../../hooks/useAuth';

const EditUserForm = () => {
  const { currentUser, handleUserLogin } = useAuth();
  // const user = useContext(userContext);
  // const userLogin = useContext(toggleUserContext);
  const navigate = useNavigate();
  const [driverText, setDriverText] = currentUser.driver ? useState("Ya no quiero conducir") : useState("Quiero conducir");

  // useEffect(() => {
  //   user = useContext(userContext);
  // }, user)

  const sendData = (event) => {
    console.log(event);
    event.preventDefault();
    console.log("EVENT: " + event);
    const formData = {
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
    };
    console.log(formData);
    axios.patch(`edit/${currentUser.id}`, {
      name: formData.name,
      email: formData.email,
    }).then((response) => {
      if (response.data.updated)
      {
        // userLogin(currentUser.id);
        handleUserLogin(currentUser);
        return navigate('/profile');
      }
    })
  }

  const cancelEdit = () => {
    return navigate('/profile');
  }

  const setDriver = () => {
    axios.patch(`edit/${currentUser.id}`, {
      driver: !currentUser.driver
    }).then((response) => {
      if (response.data.updated)
      {
        handleUserLogin(currentUser);
        // user = useContext(userContext);
        currentUser.driver ? setDriverText("Ya no quiero conducir") : setDriverText("Quiero conducir");
        // console.log(user);
        return navigate('/profile');
      }
    })
  }

  return (
    <Fragment>
      <h1>Edit {currentUser.username}'s profile:</h1>
      <Form onSubmit={sendData}> 
        <div>
          <label>Nombre:</label><br></br>
          <input 
          defaultValue={currentUser.name} 
          type="text"
          name="name"
          // onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label><br></br>
          <input 
          defaultValue={currentUser.email} 
          type="text"
          name="email"
          // onChange={handleInputChange}
          pattern= "/^[^\s@]+@[^\s@]+\.[^\s@]+$/i"
          />
        </div>
        <div>
          <button type="submit">Confirmar</button>
        </div>
        <div>
          <button onClick={cancelEdit}>Cancelar</button>
        </div>
      </Form>
      <div>
        <button onClick={setDriver}>{driverText}</button>
      </div>
      
    </Fragment>
  )
}

export default EditUserForm
