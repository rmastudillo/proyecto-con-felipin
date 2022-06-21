import React, { useState } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import "../../styles/Trips.css"
import Trips from '../../components/Trips';
import SearchBar from '../../components/SearchBar';





export default function TripsView() {
  const [loading, setLoading] = useState(false);
  const { user_id } = useParams();



  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='background-trips'>
      <div className='trips-view'>
        <SearchBar />
        <Trips user_id={user_id} />
      </div>
    </div>
  )
};

