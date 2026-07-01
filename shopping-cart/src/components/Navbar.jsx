import {Link} from "react-router";
export default function Navbar({totalItems}){
    return(
        <header>
             <div className="logo-container">
                <h3>Wanderlust</h3>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li>
                        <div>
                            <Link to="/cart">My Cart</Link>
                            <div className="cart-item-counter">{totalItems}</div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}