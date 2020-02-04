import React, {useState} from 'react';
import {Product} from '../constants';

interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextValue {
  items: CartItem[];
  add(product: Product, quantity: number): void;
  set(product: Product, quantity: number): void;
  get(product: Product): CartItem | null;
  remove(product: Product): void;
}

export const CartContext = React.createContext({});
CartContext.displayName = 'CartContext';

interface Props extends React.PropsWithChildren<any> {}

const CartProvider = (props: Props) => {
  function add(product: Product, quantity: number): void {
    const item = get(product);
    set(product, item ? (item.quantity + quantity) : quantity); // Either add to existing quantity, or set to the quantity
  }
  function set(product: Product, quantity: number): void {
    console.log(`Setting ${product.name} to ${quantity}`);
    setCartState((items) => {
      const item = items.find(i => i.product.name === product.name); // Use items instead of cartState so atomic ops perform right
      if (item) {

        // Remove condition
        if (quantity === 0) {
          const index = items.findIndex(i => i === item);
          items.splice(index, 1);
        // Update condition
        } else {
          item.quantity = quantity;
        }

        return items; // TODO Not 100% sure if this will trigger an update if reference equality is the same
        // return [...items]; // If we need to force it
      } else {

        // Create condition
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
  const val: CartContextValue = {
    items: cartState,
    add, set, get, remove
  };

  return (<CartContext.Provider value={val}>
    {props.children}
  </CartContext.Provider>);
};

export default CartProvider;
