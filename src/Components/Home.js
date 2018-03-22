import React from 'react';
import { Button, Grid, Row, Col, responsive } from 'react-bootstrap';
import Homecss from './Home.css';

const Home = () => (
  <div className="container">
  <Grid>
  <Row className="row">
  <Col xs={12} className="logo">
  <img src={require('../img/sketchport.png')} alt="logo" responsive/></Col>
  </Row>
    <Row><Col xs={12} className="centimg"><img className="posimg" src={require('../img/pos.png')} alt="pos" responsive/></Col>
    <Col>
    <p>Agiliza tu negocio con nosotros. Cuadre de cajas, informe de ventas e</p>
    <p>inventarios a solo un click</p></Col>
    <Col xs={6} className="btn"><Button bsStyle="warning" className="orange">Saber Más</Button></Col>
    <Col xs={6} className="btn"><Button bsStyle="warning" className="orange">Registrarse</Button></Col>
  </Row>
  </Grid>
  </div>
)

export default Home;