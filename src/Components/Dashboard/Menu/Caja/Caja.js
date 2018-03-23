import React from 'react';
import { Table, Grid, Row, Col, responsive } from 'react-bootstrap';
import './style.css';

const Caja = () => {
    return(
        <Col md={7}>
           <h2>Cuadre de Caja</h2>
           <h4>Fecha: 24/03</h4>
           <Table responsive className='table-box'>
                <thead>
                    <th>Ventas Efectivo</th>
                    <th>Ventas Débito</th>
                    <th>Ventas Cheques</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Código: R-5 Valor: $12.990
                        </td>
                        <td>
                            Código: F-110 Valor: $25.990
                        </td>
                        <td>
                            Códigp: CH-15 Valor: $11.990
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Código: R-6 Valor: $2.990
                        </td>
                        <td>
                            Cófigo: F-111 Valor: $15.990
                        </td>
                        <td>
                            Código: CH-16 Valor: $20.000
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>TOTAL EFECTIVO: $15.980</h5>
                        </td>
                        <td>
                            <h5>TOTAL DEBITO: $41.980</h5>
                        </td>
                        <td>
                            <h5>TOTAL CHEQUE: $31.990</h5>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <h4>TOTAL FINAL: $89.950</h4>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    )
}

export default Caja;