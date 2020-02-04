import React from 'react';
import ProductListing from '../components/ProductListing';
import './Products.css';
import {ProductContext} from '../components/ProductProvider';

const Products = () => {
  return (<div className="productsPage">
    <h2>Welcome to Acme Inc.</h2>
    <i>"We'll take your money, at a discount!"</i>
    <ProductContext.Consumer>
      {({products, add}) => (<div>
        <ul className="productList">
          {products.map(product => {
            return (<li key={product.name}><ProductListing product={product} /></li>)
          })}
        </ul>
        <button onClick={add}>Add a mystery item</button>
      </div>)}
    </ProductContext.Consumer>
  </div>);
};

export default Products;
