import React from 'react';
import {Product} from '../constants';

interface Props {
  product: Product;
}

const ProductListing = (props: Props) => {
  return (<p>{props.product.name}</p>);
};

export default ProductListing;
