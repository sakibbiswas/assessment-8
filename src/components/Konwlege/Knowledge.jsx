import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Know from '../know/Know';
import "./Knowledge.css"


const Knowledge = () => {
    const [Konwleges, setKonwleges] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setKonwleges(data))
    }, [])

    const handeladdtocart = (knowledge) => {
        setcart([...cart, knowledge])
    }
    return (
        <div className='main-container'>

            <div className="Knowledge-container">

                {
                    Konwleges.map(knowledge => <Know
                        key={knowledge.id}
                        knowledge={knowledge}
                        handeladdtocart={handeladdtocart}

                    ></Know>)
                }
            </div>
            <div className="side-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Knowledge;