import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <nav className='header'>
            <h2><strong>K</strong>nowledge Cafe</h2>
            <div>
                <a href="/Home">Home</a>
                <a href="/Contact">Contact</a>
                <a href="/Blog">Blog</a>
                <a href="/Order">Order</a>
            </div>
        </nav>
    );
};

export default Header;