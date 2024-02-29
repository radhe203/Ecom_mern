import "./News.css"

import React from 'react'

const News = () => {
  return (
    <div className="offer news">
        <h1>Get exclusive offers on your email</h1>
        <h3>Subscribe to our newsletter and stay updated</h3>
        <div className="email">
        <input type="email" placeholder="Enter your email"/>
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default News