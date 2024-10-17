import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from "axios";


export default function AllWorkMON() {
    const [personas,setPersonas] = useState([])
    useEffect( () =>{
        const cargarPersonas = async () =>{
            const personas = await axios.get("https://67093567af1a3998baa0c08b.mockapi.io/proy1/TrabajaMON/").then(
                (response) => {
                    setPersonas(response.data);
                }
            ).catch((error) => {
                console.log(error.response);
            });
        }
        cargarPersonas();
    },[]);

    var completo = personas.map( persona => {
        {var i= parseInt(persona['id'])}
        return(<Accordion.Item eventKey={i-1}>
            <Accordion.Header>{persona['id']+': '+persona["nombre"]+' the '+persona['profesion']}</Accordion.Header>
            <Accordion.Body>
                <Container fluid>
                    <Row>
                        <Col><p>ID: </p></Col>
                        <Col>{persona['id']}</Col>
                    </Row>
                    <Row>
                        <Col><p>Nombre: </p></Col>
                        <Col>{persona['nombre']}</Col>
                    </Row>
                    <Row>
                        <Col><p>Profesion: </p></Col>
                        <Col>{persona['profesion']}</Col>
                    </Row>
                    <Row>
                        <Col><p>Edad: </p></Col>
                        <Col>{persona['edad']}</Col>
                    </Row>
                    <Row>
                        <Col><p>Vida: </p></Col>
                        <Col>{persona['vida']}</Col>
                    </Row>
                    <Row>
                        <Col><p>Ataque: </p></Col>
                        <Col>{persona['ataque']}</Col>
                    </Row>
                    <Row>
                        <Col><p>Defensa: </p></Col>
                        <Col>{persona['defensa']}</Col>
                    </Row>
                    <Row>
                        <Col><p>Velocidad: </p></Col>
                        <Col>{persona['velocidad']}</Col>
                    </Row>
                </Container>
            </Accordion.Body>
        </Accordion.Item>)
    });

    return(
        <>
            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header> Extender lista (Total de elementos: {personas.length})</Accordion.Header>
                    <Accordion.Body>
                        <Accordion>
                            {completo}
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>)
}