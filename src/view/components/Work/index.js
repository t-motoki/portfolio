import React from 'react';
import './style.scss';

export default (props) => {
  return (
    <div id='work'>
      <div className='subtitle'>Work</div>
      <div className='atmosphere'></div>
      <div className='concrete'>
        <p className='caption'>
          お客様と共に歩んでいく。
        </p>
        <div className='contents'>
          良いサービスとは何か？<br />
          その答えは日々変わるし、常に考えなければなりません。<br />
          私はお客様と一緒にそれを考え、<br />
          共に良くしていこうと日々努力しています。<br />
          <br />
          <div>
            <div className='p1'>設計</div>  
            <div className='p2'>開発</div>  
            <div className='p3'>品質</div>
          </div>
          作品<br />
          <br />
          <br />
          <br />
          <br />
          〜覚書〜<br />
          イメージ画像をアイコン的に３つ横に配置する<br />
          作品は載せれれば載せる<br />
          <br />
          設計、開発、品質のいずれかをクリックするとダイアログを出して、<br />
          仕事のイメージを表示する（アニメーションで演出する）<br />
          <br />
          <br />
          
        </div>
      </div>
    </div>
  );
};