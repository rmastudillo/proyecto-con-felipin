import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = ({ user_logged }) => {
  // const [userLogged, setUserLogged] = useState(user_logged);
  const userLogged = { id: 1 };
  // const userLogged = 0;
  return (
    <>
      <Nav>

        <NavHome>
          <NavLink to='/' activestyle="true">
            Pagina Principal
          </NavLink>

          {userLogged ?
            <div>
              <div>
                <NavLink to='/createtrip' activestyle="true">
                  Crear Publicación
                </NavLink>
              </div>
              <div>
                <NavLink to='/trips' activestyle>
                  Viajes
                </NavLink>
              </div>
            </div> : null}

        </NavHome>
        <NavSignin>
          {userLogged ? <NavSigninLink to={`/user/${userLogged.id}`}>Profile</NavSigninLink> :
            <div>
              <NavSigninLink to='/login'>Iniciar Sesión</NavSigninLink>
              <NavSigninLink to='/register'>Register</NavSigninLink>
            </div>}
        </NavSignin>
      </Nav>
    </>
  );
};



const Nav = styled.nav`
  background: #2a5ba7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

const NavLink = styled(Link)`
  color: #F5F5F5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const NavHome = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavSignin = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavSigninLink = styled(Link)`
  border-radius: 4px;
  background: #C9C9C9;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export default Navbar;