import React from 'react';
import {products} from '../constants';
import ProductListing from '../components/ProductListing';
import './Products.css';

const Products = () => {
  return (<div className="productsPage">
    <h2>Welcome to Acme Inc.</h2>
    <i>"We'll take your money, at a discount!"</i>
    <ul className="productList">
      {products.map(product => {
        return (<li key={product.name}><ProductListing product={product} /></li>)
      })}
    </ul>
  </div>);
};

export default Products;
