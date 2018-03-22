import React, { Component } from 'react';
import Menu from './Components/Dashboard/Menu/Menu';
import Container from './Components/Dashboard/Container/Container';
/*import Home from './Components/Home';*/
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Container />
        {/*<Home />*/}
      </div>
    );
  }
}

export default App;
