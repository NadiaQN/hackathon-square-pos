import React, { Component } from 'react';
import Menu from './Components/Dashboard/Menu/Menu';
import Container from './Components/Dashboard/Container/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Container />
      </div>
    );
  }
}

export default App;
