// this will be the cart/checkout page.
// import { useState } from "react"
import { useOutletContext } from "react-router";
import Cart_Item from "./Cart_Item"
import "./Cart.css"
function Cart() {
    const {cart, updateCart, totalPrice} = useOutletContext();


    return (
        <div className="cart-container">
            <div className='title-container'>
                <h1>Your Cart</h1>
            </div>
            
            <div className="cart-items-container">
            {cart.length === 0 ? "Your cart is empty!" : cart.map((item => {
                return (<Cart_Item 
                    key={item.id}
                    item = {item}
                    itmCount={item.quantity}
                    handleChange={(item, qty) => updateCart(item.id, qty)}
                /> 
                );
            }))}

            </div>
            <div className="cart-payment-details-container">
                <div>
                    <p>Subtotal: ${totalPrice.toFixed(2)} USD</p>
                    <p style={{fontSize: "12px", margin: 0}}>*Taxes and shipping calculated at checkout</p>
                </div>
                <div>
                    <button>Check out</button>
                </div>
           </div>
        </div>
    )
}

export default Cart;