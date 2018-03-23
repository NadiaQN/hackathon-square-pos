import React from 'react';
import { Glyphicon, Col } from 'react-bootstrap';

const Help = () => (
    <Col md={6} className='help-mail'>
        <div>
            <h2>Para consultas y ayuda escribenos a:</h2>
            <Glyphicon glyph="envelope" /> mi.ventas@gmail.com
        </div>
    </Col>
)

export default Help;