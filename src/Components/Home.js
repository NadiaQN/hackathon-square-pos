import React from 'react';
import { Button, Grid, Row, Col, responsive } from 'react-bootstrap';
import Homecss from './Home.css';

const Home = () => (
  <div className="container">
  <Grid>

  <Row className="row">
  <Col xs={12} sm={12} md={6} lg={6} className="logo"> <img src={require('../img/sketchport.png')} alt="logo"/></Col>
  <Col xs={12} sm={12} md={9} lg={9}>
 
    <img className="posimg centimg" src={require('../img/pos.png')} alt="pos"/>
    
    <p className="txtp">Agiliza tu negocio con nosotros. Cuadre de cajas, informe de ventas e</p>
    <p className="txtp">inventarios a solo un click</p></Col>
    
    <Col xs={6} lg={5} md={5} className="btn"><Button bsStyle="warning" className="orange">Saber Más</Button></Col>
    <Col xs={6} lg={4} md={5} className="btn"><Button bsStyle="warning" className="orange">Registrarse</Button></Col>
    </Row>
  </Grid>
  </div>
)

export default Home;