import React from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from './CartProvider';

const Nav = () => {
  return (<CartContext.Consumer>
    {({items}: any) => (<nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart{items.length ? ` (${items.length})` : ''}</Link>
    </nav>)}
  </CartContext.Consumer>);
};

export default Nav;
