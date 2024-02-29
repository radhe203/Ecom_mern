import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import Related from "../Related/Related"
import "./ProductDisplay.css"
import { ShopContext } from "../../context/ShopContext";
function ProductDisplay({ product }) {
  const {AddProduct} = useContext(ShopContext);
  return (
    <>
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            src={product.image}
            className="product-display-main-img"
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <span>(122)</span>
        </div>

        <div className="display-price">
          <div className="old_price">${product.old_price}</div>
          <div className="new_price">${product.new_price}</div>
        </div>

        <div className="display-tittle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia debitis inventore aut autem hic error sit odit velit
        </div>
        <ul className="display-size">
        <p>Select Size</p>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
          <li>XXL</li>
        </ul>

        <button className="add-cart" onClick={()=>{
          AddProduct(product.id);
        }}>Add to cart</button>

        <div className="display-category">
          Category : <span>{product.category}</span>
        </div>

        <div className="display-tag">
          tags : <span> Modern Latest Trending</span>
        </div>
        
      </div>
    </div>
    <Related></Related>
    </>
  );
}

export default ProductDisplay;
