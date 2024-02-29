import React from 'react'
import "./Hero.css"
import hand_img from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero from "../Assets/hero_image.png"
function Hero() {
  return (
   <div className="hero">
    <div className="hero-left">
        <h2>New Arrivals Only</h2>

        <h1>New  <img src={hand_img} alt="" />
        <br />Collections <br />for everyone</h1>

        <button>Latest Collection <img src={arrow} alt="" /></button>
    </div>
    <div className="hero-wright">
       <div className="hero-image">
        <img src={hero} alt="" />
       </div>
    </div>
   </div>
  )
}

export default Hero