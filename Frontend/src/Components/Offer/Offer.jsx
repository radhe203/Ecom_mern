import React from 'react'
import "./Offer.css"
import exclusive_image from "../Assets/exclusive_image.png"
function Offer() {
  return (
    <div className='hero offer'>
        <div className="hero-left offer-left">
            <h1>
                Exclusive <br /> Offers for you
            </h1>
            <h2>Only on the best sellors product</h2>
            <button>Check Now</button>
        </div>
        <div className=" hero-wright offer-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offer