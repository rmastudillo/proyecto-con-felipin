import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm/* , SubmitHandler */ } from 'react-hook-form'
import "../../styles/LoginSetup.css"
import axios from 'axios';
import { userContext, toggleUserContext } from '../../providers/UserProvider';

export default function Login() {
  // const [loginStatus, setLoginStatus] = useState("");
  // const [userLogged, setUserLogged] = useState({});
  const userLogged = useContext(userContext);
  const userLogin = useContext(toggleUserContext);
  const navigate = useNavigate();

  /* register es para registrar los diferentes campos del formulario */
  /* handleSubmit me permite gestionar los submit del formulario */
  const { register, formState: { errors }, watch, handleSubmit } = useForm();
  /* Aquí gestiono que hago con los datos del formulario */
  const onSubmit = (data) => {
    console.log(data);
    if (userValid()) {
      goHomePage();
    }
    else {
      alert("Credenciales de usuario incorrectas");
    }
  }

  const userValid = async () => {
    const userData = {
      email: watch('email'),
      password: watch('password')
    };
    const path = '/user/login';
    return validateUserData(path, userData);
  };

  const validateUserData = (path, userData) => {
    axios.post(path, userData).then((response) => {
      if (response.status === 200) {
        console.log("Status: " + response.data);
        userLogin(response.data.id);
        return true;
      } else {
        return false;
      }
    });
  }


  const goHomePage = () => {
    console.log("entra?");
    navigate('/');
    /* Con esta creo que podría hacerse que al logear vuelva
    a la página en la que estaba antes de apretar login
    pero habría que implementar en todas las paginas que reciba
    state:true y cambie según eso
    navigate(-1, {state: true});
    */
  }

  return (
    <div className="background-login">
      <div className="login-card-form">
        <div>
          <h1>Login</h1>
          <h3 className='welcome-message'>Bienvenido!</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-box">

          <div >
            <input className='input-box' {...register(
              "email", {
              required: true,
              /* Acá reviso si el patron de email es mas o menos correcto */
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
              placeholder="Correo electrónico" />
          </div>
          <div>
            <input className='input-box' {...register("password", {
              required: true,
              minLength: 8
            })} type="password" placeholder='Contraseña' />
          </div>
          {/* Errores de inputes */}
          <div>
            <ul type="A" className='error-message'>
              {/* Errores de largo */}

              {/* {errors.email?.type === 'pattern' &&
                <li><span>El formato del email es incorrecto</span></li>
              }
              {errors.password.type === 'required' &&
                <li><span>La contraseña no es válida </span></li>
              } */}

            </ul>
          </div>
          <input className='input-box' id='submit-button' type="submit" value="Iniciar Sesión" />

        </ form >

        <div>
          <span>¿Aún no tienes una cuenta?</span>
          <br />
          <Link to="/register" as="/register">

            ¡Registrate!

          </Link>
        </div>
      </div >

    </div >
  );
};
