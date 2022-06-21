import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import { axios } from 'axios';
import "../../styles/CreateTrip.css"

const locations = [
  "Santiago",
  "Conchalí",
  "Huechuraba",
  "Independencia",
  "Quilicura",
  "Recoleta",
  "Renca",
  "Las Condes",
  "Lo Barnechea",
  "Providencia",
  "Vitacura",
  "La Reina",
  "Macul",
  "Ñuñoa",
  "Peñalolén",
  "La Florida",
  "La Granja",
  "El Bosque",
  "La Cisterna",
  "La Pintana",
  "San Ramón",
  "Lo Espejo",
  "Pedro Aguirre Cerda",
  "San Joaquín",
  "San Miguel",
  "Cerrillos",
  "Estación Central",
  "Maipú",
  "Cerro Navia",
  "Lo Prado",
  "Pudahuel",
  "Quinta Normal"
];

export default function CreateTrip() {
  const navigate = useNavigate()
  const [outputPoint, setOutputPoint] = useState('')
  const [comOutput, setComOutput] = useState('')

  const [destinyOutput, setDestinyOutput] = useState('')
  const [destinyCom, setDestinyCom] = useState('')
  const [date, setDate] = useState(new Date())
  const [hour, setHour] = useState(new Date().getHours())
  const [userName, setUsername] = useState('')
  const [available, setAvailable] = useState()


  const handleSubmit = (event) => {
    event.preventDefault()

    // Validaciones acá
    // ValiditeInputs()

    const body = {
      outputPoint,
      comOutput,
      destinyOutput,
      destinyCom,
      available,
      date,
      hour,
      userName,
    }

    const url = '/';

    axios.post(url, body).then((response) => {

      if (response.status === 201) {
        console.log("Status: " + response.data);
        navigate('/trips')
      } else {
        console.log("Error: " + response.error);
      }
    }).catch((error) => console.log(error));
  }


  return (
    <div className="background-login">
      <div className="login-card-form">
        <div>
          <h1>Crea una Publicación</h1>
        </div>
        <form className="form-box" onSubmit={handleSubmit}>
          <p>Punto Salida: <input type="text" name="lugarsalida" value={outputPoint} onChange={e => setOutputPoint(e.target.value)} /></p>
          <p>Comuna Salida:
            <select className='locations' onChange={(e) => setComOutput(e.target.value)} value={comOutput}>
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </p>
          <p>Punto Destino: <input type="text" name="lugardestino" value={destinyOutput} onChange={e => setDestinyOutput(e.target.value)} /></p>
          <p>Comuna Destino:
            <select className='locations' onChange={(e) => setDestinyCom(e.target.value)} value={destinyCom}>
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </p>
          <p>Cupos disponibles: <select name="cupos" onChange={(e) => setAvailable(e.target.value)} value={available}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option></select></p>
          <p>Fecha: <input type="date" name="fecha" onChange={e => setDate(e.target.value)} value={date} /></p>
          <p>Hora Salida: <input type="time" name="hora" onChange={e => setHour(e.target.value)} value={hour} /></p>
          <p>Nombre usuario: <input type="text" name="lugarsalida" value={userName} onChange={e => setUsername(e.target.value)} /></p>
          <input className='input-box' id='submit-button' type="submit" value="Publicar" />
        </form >
      </div >
    </div >
  );
};