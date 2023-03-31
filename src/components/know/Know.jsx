
import React from 'react';

import "./Know.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Know = (props) => {
    const { Author, img, date, title, mark, person, Time
    } = props.knowledge;
    const handeladdtocart = props.handeladdtocart;



    return (
        <div className='know'>
            <img src={img} alt="" />

            <div className='person' >
                <img src={person} alt="" />
                <div>
                    <h3>{Author}</h3>
                    <p>{date}(4 days ago)</p>
                </div>
                <div className='btn'>
                    <p>{Time} min read </p>
                    <button onClick={() => handeladdtocart(props.knowledge)}> <FontAwesomeIcon icon={faBookmark} /></button>
                </div>


            </div>
            <div className='title'>
                <h2>{title}</h2>
                <a href='/'>{mark}</a>
            </div>

        </div>
    );
};

export default Know;
