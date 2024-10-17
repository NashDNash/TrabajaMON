import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Formulario from '../herramientas/formulario.jsx';

export default function Crear(){
    return(
        <>
        <h1>Crea tu TrabajaMON</h1>
        <p>Ingresa sus datos personales y estadísticas</p>
        <section>
            <Formulario/>
        </section>
        <div className='Menu'>
            <Link to="/lista">
                <Button variant="outline-primary">Buscar</Button>
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

