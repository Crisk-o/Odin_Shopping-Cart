// this will be the homepage for our store
// import { useState } from 'react'
import { Link } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HeroImage from "./assets/hero-img-2.png"
function Home() {
    return (
        <>
        <Navbar/>
        <body>
            <div className='title-container'>
                <h1>Wanderlust</h1>
            </div>

            <div className='content-container'>
                <div className="lets-shop-button">
                    <Link to="shop">Discover something new</Link>
                </div>
                <img className="hero-img" src={HeroImage} alt="hero image of traveler in coastal setting"></img>
            </div>
        </body>
        <Footer/>

        </>
    )

}

export default Home;
