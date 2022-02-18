import React from 'react';
import {useSelector} from "react-redux";

import CartItem from './CartItem';
import './DropdownShoppingCart.scss';

const DropdownShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);

    const cartList = cartItems.map((item) => (
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity} />
    ));
    return (
        <ul className='cart-list'>
            {cartList}
        </ul>
    );
};

{/* <CartItem name='amr' price={25} quantity={1}/> */}
export default DropdownShoppingCart;