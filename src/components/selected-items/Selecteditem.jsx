import React from 'react';
import "./Selecteditem.css"
const Selecteditem = ({ item }) => {
    return (
        <div className='item'>
            <h5>{item.title}</h5>
        </div>
    );
};

export default Selecteditem;