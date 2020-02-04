// All this needs to do is support listing and adding at the moment
import React, {useState} from 'react';
import {Product, products as initialProducts, things} from '../constants';

interface ProductsContextValue {
  products: Product[];
  add(): void;
}
export const ProductContext = React.createContext<ProductsContextValue>({
  products: [],
  add() {}
});

const ProductProvider = (props: React.PropsWithChildren<any>) => {
  const [products, setProducts] = useState(initialProducts);
  function add() {
    const newProduct = {
      name: things[Math.floor(Math.random() * things.length)],
      price: Math.random() * 100 // Yes, I'm going to regret this.
    };
    if (products.find(p => p.name === newProduct.name)) alert('Oi, stop trying to break this >:(');
    setProducts([...products, newProduct]);
  }

  const value: ProductsContextValue = {
    products,
    add
  };
  return (<ProductContext.Provider value={value}>
    {props.children}
  </ProductContext.Provider>)
};

export default ProductProvider;
