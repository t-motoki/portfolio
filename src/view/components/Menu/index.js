import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.scss';

export default (props) => {
  const offset = 120;
  return (
    <div className='menu'>
      <p className='logo' onClick={()=>alert('未実装')}>tmotoki.net</p>
      <div className='items'>
        <AnchorLink className='item' href='#work' offset={offset}>Works</AnchorLink>
        <AnchorLink className='item' href='#about' offset={offset}>About</AnchorLink>
        <AnchorLink className='item' href='#history' offset={offset}>History</AnchorLink>
      </div>
    </div>
  );
};