// this will be the cart/checkout page.
// this will be the shopping page where user adds item to their cart.
// import { Link } from "react-router"
import { useState, useEffect } from "react"
function Cart() {
    const [cartArray, setCartArray] = useState([""]);

    return (
        <>
        <body>
            <div className='title-container'>
                <h1>Your Cart</h1>
            </div>
            
            <div className="cart-items-container">
                <div className="cart-item">
                    <img src={"#"} alt="item image"></img>
                    <p>Item Title</p>
                    <p>itemCount</p>
                </div>
            </div>
            <div className="cart-payment-details-container">
                <p>Subtotal: $total USD</p>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Check out</button>
            </div>
        </body>  
        </>
    )
}

export default Cart;