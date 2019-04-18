import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.scss';

export default (props) => {
  return (
    <div className='menu'>
       <p className='logo' onClick={()=>alert('test')}>tmotoki.net</p>
       <AnchorLink href="#work" offset="110">Workへ移動</AnchorLink>
    </div>
  );
};