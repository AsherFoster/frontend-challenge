import React, {useState} from 'react';
import {Product} from '../constants';

export interface CartItem {
  product: Product;
  quantity: number;
}
export interface CartContextValue {
  items: CartItem[];
  total: number;
  add(product: Product, quantity: number): void;
  set(product: Product, quantity: number): void;
  get(product: Product): CartItem | null;
  remove(product: Product): void;
}

export const CartContext = React.createContext({});
CartContext.displayName = 'CartContext';

interface Props extends React.PropsWithChildren<any> {}

const initialItems = loadFromStore();

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
      } else {

        // Create condition
        items.push({
          product,
          quantity: quantity
        });
      }

      saveStore(items);
      return [...items]; // We need to create a new array object so react knows to update
    });
  }
  function get(product: Product): CartItem | null {
    return cartState.find(item => item.product.name === product.name) || null;
  }
  function remove(product: Product): void {
    set(product, 0);
  }
  const [cartState, setCartState] = useState<CartItem[]>(initialItems);

  // Wow I hope this works...
  console.log('Render!'); // Easy check if we render too often
  const val: CartContextValue = {
    items: cartState,
    total: cartState.reduce((a, c) => a + (c.product.price * c.quantity), 0),
    add, set, get, remove
  };

  return (<CartContext.Provider value={val}>
    {props.children}
  </CartContext.Provider>);
};

function saveStore(state: CartItem[]): void {
  localStorage.setItem('cartItems', JSON.stringify(state))
}

function loadFromStore(): CartItem[] {
  const raw = localStorage.getItem('cartItems');
  if (raw) return JSON.parse(raw);
  else return [];
}

export default CartProvider;
