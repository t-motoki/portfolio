import React from 'react';
import Work from '../Work';
import './style.scss';
import face from '../../../img/top/face.png';

export default (props) => {

  return (
    <div className='main'>
      <div id='about'>
        ロゴもメニューも暫定。<br />
        <br />
        <img alt='kao' src={face} /><br />
        （とりあえず顔）<br />
        <br />
        元木 高志と申します。<br />
        Web系のエンジニアで、バックエンドからフロントエンドまで対応します。<br />
        <a href='https://github.com/t-motoki'>github</a>、Qiitaやってます！<br />
        <br />
        〜覚書〜<br />
        <br />
        ここは触りだけ。デザインも他と分けるかも<br />
        なるべく情報を厳選していく<br />
        <br />
        レスポンシブ対応していく<br />
        959pxをブレークポイントにする（タブレット）<br />
        メニューはハンバーガーボタンを配置し、<br />
        ドロワーメニューにする<br />
        <br />
        <br />
        <br />
      </div>
      <Work />
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
};