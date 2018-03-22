import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, ListGroup, ListGroupItem, Col } from 'react-bootstrap';

const navbar = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="index.html">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Text pullRight>Conectado como: Usuario X</Navbar.Text>
            <Col mdHidden>
                <ListGroup>
                    <ListGroupItem>
                        <Link to="/">Inicio</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/sale">Registro de Ventas</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/reports">Cuadre de Caja</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/informs">Informe de Ventas</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/catalog">Catalogo de Productos</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/expenses">Gastos</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <a>Ajustes</a>
                    </ListGroupItem>
                    <ListGroupItem>
                        <a>Ayuda</a>
                    </ListGroupItem>
                    <ListGroupItem>
                        <a>Salir</a>
                    </ListGroupItem>
                </ListGroup>
            </Col>   
        </Navbar.Collapse>
    </Navbar>
)

export default navbar;