import {useState, useEffect} from "react";
function Cart_Item({id, quantity, thumbnail, title, price}) {
    const [itemID, setItemID] = useState(id);
    const [itemCount, setItemCount] = useState(quantity);
    const [imageURL, setImageURL] = useState(thumbnail);
    const [itemTitle, setItemTitle] = useState(title);
    const [itemPrice, setItemPrice] = useState(price);
    
    // useEffect(() => {
    //     const randIndex = Math.floor(Math.random() * 30) + 1;
    //     fetch(`https://dummyjson.com/products/${randIndex}`, {
    //         mode: 'cors'
    //     })
    //     .then(response => response.json())
    //     .then(response => {
    //         setImageURL(response.thumbnail); 
    //         setItemTitle(response.title); 
    //     })
    //     .catch((error) => console.error(error));
    // }, []);
    
    const handleItemCount = (e) => {
        // eslint-disable-next-line no-unused-vars
        const {name, value} = e.target;
        // setItemCount((prevInfo) => ({...prevInfo, [name]: value }) )
        setItemCount(([value]))
    }
    return (
        <>
            <div className="cart-item">
                <img src={imageURL} alt="item-image"></img>
                <h4>{itemTitle}</h4>
                <div>
                    <input className={`add-item-input }`} name="itemCount" type="number" onChange={handleItemCount} value={itemCount}></input>
                </div>
                <p>{itemPrice * itemCount}</p>
            </div>
        </>
    )
}

export default Cart_Item;