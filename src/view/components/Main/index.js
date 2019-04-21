import React, { Component } from 'react';
import Arrow from '../Arrow';
import Work from '../Work';
import './style.scss';
import face from '../../../img/top/face.png';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main'>
      <Work />
      <Arrow />
      <div id='about'>
        <hr />
        ロゴもメニューも暫定。<br />
        <br />
        <img alt='kao' src={face} /><br />
        （とりあえず顔）<br />
        <br />
        〜覚書〜<br />
        <br />
        ここは触りだけ。これが本来先頭。デザインも他と分けるかも<br />
        なるべく情報を厳選していく<br />
        <br />
        レスポンシブ対応していく<br />
        959pxをブレークポイントにする（タブレット）<br />
        メニューはハンバーガーボタンを配置し、<br />
        ドロワーメニューにする<br />
        <br />
        元木 高志と申します。<br />
        Web系のエンジニアで、バックエンドからフロントエンドまで対応します。<br />
        <a href='https://github.com/t-motoki'>github</a>、Qiitaやってます！<br />
        <br />
        <br />
        <br />
      </div>
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