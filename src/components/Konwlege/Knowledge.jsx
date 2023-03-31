import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Know from '../know/Know';
import "./Knowledge.css"


const Knowledge = () => {
    const [Konwleges, setKonwleges] = useState([])
    const [cart, setcart] = useState([])
    const [times, settimes] = useState([])


    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setKonwleges(data))
    }, [])

    const handeladdtocart = (knowledge) => {

        if (cart.length < 4) {
            setcart([...cart, knowledge])

        }
        else {
            alert('fhfdhdfgdf')
        }

    }
    const timesup = (knowledge) => {
        settimes([...times, knowledge])
    }

    return (
        <div className='main-container'>

            <div className="Knowledge-container">

                {
                    Konwleges.map(knowledge => <Know
                        key={knowledge.id}
                        knowledge={knowledge}
                        handeladdtocart={handeladdtocart}
                        timesup={timesup}



                    ></Know>)
                }
            </div>
            <div className="side-container">
                <Cart cart={cart}
                    times={times}
                ></Cart>
            </div>

        </div>
    );
};

export default Knowledge;