import { useState} from "react";
import { useOutletContext } from "react-router";
function Cart_Item({item, itmCount, handleChange}){
    const [itemCount, setItemCount] = useState(itmCount);

    const total = item.price * itemCount;

    const handleItemCount = (e) => {
        // const value = Number(e.target.value);
        setItemCount(e.target.value)
        handleChange(item, Number(e.target.value))
    }

    return (
        <>
            <div data-key={item.id} className="cart-item">
                <img src={item.thumbnail} alt="item-image"></img>
                <h4>{item.title}</h4>
                <div>
                    <input className={`add-item-input }`} min="0" max="30" name="itemCount" type="number" onChange={handleItemCount} value={itemCount}></input>
                </div>
                {/*add a remove item button here later*/}
                <p>{total}</p>
            </div>
        </>
    )
}

export default Cart_Item;