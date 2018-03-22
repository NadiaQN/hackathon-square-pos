import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './../../../App.css';



const Menu = () => (
            <menu className='menu'>
                <Col md={4}>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Catalogo</Link>
                            </li>
                            <li>
                                <Link to="/transactions">Transacciones</Link>
                            </li>
                            <li>
                                <Link to="/records">Registros</Link>
                            </li>
                            <li>
                                <Link to="/reports">Informes</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </menu>
);

export default Menu;
