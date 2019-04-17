import React, { Component } from 'react';
import Menu from './components/Menu';
import Main from './components/Main';
import '../scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Menu />
      </div>
    );
  }
}

export default App;
