import React, { useContext } from "react";
import "./Item.css"
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
function Item(props) {
  const {Setrel} = useContext(ShopContext)
  return (
    <div className="item">
     <Link to={`/product/${props.id}`}> <img src={props.image} alt="" onClick={()=>
      
      { 
        window.scrollTo(0,0)
        Setrel(props.category)
      }
      }/></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
