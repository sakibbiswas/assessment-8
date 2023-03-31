import React from 'react';
import "./Cart.css"
const Cart = ({ cart }) => {
    return (
        <div className='cart'>

            <h3>Spent time on read :</h3>
            <h2>Bookmark Blogs:{cart.length}</h2>
            <div className="cart-items">

            </div>
        </div>
    );
};

export default Cart;