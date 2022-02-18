import React from 'react';
import {useSelector} from 'react-redux';

import Header from './components/layout/Header';
import Sneakers from './components/Sneakers/Sneakers';
import DropdownShoppingCart from './components/Cart/DropdownShoppingCart';

import './App.scss';

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  return (
    <div className='body-wrapper'>
      <Header />
      {showCart && <DropdownShoppingCart />}
      <Sneakers />
    </div>
  );
}

export default App;
