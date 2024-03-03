import { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { RiMenu2Fill } from "react-icons/ri";

/* */
function Navbar() {
  const [Menu, setMenu] = useState("Shop");
  const [hams, setham] = useState("false");
  const { cart } = useContext(ShopContext);
  const { currentUser } = useContext(ShopContext);
  return (
    <>
      <nav className="navbar">
        <div
          className="ham"
          onClick={() => {
            if (hams === "true") {
              setham("false");
            } else {
              setham("true");
            }
          }}
        >
          <RiMenu2Fill />
        </div>
        <Link to="/">
          <div
            className="logo"
            onClick={() => {
              setMenu("Shop");
            }}
          >
            <img src={logo} alt="" />
            <p>SHOPPER</p>
          </div>
        </Link>

        <ul className={hams === "true" ? "show" : null}>
          <Link to="/">
            {" "}
            <li
              onClick={() => {
                setMenu("Shop");
              }}
            >
              {" "}
              Shop {Menu === "Shop" ? <hr /> : null}
            </li>
          </Link>
          <Link to="/mens">
            {" "}
            <li
              onClick={() => {
                setMenu("Men");
              }}
            >
              Men {Menu === "Men" ? <hr /> : null}{" "}
            </li>
          </Link>
          <Link to="/womens">
            {" "}
            <li
              onClick={() => {
                setMenu("Women");
              }}
            >
              Women {Menu === "Women" ? <hr /> : null}{" "}
            </li>
          </Link>
          <Link to="/kids">
            {" "}
            <li
              onClick={() => {
                setMenu("Kid");
              }}
            >
              Kid {Menu === "Kid" ? <hr /> : null}{" "}
            </li>
          </Link>
        </ul>

        <div className="log-cart">
          <div className="login">
            <button>
            {currentUser.email && currentUser.name && currentUser.email ?   <Link to="/profile">Profile</Link> :  <Link to="/login">LogIn</Link>}
            </button>
          </div>
          <div className="cart">
            <Link to="/cart">
              <img src={cart_icon} alt="" />
            </Link>
            <small className="item-count">{cart.length}</small>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
