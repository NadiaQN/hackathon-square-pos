import React from 'react';
import { Link } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './../../../App.css';
import './style.css';

const Menu = () => (
            <menu className="menu">
                <Col xsHidden md={3} className="col">
                    <ListGroup className="itemGroup">
                        <ListGroupItem className="item">
                            <Link className="link" to="/">Inicio</Link>
                        </ListGroupItem>
                        <ListGroupItem className="item">
                            <Link className="link" to="/sale">Registro de Ventas</Link>
                        </ListGroupItem>
                        <ListGroupItem className="item">
                            <Link className="link" to="/reports">Cuadre de Caja</Link>
                        </ListGroupItem> 
                        <ListGroupItem className="item">
                            <Link className="link" to="/informs">Informe de Ventas</Link>
                        </ListGroupItem> 
                        <ListGroupItem className="item">
                            <Link className="link" to="/catalog">Catalogo de Productos</Link>
                        </ListGroupItem>
                        <ListGroupItem className="item">
                            <Link className="link" to="/expenses">Gastos</Link>
                        </ListGroupItem>
                        <ListGroupItem className="item">
                            <Link className="link" to="/config">Ajustes</Link>
                        </ListGroupItem>
                        <ListGroupItem className="item">
                            <Link className="link" to="/help">Ayuda</Link>
                        </ListGroupItem>
                        <ListGroupItem className="item">
                            <Link className="link" to="/logout">Salir</Link>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </menu>
);

export default Menu;
