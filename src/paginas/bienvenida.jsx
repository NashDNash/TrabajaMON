import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import { Button } from 'react-bootstrap';

function Bienvenida() {
    return(
        <>
        <h1>Bienvenido a TrabajaMON</h1>
        <p>El simulador de esclavos corporativos que se ajusta a sus necesidades laborales<br/>donde podrá CREAR, SELECCIONAR y BUSCAR entre una gama de opciones.</p>
        <div className='botonSeguir'>
            <Link to="/creador">
                <Button variant="primary">EMPEZAR</Button>
            </Link>
        </div>
        </>
    )
}

export default Bienvenida