import React, { Component } from 'react';
import Menu from './Components/Dashboard/Menu/Menu';
import Container from './Components/Dashboard/Container/Container';
import Navbar from './Components/Dashboard/Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Menu/>
        <Container />
      </div>
    );
  }
}

export default App;
