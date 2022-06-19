import React, {Fragment, useEffect, useState} from 'react';
import { Form } from './styled/EditUserForm.styled';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditUserForm = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({});
  // const myUser = {
  //   id: 7,
  //   name: "benja",
  //   username: "benjen",
  //   email: "benja@uc.cl",
  //   password: "12345678",
  //   driver: true
  // }
  // setUserData(myUser);

  useEffect(() => {
    axios.get(`/user/${id}`).then((response) => {
      setUserData(response.data)
    })
  }, [])

  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   })
  // }

  const sendData = (event) => {
    console.log(event);
    event.preventDefault();
    console.log("EVENT: " + event);
    // setFormData({
    //   [event.target.name]: event.target.value,
    //   [event.target.username]: event.target.value
    // })
    // console.log(formData);
    // axios.patch(`/user/edit/${userData.id}`, {
    //   id: userData.id, 
    //   name: formData.name,
    //   username: formData.username,
    //   email: formData.email,
    //   driver: formData.driver
    // })
  }

  return (
    <Fragment>
      <h1>Edit {userData.username} form:</h1>
      <Form onSubmit={sendData}> 
        <div>
          <input 
          value={userData.name} 
          type="text"
          name="name"
          // onChange={handleInputChange}
          />
        </div>
        <div>
          <input 
          value={userData.email} 
          type="text"
          name="email"
          // onChange={handleInputChange}
          pattern= "/^[^\s@]+@[^\s@]+\.[^\s@]+$/i"
          />
        </div>
        <div>
          <input 
          placeholder="password" 
          type="password"
          name="password"
          // onChange={handleInputChange}
          required
          />
        </div>
        <div>
          <input 
          value="driver"
          type="checkbox"
          name="driver" 
          checked
          />
        </div>
        <div>
          <button type="submit">Confirmar</button>
        </div>
        <div>
          <button>Cancelar</button>
        </div>
      </Form>
      
    </Fragment>
  )
}

export default EditUserForm
