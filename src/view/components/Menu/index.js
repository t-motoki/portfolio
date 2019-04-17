import React from 'react';
import './style.scss';

export default (props) => {
  return (
    <div className='menu' onClick={()=>alert('test')}>
      <p>tmotoki.net</p>
    </div>
  );
};