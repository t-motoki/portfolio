import React from 'react';
import './style.scss';

export default (props) => {
  return (
    <div id='about'>
      <div className='subtitle'>About</div>
      <div className='atmosphere'></div>
      <div className='concrete'>
        <div className='face'></div>
        <div className='contents'>
          <br />
          元木 高志と申します。<br />Ï
          Web系のエンジニアで、バックエンドからフロントエンドまで対応します。<br />
          <a href='https://github.com/t-motoki'>github</a>、Qiitaやってます！<br />
          <br />
          <br />
          ロゴもメニューも暫定。<br />
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
          <br />
        </div>
      </div>
    </div>
  );
};