import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CartProvider from './components/CartProvider';
import Nav from './components/Nav';
import './App.css';
import Products from './views/Products';
import Cart from './views/Cart';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" component={Products} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
