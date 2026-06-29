// this will be the cart/checkout page.
// this will be the shopping page where user adds item to their cart.
import { Link } from "react-router"
// import { useState, useEffect } from "react"
function Cart() {

    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="cart">My Cart</Link></li>
                </ul>
            </nav>
        </header>
        <div className='title-container'>
            <h1>Wanderlust</h1>
        </div>
        
        <div className="cart-container"></div>
        
        
        
        
        </>
    )
}

export default Cart;