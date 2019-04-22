import React, { Component } from 'react';
import Arrow from '../Arrow';
import About from '../About';
import Work from '../Work';
import History from '../History';
import './style.scss';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main'>
        <About />
        <Arrow />
        <Work />
        <Arrow />
        <History />
      </div>
    );
  }
}

export default Menu;