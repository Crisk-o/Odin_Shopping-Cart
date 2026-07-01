// this will be the cart/checkout page.
// this will be the shopping page where user adds item to their cart.
// import { useState, useEffect } from "react"
import { useOutletContext } from "react-router";
import Cart_Item from "./Cart_Item"
function Cart() {
    const {cart} = useOutletContext();
    console.log(cart);
    // const [cart] = useOutletContext();
    // console.log("cart is: " + cart.toString());
    // const [subTotal, setSubTotal] = useState(0);
    

    return (
        <>
            <div className='title-container'>
                <h1>Your Cart</h1>
            </div>
            
            <div className="cart-items-container">
            {cart.map((item => {
                return (<Cart_Item 
                    key={item.id}
                    item = {item}
                    itmCount={item.quantity}
                /> 
                );
            }))}
            </div>
            <div className="cart-payment-details-container">
                <p>Subtotal: $total USD</p>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Check out</button>
            </div>
        </>
    )
}

export default Cart;