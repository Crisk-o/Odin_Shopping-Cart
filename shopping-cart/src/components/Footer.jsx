import {Link} from "react-router"
export default function Footer(){
    return (
        <>
        <footer>
            <nav>
                <ul>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                </ul>
            </nav>
        </footer>
        </>
    )
}