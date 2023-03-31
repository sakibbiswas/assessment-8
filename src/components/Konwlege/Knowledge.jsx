import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Know from '../know/Know';
import "./Knowledge.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

        // if (cart.length < 1) {
        // setcart([...cart, knowledge])

        if (cart.length < 1) {
            setcart([...cart, knowledge])

        }
        else {
            setcart([...cart, knowledge])
            toast('Ar click dis nah bhai ')
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
                <div className='qustion'>
                    <h3><strong className='big'>Number-1</strong>: Different between props vs state?</h3>
                    <p><strong>Ans</strong>:props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).</p>

                </div>
                <div className='qustion'>
                    <h3><strong className='big'>Number-2</strong>:How does usestate work?</h3>
                    <p><strong>Ans</strong>:useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
                </div>
                <div className='qustion'>
                    <h3><strong className='big'>Number-3</strong>:What else can useffect do other than data load?</h3>
                    <p><strong>Ans</strong>:We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies.</p>
                </div>
                <div className='qustion'>
                    <h3><strong className='big'>Number-4</strong>:How does react work ?</h3>
                    <p><strong>Ans</strong>:ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It's important to note that ReactJS is not a JavaScript framework</p>
                </div>

            </div>
            <div className="side-container">
                < ToastContainer />
                <Cart cart={cart}
                    times={times}
                ></Cart>
            </div>

        </div>
    );
};

export default Knowledge;