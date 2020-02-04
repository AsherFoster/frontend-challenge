import React from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from './CartProvider';

const Nav = () => {
  return (<CartContext.Consumer>
    {({itemCount}: any) => (<nav className="flexWrap" style={{padding: '1em 0'}}>
      <Link to="/">Home</Link>
      <span className="flex" />
      <Link to="/cart">Cart{itemCount ? ` (${itemCount})` : ''}</Link>
    </nav>)}
  </CartContext.Consumer>);
};

export default Nav;
