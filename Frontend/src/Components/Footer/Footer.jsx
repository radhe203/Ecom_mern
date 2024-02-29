import "./Footer.css"
import React from 'react'
import instagram_icon from "../Assets/instagram_icon.png"
import whatsapp_icon  from "../Assets/whatsapp_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import logo from "../Assets/logo.png"
function Footer() {
  return (
    <div className="footer">
        <div className="logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>

        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="f-icons">
          
            <div className="social">
                <img src={instagram_icon} alt="" />
            </div>

            <div className="social">
                <img src={whatsapp_icon} alt="" />
            </div>

            <div className="social">
                <img src={pintester_icon} alt="" />
            </div>
        </div>

        <hr />
        <p> &copy; Copyright @ 2024 - All Right Reserved</p>

    </div>
  )
}

export default Footer