import React, {useState} from 'react';
import {Product} from '../constants';

interface CartItem {
  product: Product;
  quantity: number;
}

const CartContext = React.createContext({});
CartContext.displayName = 'CartContext';

interface Props extends React.PropsWithChildren<any> {}

const CartProvider = (props: Props) => {
  function add(product: Product, quantity: number): void {
    const item = get(product);
    set(product, item ? (item.quantity + quantity) : quantity); // Either add to existing quantity, or set to the quantity
  }
  function set(product: Product, quantity: number): void {
    setCartState((items) => {
      const item = items.find(i => i.product.name === product.name); // Use items instead of cartState so atomic ops perform right
      if (item) {
        item.quantity = quantity;
        return items; // TODO Not 100% sure if this will trigger an update if reference equality is the same
      } else {
        return [...items, {
          product,
          quantity: quantity
        }]
      }
    });
  }
  function get(product: Product): CartItem | null {
    return cartState.find(item => item.product.name === product.name) || null;
  }
  function remove(product: Product): void {
    set(product, 0);
  }
  const [cartState, setCartState] = useState<CartItem[]>([]);

  // Wow I hope this works...
  console.log('Render!'); // Easy check if we render too often
  const val = {
    items: cartState,
    add, set, get, remove
  };

  return (<CartContext.Provider value={val}>
    {props.children}
  </CartContext.Provider>);
};

export default CartProvider;
