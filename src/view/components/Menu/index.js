import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.scss';

export default (props) => {
  return (
    <div className='menu'>
       <p className='logo' onClick={()=>alert('test')}>tmotoki.net</p>
       <AnchorLink href="#scl700" offset="100">リンク1へ移動</AnchorLink>
    </div>
  );
};