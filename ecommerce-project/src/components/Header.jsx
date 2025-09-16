import { NavLink } from "react-router"
import "./Header.css"
import logoWhiteImage from "../assets/images/logo-white.png"
import mobileLogoWhiteImage from "../assets/images/mobile-logo-white.png"
import searchIcon from "../assets/images/icons/search-icon.png"
import cartIcon from "../assets/images/icons/cart-icon.png"

export default function Header() {
    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src={logoWhiteImage} />
                    <img className="mobile-logo"
                        src={mobileLogoWhiteImage} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">
                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">3</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    )
}