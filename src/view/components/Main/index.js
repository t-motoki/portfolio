import React from 'react';
import './style.scss';

export default (props) => {

  const Aaa = () => {

    let aiue = [];
    for(let i=0; i<1000; i++){
      aiue.push(i+"aあ");
    }

    return (
        <div>{aiue.map((a,i) => {
          return (<p key={i}>{a}</p>);
        } )}</div>
    );

  }

  return (
    <div className='main'>
      <Aaa />
    </div>
  );
};