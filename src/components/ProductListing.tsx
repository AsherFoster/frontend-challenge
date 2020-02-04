import React from 'react';
import {Product} from '../constants';
import {CartContext} from './CartProvider';

interface Props {
  product: Product;
}

const ProductListing = (props: Props) => {
  return (<CartContext.Consumer>
    {({add}: any) => (<div className="flexWrap"> {/* We don't seem to be able to type it without TypeScript complaining :( */}
      <p>{props.product.name}</p>
      <span className="flex" />
      <button onClick={() => add(props.product, 1)}>Add to cart</button>
    </div>)}
  </CartContext.Consumer>);
};

export default ProductListing;
