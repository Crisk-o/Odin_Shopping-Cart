// this will be the shopping page where user adds item to their cart.
import { Link } from "react-router"
import { useState, useEffect } from "react"
import {ChevronUp, ChevronDown } from "lucide-react";

function Shop() {
    const [itemCount, setItemCount] = useState(0)

    const handleItemCount = (e) => {
        const [name, value] = e.target;
        setItemCount((prevInfo) => ({...prevInfo, [name]: value}));

    }

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
        
        <div className="shop-item-container">
            <div className="grid-item">
                <img src="#" alt="item-image"></img>
                <div>
                    <button>Add to Cart</button>
                    <input name="itemCount" type="number" onChange={handleItemCount} value={itemCount}></input>
                    <div className="increment-decrement-buttons">
                        <button name="incrementCount" type="button" onClick={(itemCount) => itemCount + 1}><ChevronUp/></button>
                        <button name="decrementCount" type="button" onClick={(itemCount) => itemCount - 1}><ChevronDown/></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shop;