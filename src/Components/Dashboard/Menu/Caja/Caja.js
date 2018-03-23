import React from 'react';
import { Col } from 'react-bootstrap';

const Caja = () => {
    return(
        <Col md={8}>
            <Col md={3}>
                <h4>Ventas Efectivo:</h4>
                <p>Venta 1: Valor $2000</p>
                <p>Venta 2: Valor $5000</p>
                <p>Venta 3: Valor $8990</p>
                <p>Venta 4: Valor $1000</p>
                <h5>TOTAL EFECTIVO: $16990</h5>
            </Col>
            <Col md={3}>
                <h4>Ventas Débito:</h4>
                <p>Venta 1: Valor $15000</p>
                <p>Venta 2: Valor $7000</p>
                <h5>TOTAL DÉBITO: $22000</h5>
            </Col>
            <Col md={3}>
                <h4>Venta Cheque:</h4>
                <p>Venta 1: Valor $50000</p>
                <h5>TOTAL CHEQUE: $50000</h5>
            </Col>
            <Col md={12}>
                <h4>TOTAL: $88990</h4>
            </Col>
        </Col>
    )
}

export default Caja;