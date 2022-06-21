import React, { useState } from 'react';
import axios from 'axios';

export const userContext = React.createContext();
export const toggleUserContext = React.createContext();

const UserProvider = (props) => {
  const [userLogged, setUserLogged] = useState(null);

  const userLogin = (userID) => {
    if(userID)
    {
      axios.get(`/user/${userID}`).then((response) => {
      if (response.status === 200) {
        console.log("Status: " + response.data);
        setUserLogged(response.data);
      } else {
        setUserLogged(null);
      }
    });
    } else {
      setUserLogged(null);
    }
  }

  return (
    <userContext.Provider value={userLogged}>
      <toggleUserContext.Provider value={userLogin}>
        {props.children}
      </toggleUserContext.Provider>
    </userContext.Provider>
  )
}

export default UserProvider
