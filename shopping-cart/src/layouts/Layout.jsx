import {Outlet} from "react-router"
import {useState} from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function Layout(){
    const [cart, setCart] = useState([]);
    
    const addToCart = (product, itemCount) => {
        setCart((prev) => {
            console.log("product id: " + product.id + " count is : " + itemCount)
            // checks to see if item is already in cart, 
            // if so increase quantity, else add to cart.
            const existing = prev.find((item) => item.id === product.id);
            if(existing){
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + itemCount } : item
                );
            }
            return [...prev, { ...product, quantity: itemCount }];
            });
    };


    const totalItems = cart.reduce((sum, currentVal) => sum + currentVal.quantity, 0);
    return (
        <div>
            <Navbar totalItems={totalItems}/>
            <main>
                <Outlet context={{cart, setCart, addToCart}} />
            </main>
            <Footer/>
        </div>
    );
}