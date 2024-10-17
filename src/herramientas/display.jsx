import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import { getAPIbyID } from '../herramientas/funciones';

export default function Display() {
    return(
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <p>Nombre:</p>
                    </Col>
                    <Col>
                        <p id='DisName'></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Trabajo:</p>
                    </Col>
                    <Col>
                    <p id='DisJob'></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Edad:</p>
                    </Col>
                    <Col>
                    <p id='DisAge'></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Vida:</p>
                    </Col>
                    <Col>
                    <p id='DisLP'></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Ataque:</p>
                    </Col>
                    <Col>
                    <p id='DisAtq'></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Defensa:</p>
                    </Col>
                    <Col>
                    <p id='DisDef'></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Velocidad:</p>
                    </Col>
                    <Col>
                    <p id='DisVel'></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export async function DisByID(){
    var busqueda = await getAPIbyID(document.getElementById('buscarID').value);
    document.getElementById('DisName').innerText = busqueda['nombre'];
    document.getElementById('DisJob').innerText = busqueda['profesion'];
    document.getElementById('DisAge').innerText = busqueda['edad'];
    document.getElementById('DisLP').innerText = busqueda['vida'];
    document.getElementById('DisAtq').innerText = busqueda['ataque'];
    document.getElementById('DisDef').innerText = busqueda['defensa'];
    document.getElementById('DisVel').innerText = busqueda['velocidad'];
}