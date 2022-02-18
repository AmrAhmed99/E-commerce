import React from 'react';

import SneakerItem from './SneakerItem';
import './AvailableSneakers.scss';

import sneakerOne from "../../assets/image-product-1-thumbnail.webp";
import sneakerTwo from "../../assets/image-product-2-thumbnail.webp";
import sneakerThree from "../../assets/image-product-3-thumbnail.webp";

const DUMMY_SNEAKERS = [
    {
        id: 's1',
        imgSrc: sneakerOne,
        name: 'White adidus sneaker',
        category: 'Sneaker',
        price: 18
    },
    {
        id: 's2',
        imgSrc: sneakerTwo,
        name: 'White nike sneaker',
        category: 'Sneaker',
        price: 5
    },
    {
        id: 's3',
        imgSrc: sneakerThree,
        name: 'White puma sneaker',
        category: 'Sneaker',
        price: 12
    },
];

const AvailableSneakers = () => {
    const sneakersList = DUMMY_SNEAKERS.map((sneaker)=> (
        <SneakerItem 
            key={sneaker.id}
            id={sneaker.id}
            imgSrc={sneaker.imgSrc}
            imgAlt={sneaker.name}
            name={sneaker.name}
            category={sneaker.category}
            price={sneaker.price}
            />
    )); 
    
    return (
        <ul className='sneaker-list'>
            {sneakersList}
        </ul>
    );
};

export default AvailableSneakers;