import React, { Component } from 'react';
import top from '../img/top/zattou.jpg';
import '../scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img alt='top' src={top} />

      </div>
    );
  }
}

export default App;
