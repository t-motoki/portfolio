import React, { Component } from 'react';
import Arrow from '../Arrow';
import About from '../About';
import Work from '../Work';
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
        スクロールテスト<br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id='history'>
        <hr />
        この辺りまでスクロールされるはず<br />
        仕事の履歴を表で作る<br />
        なるべくシンプルに作る<br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    );
  }
}

export default Menu;