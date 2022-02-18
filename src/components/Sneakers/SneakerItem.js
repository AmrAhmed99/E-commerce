import React from 'react';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/cart-slice';

import './SneakerItem.scss';

const Sneaker = (props) => {
    const dispatch = useDispatch();
    
    const {id, name, price} = props

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({id, name, price}));
    };

    return (
        <li className='sneakerItem'>
            <div className='sneakerItem-header'>
                <img src={props.imgSrc} alt={props.imgAlt}/>
            </div>
            <div className='sneakerItem-body'>
                <h3>Name: {props.name}</h3>
                <div>Category: {props.category}</div>
                <div>Price: {props.price}</div>
                <button onClick={addToCartHandler}>Add to cart</button>
            </div>
        </li>
    );
};

export default Sneaker;