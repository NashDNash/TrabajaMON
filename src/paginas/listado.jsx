import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import { Button} from 'react-bootstrap';
import Display from '../herramientas/display';
import { DisByID } from '../herramientas/display';
import AllWorkMON from '../herramientas/acordeon';
import {deleteAPI} from '../herramientas/funciones.jsx'

export default function Listar(){
    return(
        <>
        <h1>Encuentra el TrabajaMON que buscas</h1>
        <p>Busca entre la lista de TrabajaMONes disponibles</p>
        <AllWorkMON/>
        <p>O bien, busca por un ID específico</p>
        <input type='number' id="buscarID" placeholder='ID'/>
        <Button variant='primary' onClick={DisByID}>Buscar</Button>
        <div id='buscarUno'>
            <Display/>
        </div>
        <div className='MenuEdicion'>
            <p>¿Desea eliminar el TrabajaMON seleccionado?: </p>
            
            <Button variant="danger" onClick={deleteAPI}>Eliminar</Button>
        </div>
        <div className='Menu'>
            <Link to="/creador">
                <Button variant="outline-primary">Creador</Button>
            </Link>
            <Link to="/editar">
                <Button variant="outline-primary">Editar</Button>
            </Link>
            <Link to="/">
                <Button variant="outline-danger">Inicio</Button>
            </Link>
        </div>
        </>
    )
}