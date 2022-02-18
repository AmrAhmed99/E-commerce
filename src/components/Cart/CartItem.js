import React from 'react';

import './CartItem.scss';

const CartItem = (props) => {

    // const price = `$${props.price.toFixed(2)}`;
    return (
        <li className='cart-item'>
            <div>
                <h2>{props.name}</h2>
                <div className='cart-summary'>
                    <span className='price'>{props.price}</span>
                    <span className='amount'>x {props.quantity}</span>
                </div>
            </div>
            <div className='cart-actions'>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;