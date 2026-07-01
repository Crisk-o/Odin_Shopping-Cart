import {Outlet} from "react-router"
import {useState} from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function Layout(){
    const [cart, setCart] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0.00);
    

    const addToCart = (product, itemCount) => {
        const quantityToAdd = Number(itemCount);
        setCart((prev) => {
            console.log("product id: " + product.id + " count is : " + quantityToAdd)
            // checks to see if item is already in cart, 
            // if so increase quantity, else add to cart.
            const existing = prev.find((item) => item.id === product.id);
            if(existing){
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd} : item
                );
            }
            return [...prev, { ...product, quantity: itemCount }];
            });
    };

    const updateCart = (productId, quant) => {
        const qty = Number(quant);
        setCart((prev) => {
            if(qty <= 0){
                // remove item if quantity is 0 or less.
                return prev.filter((item) => item.id !== productId);
            }
            return prev.map((item) => item.id === productId ? {...item, quantity: qty} : item)
        })
    };


    const totalItems = cart.reduce((sum, currentVal) => sum + currentVal.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0.00);
    return (
        <div>
            <Navbar totalItems={totalItems}/>
            <main>
                <Outlet context={{cart, setCart, addToCart, updateCart, totalPrice}} />
            </main>
            <Footer/>
        </div>
    );
}