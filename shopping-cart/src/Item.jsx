import {useState, useEffect} from "react";
import "./Item.css";
function Item({key, title, price, imgURL, }) {
    // const [itemId, setItemID] = useState(key);
    // const [itemPrice, setItemPrice] = useState(price);
    const [itemCount, setItemCount] = useState(0);
    // const [imageURL, setImageURL] = useState(imgURL);
    // const [itemTitle, setItemTitle] = useState(title);
    
    
    // useEffect(() => {
    //     const randIndex = Math.floor(Math.random() * 30) + 1;
    //     fetch(`https://dummyjson.com/products/${randIndex}`, {
    //         mode: 'cors'
    //     })
    //     .then(response => response.json())
    //     .then(response => {
    //         setImageURL(response.thumbnail); 
    //         setItemTitle(response.title); 
    //         setItemID(response.id);
    //         setItemPrice(response.price);
    //     })
    //     .catch((error) => console.error(error));
    // }, []);
    
    const handleItemCount = (e) => {
        // eslint-disable-next-line no-unused-vars
        const {name, value} = e.target;
        // setItemCount((prevInfo) => ({...prevInfo, [name]: value }) )
        setItemCount(([value]))

    }
    const handleAddToCart= () =>{
        // take itemCount number and push it to the cart
        // update cart notification number to be accurate to number of items in cart.

    }

    return (
        <>
            <div data-key={key} className="grid-item">
                <img src={imgURL} alt="item-image"></img>
                <h4>{title}</h4>
                <h5>${price}</h5>
                <div>
                    <input className={`add-item-input }`} name="itemCount" type="number" onChange={handleItemCount} value={itemCount}></input>
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </>
    )
}

export default Item;