import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CartProvider from './components/CartProvider';
import Nav from './components/Nav';
import './App.css';
import Products from './views/Products';
import Cart from './views/Cart';

const BASE = process.env.NODE_ENV === 'production' ? require('../package.json').homepage : '';

const App = () => {
  return (
    <CartProvider>
      <Router basename={BASE}>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Products} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
