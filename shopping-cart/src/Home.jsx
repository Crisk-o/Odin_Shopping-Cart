// this will be the homepage for our store
// import { useState } from 'react'
import { Link } from "react-router"
import HeroImage from "./assets/hero-img-2.png";
function Home() {
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
            {/* Wanderlust - Outdoor-related gear or backpacking site */}
            {/* Serendipity - creating storefront for used items. Like DePop w/o the social aspect.*/}
        </div>

        <div className='content-container'>
            <p>Disover into something new.</p>
            <img className="hero-img" src={HeroImage} alt="hero image of traveler in coastal setting"></img>
            <Link to="shop">Let's Shop</Link>
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
