// this will be the shopping page where user adds item to their cart.
// import { Link } from "react-router"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Item from "./Item";
import "./Shop.css";
function Shop() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <>
        <Navbar />
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
        <Footer/>
        </>
    )
}

export default Shop;