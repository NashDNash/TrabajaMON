import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Random, postAPI } from '../herramientas/funciones.jsx';

export default function Formulario() {
    return(
        <>
            <div className='Creador'>
                <Accordion defaultActiveKey={0}>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Datos Personales</Accordion.Header>
                        <Accordion.Body>
                            <p>Ingrese Nombre, Profesión y Edad del TrabajaMON</p>
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
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Estadísticas</Accordion.Header>
                        <Accordion.Body>
                            <p>Ingrese las estadísticas del TrabajaMON, cree un set aleatorio o<br/>aleatorice las que estime necesarias (valores del 1 al 100)</p>
                            <Container fluid>
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
                                <Row>
                                    <Button variant='primary' onClick={postAPI}>GUARDAR</Button>
                                </Row>
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export async function escribir(id,isNumb,isName){
    const respuesta = await Random(isNumb,isName);
    document.getElementById(id).value = respuesta;
}

export function fullRandom(){
    escribir('Vida',true);
    escribir('Ataque',true);
    escribir('Defensa',true);
    escribir('Velocidad',true);
}