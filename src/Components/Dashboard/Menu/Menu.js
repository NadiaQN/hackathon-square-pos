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
            </menu>
);

export default Menu;
