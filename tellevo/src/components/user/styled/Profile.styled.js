import styled from 'styled-components';
import "../../../styles/LoginSetup.css"

export const BackgroundProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1564115484-a4aaa88d5449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #cccccc;

  top: 0;
  left: 0;
  right: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.h2`
  color: black;
  font-size: 20px;
`;

export const Name = styled.p`
  color: #999999;
  font-size: 15px;
`;

export const Email = styled.h3`
  color: black;
  font-size: 15px;
`;

export const Driver = styled.p`
  color: black;
  font-size: 15px;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 7px;
`;

export const DeleteButton = styled.button`
  background-color: #c93939;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 5px;
`;

export const EditButton = styled.button`
  background-color: #C9C9C9;
  color: black;
  border: none;
  border-radius: 5px;
  margin: 5px;
`;

export const SessionButton = styled.button`
  background-color: #C9C9C9;
  color: black;
  border: none;
  border-radius: 5px;
  margin: 5px;
`;
