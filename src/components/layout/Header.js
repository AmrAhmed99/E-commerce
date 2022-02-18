import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import './Header.scss'

const Header = (props) => {
    return (
        <header className='header'>
            <p>Any text</p>
            <HeaderCartButton />
        </header>
    );
};

export default Header;