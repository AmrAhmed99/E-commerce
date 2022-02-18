import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {uiActions} from '../../store/ui-slice';

import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.scss';
const HeaderCartButton = () => {
    const cartItems = useSelector(state => state.cart.items);
    // const cartQuantity = useSelector(state => state.cart.totalQuantity)

    const numberOfCartItems = cartItems.reduce((curNumber, item) => {
        return curNumber + item.quantity;
    }, 0);

    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };
    return (
        <button className='header-button' onClick={toggleCartHandler}>
            <span className='header-icon'>
                <CartIcon />
            </span>
            <span className='header-badge'>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;