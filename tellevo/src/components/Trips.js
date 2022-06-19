import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Trip from './Trip';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import TRIPS from '../data/trips_data';
import "../styles/LoginSetup.css";
import axios from 'axios';

const Trips = ( { user_id }) => {
  const [trips, setTrips] = useState(TRIPS);
  const seatText = " Asiento(s) disponible(s)";
  const userID = user_id;

  useEffect(() => {
    axios.get('/trips', userID).then((response) => {
      setTrips(response.data.trips);
    })
  }, []);

  const showTrip = (trip) => {
    if (trip.seats > 0) {
      return (
        <a className='triplink' href={`/trip/${trip.id}`}>
          <TripCard className='login-card-form' >
            <CardInfo >
              <RouteInfo>
                <div>
                  <h1>{trip.start}</h1>
                </div>
                <ArrowContainer>
                  <AiOutlineArrowRight />
                </ArrowContainer>
                <div>
                  <h1>{trip.end}</h1>
                </div>
              </RouteInfo>

              <RideInfo>
                <div>
                  <h2>Conductor: {trip.driver}</h2>
                </div>
                <div>
                  <h2>${trip.price}</h2>
                </div>
              </RideInfo>
              <div>
                <SeatsInfo>{trip.seats}{seatText}</SeatsInfo>
              </div>
            </CardInfo>
          </TripCard>
        </a>
      )
    }
    else {
      return <h1>Este usuario no tiene viajes</h1>;
    }
  }

  return (
    <TripsContainer>
      {trips.map((trip) => showTrip(trip))}
    </TripsContainer>
  )
}

export default Trips

const TripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  width: auto;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const TripCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Roboto, sans-serif; 
  width: auto;
  height: 220px;
  border-radius: 10px;
  margin: 5px;
  padding-left: 15px;
  padding-right: 15px;
  &:hover {
    background:  rgb(150, 150, 150);
  }
`;

const RouteInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  height: 100px;
  width: 700px;
`;

const RideInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  width: auto;

`;

const SeatsInfo = styled.span`
  font-size: 16px;
  color: blue;  
`;

const ArrowContainer = styled.div`
  align: center;
`;

const InspectButton = styled(Link)`
  height: 85%;
  width: auto;
  background-color: #a9c3f9;
  color: white;
  text-decoration: none;
  display: inline-block;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 5px;
  padding: 3px;
  margin-top: 100 px;
  &:hover {
    background-color: #47ccf2;
    cursor: pointer;
}
`;
