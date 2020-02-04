import React from 'react';
import {CartContext, CartItem} from '../components/CartProvider';

const Cart = () => {
  return (<CartContext.Consumer>
    {({items, total, remove}: any) => (<div className="cart">
      <h2>You have {items.length} items in your cart</h2>
      <ul>
        {items.map((item: CartItem) => (<li key={item.product.name} className="flexWrap">
          <p>{item.product.name}</p>
          <span className="flex" />
          <button onClick={() => remove(item.product)}>Remove from cart</button>
        </li>))}
      </ul>
      <p>Cart total: ${total}</p>
    </div>)}
  </CartContext.Consumer>)
};

export default Cart;
