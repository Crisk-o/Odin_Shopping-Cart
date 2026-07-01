// this will be the homepage for our store
import { Link } from "react-router"
import HeroImage from "./assets/hero-img-2.png"
function Home() {
    return (
        <>
        <div>
            <div className='title-container'>
                <h1>Wanderlust</h1>
            </div>

            <div className='content-container'>
                <div className="lets-shop-button">
                    <Link to="/shop">Discover something new</Link>
                </div>
                <img className="hero-img" src={HeroImage} alt="hero image of traveler in coastal setting"></img>
            </div>
        </div>
        </>
    )

}

export default Home;
