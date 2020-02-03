import React, {useState} from 'react';

const CartContext = React.createContext({});

interface Props extends React.PropsWithChildren<any> {}

const CartProvider = (props: Props) => {
  const [cartState, setCartState] = useState();

  return (<CartContext.Provider value={cartState}>
    {props.children}
  </CartContext.Provider>);
};

export default CartProvider;
