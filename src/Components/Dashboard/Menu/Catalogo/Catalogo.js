import React from 'react';
import { catalog } from './../../../../headphone';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import './catalogo.css';

const Catalogo = ({name, img, stock, price}) => (catalog.map((catalog) =>
  <div className="products">
    <Grid>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail src={catalog.img} alt="242x200">
            <p> {catalog.name} </p>
            <p> precio: {catalog.price} </p>
            <p> stock: {catalog.stock} </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>;
  </div>));

export default Catalogo;

