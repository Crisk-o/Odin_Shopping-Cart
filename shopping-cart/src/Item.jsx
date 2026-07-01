import {useState} from "react";
import "./Item.css";

function Item({item, handleButtonClick}){
    const [itemCount, setItemCount] = useState(1);
    
    const handleItemCount = (e) => {
        const value = Number(e.target.value);
        setItemCount(value);
    }

    return (
        <>
            <div data-key={item.id} className="grid-item">
                <img src={item.thumbnail} alt="item-image"></img>
                <h4>{item.title}</h4>
                <h5>${item.price}</h5>
                <div>
                    <input className={`add-item-input }`} min="1" max="30" name="itemCount" type="number" onChange={handleItemCount} value={itemCount}></input>
                </div>
                <button onClick={() => handleButtonClick(item, itemCount)}>Add to Cart</button>
            </div>
        </>
    )
}

export default Item;