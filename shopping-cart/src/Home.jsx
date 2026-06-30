// this will be the homepage for our store
// import { useState } from 'react'
import { Link } from "react-router"
import HeroImage from "./assets/hero-img-2.png";
function Home() {
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
            <h1>Wanderlust</h1>
        </div>

        <div className='content-container'>
            <img className="hero-img" src={HeroImage} alt="hero image of traveler in coastal setting"></img>
            <div className="lets-shop-button">
                <Link to="shop" delay={1000}>Discover something new.</Link>
            </div>
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

export default Home;
