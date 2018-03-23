import React from 'react';
import { Table, Grid, Row, Col, responsive } from 'react-bootstrap';

const Gastos = () => {
    return (
        <Col md={4}>
            <h3>Informe de Gastos</h3>
            <Table responsive>
                <thead>
                    <th>Detalle</th>
                    <th>Valor</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Arriendo</td>
                        <td>$300.000</td>
                    </tr>
                    <tr>
                        <td>Electricidad</td>
                        <td>$70.00</td>
                    </tr>
                    <tr>
                        <td>Insumos</td>
                        <td>$250.000</td>
                    </tr>
                    <tr>
                        <td><h4>TOTAL:</h4></td>
                        <td><h4>$620.000</h4></td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    )
}

export default Gastos;