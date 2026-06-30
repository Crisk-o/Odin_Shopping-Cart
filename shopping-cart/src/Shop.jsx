// this will be the shopping page where user adds item to their cart.
import { Link } from "react-router"
import { useState, useEffect } from "react"
import Item from "./Item";
import "./Shop.css";
function Shop() {
    const [cartCount, setCartCount] = useState(0);
    // const [itemCount, setItemCount] = useState(0)

    // const handleItemCount = (e) => {
    //     const [name, value] = e.target;
    //     setItemCount((prevInfo) => ({...prevInfo, [name]: value}));

    // }

    return (
        <>
        <header>
            <div className="logo-container">
                <h3>Wanderlust</h3>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="cart">My Cart</Link></li>
                </ul>
            </nav>
        </header>
        
        <div className='title-container'>
            <h1>Our Products</h1>
        </div>
        
        <div className="shop-item-container">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        
        <footer>
            <nav>
                <ul>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                </ul>
            </nav>
        </footer>
        </>
    )
}

export default Shop;