import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/LandingPage.css';
import Navbar from '../components/Navbar';
import Logo from "../images/Logo.png";

export default function LandingPage() {
  const [hello, setHello] = useState('');
  const [message, setMessage] = useState('');
  const [isUser, setIsUser] = useState(false);
  // const location = useLocation();
  // setIsUser(location.state); //recibe {state: true} desde Login



  /* 
    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      fetch(`${process.env.REACT_APP_URL}/hello`, requestOptions)
        .then((response) => {
          if (response.status === 404) {
            return [];
          }
          return response.json();
        })
        .then((data) => { setHello(data) });
    }, []); */

  return (
    < div className="background-landingpage" >
      <h1>{hello['mensaje']}</h1>
      <div className="landingpage-card-form">
        <div className="row justify-content-center text-center">
          <div className="form-box">
            <img className="logo" src={Logo} />
            <h1>La Universidad nunca había estado tan cerca! </h1>

            <p className="lead">Esta aplicación pretende conectar a
              las personas que viven cerca y tienen posibilidad de movilizarse en auto hacia o
              desde la universidad. La idea principal es que los usuarios declaren disponibilidad de
              los vehículos, cupos, horarios, ruta que hacen y cobro (en el caso de que lo hagan).
              Los usuarios pueden seleccionar la ruta que les sirve y abrir un chat con el oferente
              para coordinar. Los usuarios pueden tener la oportunidad de evaluar al conductor
              (like, dislike).</p>
          </div>
        </div>
      </div>
    </div >
  );
};
