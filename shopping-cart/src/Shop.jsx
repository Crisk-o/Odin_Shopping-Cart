// this will be the shopping page where user adds item to their cart.
// import { Link } from "react-router"
import { useState, useEffect } from "react"
import Item from "./Item";
import "./Shop.css";
import { useOutletContext } from "react-router";
export default function Shop() {
    const { addToCart } = useOutletContext();
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            fetch("https://dummyjson.com/products/")
                .then((response) => response.json())
                .then((response) => {
                    setInventory(response.products);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
            }, []);

    if(loading) { 
        return <div>Loading products...</div>
    }


    return (
        <>
        <div className='title-container'>
            <h1>Our Products</h1>
        </div>

        <div className="shop-item-container">
            {inventory.slice(0,9).map((item => {
                return (<Item 
                    key={item.id}
                    item = {item}
                    // title={item.title}
                    // price={item.price}
                    // imgURL={item.thumbnail}
                    handleButtonClick={(item, qty) => addToCart(item, qty)}
                /> 
                );
            }))}
        </div>
        </>
    )
}
