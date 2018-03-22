import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, ListGroup, ListGroupItem, Col } from 'react-bootstrap';

const navbar = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Text pullRight>Conectado como: Usuario X</Navbar.Text>
            <Col mdHidden>
                <ListGroup>
                    <ListGroupItem>
                        <Link to="/">Catalogo</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/transactions">Transacciones</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/records">Registros</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/reports">Informes</Link>
                    </ListGroupItem>
                </ListGroup> 
            </Col>   
        </Navbar.Collapse>
    </Navbar>
)

export default navbar;