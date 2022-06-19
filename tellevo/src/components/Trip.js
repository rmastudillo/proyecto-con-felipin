import React from 'react';
import styled from 'styled-components';
import '../styles/Trips.css'
import route_img from '../imgs/ruta.png'
import { useParams, Link } from 'react-router-dom';
import TRIPS from '../data/trips_data';
import { AiOutlineArrowRight } from 'react-icons/ai';
import "../styles/LoginSetup.css"

const Trip = ({ }) => {
  const { id } = useParams();
  const selectedTrip = TRIPS.find((trip) => trip.id === parseInt(id));

  return (
    <div className='background-trips'>
      <div className='login-card-form' id="trips">

        <Container>
          <RouteContainer>
            <div>
              <Img src={route_img}></Img>
            </div>
            <StartEnd>
              <div>
                <Place>{selectedTrip.start}</Place>
              </div>

              <AiOutlineArrowRight />

              <div>
                <Place>{selectedTrip.end}</Place>
              </div>
            </StartEnd>
          </RouteContainer>

          <InfoContainer>
            <DriverContainer>
              <div>
                <DriverImg src={selectedTrip.driver_photo} />
              </div>
              <div>
                <DriverName>{selectedTrip.driver}</DriverName>
              </div>
            </DriverContainer>
            <div>
              <h3>${selectedTrip.price}</h3>
            </div>
            <ButtonsContainer>
              <JoinButton id="submit-button">Unirse al viaje</JoinButton>
              <BackButton  id="back-button" to={'/trips'}>Volver</BackButton>
            </ButtonsContainer>
          </InfoContainer>
        </Container>
      </div>
    </div>
  )
}

export default Trip

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;  
  font-family: 'Roboto', sans-serif;

`;

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  margin: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin: 10px;
`;

const Img = styled.img`
  height: 80%;
  width: auto;
  margin: 10px;
  border: 2px solid black;
`;

const StartEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Place = styled.h3`
  font-size: 16px;
`;

const DriverImg = styled.img`
  height: auto;
  width: auto;
  max-height: 220px;
  max-width: 180px;
`;

const DriverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const DriverName = styled.h3`
  width: auto;
  font-size: 24px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`;

// cuando este tenga una funcion real se puede borrar y crear un solo styled(Link)
const JoinButton = styled.button`
  border-radius: 5px;
  color: white;
  background-color: #a9c3f9;
  margin: 5%;
  border: 1px solid black;
  border-style: dashed;
  &:hover {
    background-color: #47ccf2;
    cursor: pointer;
    border-style: double;
}
`;

const BackButton = styled(Link)`
  text-decoration: none;
  border-radius: 5px;
  color: white;
  background-color: #a9c3f9;
  margin: 5%;
  border: 1px solid black;
  border-style: dashed;
  padding-top:10%;
  &:hover {
    background-color: #47ccf2;
    cursor: pointer;
    border-style: double;
}
`;
