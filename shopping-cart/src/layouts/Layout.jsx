import {Outlet} from "react-router"
import {useState} from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function Layout(){
    const [cart, setCartArray] = useState([]);
    
    // const addToCart = (product) => {
    //     setCartArray((prev) => {
    //         const productExist = prev.find((item) => item.id === product.id);
    //         if(productExist){
    //             return prev.map((item) => 
    //             item.id === product.id ? {...item, itemCount: item.itemCount + 1} : item
    //         );
    //     }
    //     return [...prev, { ...product, itemCount: 1}];
    //     });
    // }
    // const addToCart = (product) => {
    //     setCartArray((prev) => {

    //     })
    // }
    const totalItems = cart.reduce(())
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}