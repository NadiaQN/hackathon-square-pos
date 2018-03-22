import React from 'react';
import { Link } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './../../../App.css';
import './style.css';

const Menu = () => (
            <menu>
                <Col xsHidden md={3}>
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
                            <Link to="/config">Ajustes</Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link to="/help">Ayuda</Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link to="/logout">Salir</Link>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </menu>
);

export default Menu;
