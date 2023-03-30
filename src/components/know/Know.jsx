
import React from 'react';
import "./Know.css"


const Know = (props) => {
    const { Author, img, date, title, mark, person, Time
    } = props.knowledge;
    return (
        <div className='know'>
            <img src={img} alt="" />

            <div className='person' >
                <img src={person} alt="" />
                <div>
                    <h3>{Author}</h3>
                    <p>{date}</p>
                </div>
                <div className='btn'>
                    <p>{Time}</p>
                    <button>Cart</button>
                </div>


            </div>
            <div className='title'>
                <h2>{title}</h2>
                <a href="">{mark}</a>
            </div>

        </div>
    );
};

export default Know;
