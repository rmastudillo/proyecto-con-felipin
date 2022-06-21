import React, {Fragment, useEffect, useState, useContext} from 'react';
import { Form } from './styled/EditUserForm.styled';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext, toggleUserContext } from '../../providers/UserProvider';

const EditUserForm = () => {
  const user = useContext(userContext);
  const userLogin = useContext(toggleUserContext);
  const navigate = useNavigate();
  const [driverText, setDriverText] = user.driver ? useState("Ya no quiero conducir") : useState("Quiero conducir");

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
    axios.patch(`edit/${user.id}`, {
      name: formData.name,
      email: formData.email,
    }).then((response) => {
      if (response.data.updated)
      {
        userLogin(user.id);
        navigate('/profile');
      }
    })
  }

  const cancelEdit = () => {
    navigate('/profile');
  }

  const setDriver = () => {
    axios.patch(`edit/${user.id}`, {
      driver: !user.driver
    }).then((response) => {
      if (response.data.updated)
      {
        userLogin(user.id);
        user = useContext(userContext);
        user.driver ? setDriverText("Ya no quiero conducir") : setDriverText("Quiero conducir");
        console.log(user);
        navigate('/profile');
      }
    })
  }

  return (
    <Fragment>
      <h1>Edit {user.username}'s profile:</h1>
      <Form onSubmit={sendData}> 
        <div>
          <label>Nombre:</label><br></br>
          <input 
          defaultValue={user.name} 
          type="text"
          name="name"
          // onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label><br></br>
          <input 
          defaultValue={user.email} 
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
