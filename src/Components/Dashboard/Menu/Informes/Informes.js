import React from 'react';
import { Table, Grid, Row, Col, responsive } from 'react-bootstrap';

const Informes = () => (
    <div>
    <Grid>
    <Row className="row">
    <Col xs={12} md={9} lg={9}>
    <h1>Ventas POS</h1>
    <p>Fecha de elaboracion 24/02/2018 - 23/03/2018</p>
    
    <Table responsive>
  <thead>
    <tr>
      <th>Nombre de caja</th>
      <th>Número</th>
      <th>fecha de elaboración</th>
      <th>Vendedor</th>
      <th>Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POS</td>
      <td>F-250-3</td>
      <td>24/02/2018</td>
      <td>Stella Rojas</td>
      <td>$79.990</td>
    </tr>
    <tr>
      <td>POS</td>
      <td>R-7</td>
      <td>28/02/2018</td>
      <td>Stella Rojas</td>
      <td>$29.990</td>
    </tr>
    <tr>
      <td>POS</td>
      <td>F-250-2</td>
      <td>02/03/2018</td>
      <td>Stella Rojas</td>
      <td>$12.990</td>
    </tr>
    <tr>
    <td>POS</td>
    <td>R-6</td>
    <td>15/03/2018</td>
    <td>Stella Rojas</td>
    <td>$14.990</td>
  </tr>
  <tr>
  <td>POS</td>
  <td>F-250-1</td>
  <td>22/03/2018</td>
  <td>Stella Rojas</td>
  <td>$149.990</td>
</tr>
<tr>
<td>POS</td>
<td>R-5</td>
<td>23/03/2018</td>
<td>Stella Rojas</td>
<td>$12.990</td>
</tr>
  </tbody>
</Table>
</Col>
    </Row>
    </Grid>
    </div>
    
);

export default Informes;