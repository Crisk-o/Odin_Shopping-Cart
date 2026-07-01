import {useState} from "react";

function Cart_Item({item, itmCount}){
    const [itemCount, setItemCount] = useState(itmCount);

    const total = item.price * itemCount;

    const handleItemCount = (e) => {
        const value = Number(e.target.value);
        setItemCount(value);
    }

    return (
        <>
            <div data-key={item.id} className="cart-item">
                <img src={item.thumbnail} alt="item-image"></img>
                <h4>{item.title}</h4>
                <div>
                    <input className={`add-item-input }`} min="0" max="30" name="itemCount" type="number" onChange={handleItemCount} value={itemCount}></input>
                </div>
                <p>{total}</p>
            </div>
        </>
    )
}

export default Cart_Item;