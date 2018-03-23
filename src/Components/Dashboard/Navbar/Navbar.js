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
        </Navbar.Collapse>
    </Navbar>
)

export default navbar;