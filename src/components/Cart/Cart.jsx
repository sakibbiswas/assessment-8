import React from 'react';
import Knowledge from '../Konwlege/Knowledge';
import Selecteditem from '../selected-items/Selecteditem';
import "./Cart.css"
const Cart = ({ cart }) => {
    let total = 0;
    for (let knowledge of cart) {
        total = total + knowledge.Time

    }
    return (
        <div className='cart'>
            <div className='cart-read'>
                <h3>Spent time on read:{total} </h3>
                <h2>Bookmark Blogs:{cart.length}</h2>
            </div>
            <div className="cart-items">
                {
                    cart.map(item => <Selecteditem
                        key={item.id}
                        item={item}
                    ></Selecteditem>)
                }

            </div>
        </div>
    );
};

export default Cart;