import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { putAPI, setearEditor } from '../herramientas/funciones.jsx';
import { fullRandom, escribir } from '../herramientas/formulario.jsx';

export default function editar(){
    return(
        <>
            <h1>Editar TrabajaMON</h1>
            <p>Ingrese el ID del TrabajaMON a modificar:</p>
            <input type='number' id="buscarIDEditor" placeholder='ID'/>
            <Button variant='primary' onClick={setearEditor}>Buscar</Button>
            <Container fluid>
                <Row>
                    <Col>
                    <input type='text' id='Nombre' placeholder='Nombre'/>
                    </Col>
                    <Col>
                        <Button variant='light' onClick={() => escribir("Nombre",false,true)}>Aleatorio</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <input type='text' id='Profesion' placeholder='Profesion'/>
                    </Col>
                    <Col>
                        <Button variant='light' onClick={() => escribir("Profesion",false,false)}>Aleatorio</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type='number' id='Edad' placeholder='Edad' min={1} max={100}/>
                    </Col>
                    <Col>
                        <Button variant='light' onClick={() => escribir("Edad",true)}>Aleatorio</Button>
                    </Col>
                </Row>
                <Row>
                    <Button variant='primary' onClick={fullRandom}>TODO ALEATORIO</Button>
                </Row>
                <Row>
                    <p>Vida</p>
                </Row>
                <Row>
                    <Col>
                    <input type='number' id='Vida' min={1} max={100}/>
                    </Col>
                    <Col>
                    <Button variant='light' onClick={() => escribir('Vida',true)}>Aleatorio</Button>
                    </Col>
                </Row>
                <Row>
                    <p>Ataque</p>
                </Row>
                <Row>
                    <Col>
                    <input type='number' id='Ataque' min={1} max={100}/>
                    </Col>
                    <Col>
                    <Button variant='light' onClick={() => escribir('Ataque',true)}>Aleatorio</Button>
                    </Col>
                </Row>
                <Row>
                    <p>Defensa</p>
                </Row>
                <Row>
                    <Col>
                    <input type='number' id='Defensa' min={1} max={100}/>
                    </Col>
                    <Col>
                    <Button variant='light' onClick={() => escribir('Defensa',true)}>Aleatorio</Button>
                    </Col>
                </Row>
                <Row>
                    <p>Velocidad</p>
                </Row>
                <Row>
                    <Col>
                    <input type='number' id='Velocidad' min={1} max={100}/>
                    </Col>
                    <Col>
                    <Button variant='light' onClick={() => escribir('Velocidad',true)}>Aleatorio</Button>
                    </Col>
                </Row>
            </Container>
            <Button variant='primary' onClick={putAPI}>Guardar</Button>
            <div className='Menu'>
                <Link to="/creador">
                    <Button variant="outline-primary">Creador</Button>
                </Link>
                <Link to="/lista">
                    <Button variant="outline-primary">Buscar</Button>
                </Link>
                <Link to="/">
                    <Button variant="outline-danger">Inicio</Button>
                </Link>
            </div>
        </>
    )
}