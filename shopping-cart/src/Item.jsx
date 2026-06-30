import {useState, useEffect} from "react";
import "./Item.css";
function Item() {
    const [itemCount, setItemCount] = useState(0);
    const [imageURL, setImageURL] = useState("#");
    const [itemTitle, setItemTitle] = useState("item-title");
    const [isActive, setActive] = useState(false);
    useEffect(() => {
        const randIndex = Math.floor(Math.random() * 30) + 1;
        fetch(`https://dummyjson.com/products/${randIndex}`, {
            mode: 'cors'
        })
        .then(response => response.json())
        .then(response => {
            setImageURL(response.thumbnail); 
            setItemTitle(response.title); 
        })
        .catch((error) => console.error(error));
  }, []);
    
    const handleItemCount = (e) => {
        // eslint-disable-next-line no-unused-vars
        const {name, value} = e.target;
        // setItemCount((prevInfo) => ({...prevInfo, [name]: value }) )
        setItemCount(([value]))

    }
    const handleAddItem = () =>{
        setActive(!isActive);
        setItemCount(1);
    }

    return (
        <>
            <div className="grid-item">
                <img src={imageURL} alt="item-image"></img>
                <h4>{itemTitle}</h4>
                <button onClick={handleAddItem}>Add to Cart</button>
                <div>
                    <input className={`add-item-input ${isActive ? "unhidden" : "hidden"}`} name="itemCount" type="number" onChange={handleItemCount} value={itemCount}></input>
                    {/* <div className="increment-decrement-buttons">
                        <button name="incrementCount" type="button" onClick={(itemCount) => itemCount + 1}><ChevronUp/></button>
                        <button name="decrementCount" type="button" onClick={(itemCount) => itemCount - 1}><ChevronDown/></button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Item;