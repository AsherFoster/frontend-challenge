import React from 'react';
import {CartContext, CartItem} from '../components/CartProvider';
import {currency} from '../utils';
import './Cart.css';

const Cart = () => {
  return (<CartContext.Consumer>
    {({items, total, set, remove}: any) => (<div className="cart">
      <h2>You have {items.length} items in your cart</h2>
      <ul className="cartItems">
        {items.map((item: CartItem) => (<li key={item.product.name} className="flexWrap">
          <button onClick={() => remove(item.product)}>Remove</button>
          <p>{item.product.name}</p>
          <span className="flex" />
          <input type="number" value={item.quantity} onChange={(e) => set(item.product, +e.target.value)}/>
          <i className="cartItemTotal">{currency(item.quantity * item.product.price)}</i>
        </li>))}
      </ul>

      <div className="flexWrap">
        <span className="flex" />
        <p style={{marginRight: '1em'}}>Cart total: {currency(total)}</p>
        {/* Don't question this line. */}
        <a className="button" href="#" onClick={() => window.location.href = "https://youtu.be/dQw4w9WgXcQ"}>Checkout</a>
      </div>
    </div>)}
  </CartContext.Consumer>)
};

export default Cart;
