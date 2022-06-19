import React from 'react';
import styled from 'styled-components';
import "../styles/LoginSetup.css"
const SearchBar = ({trips}) => {
  const barText = "Buscar un viaje...";

  // const searchTrip = (place) => {
  //   return {trips.filter((trip) => (

  //   ))}
  // }

  return (
  <div>
    <Search>
      <Bar placeholder={barText}></Bar>
      <SearchBtn >Buscar</SearchBtn>
    </Search>
  </div>
  )
}

export default SearchBar

const Search = styled.form`
  id: form;

`;

const Bar = styled.input`
  type: search;
  id: search_query;
  placeholder: Buscar destino;

`;

const SearchBtn = styled.button`
  background: #a9c3f9;
  color: #fff;
  margin: 4px;
  border-radius: 10px;
  &:hover {
    background: #47ccf2;
  }
`;