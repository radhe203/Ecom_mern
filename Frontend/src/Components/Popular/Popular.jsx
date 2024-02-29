import React from 'react'
import "./Popular.css"
import data_product from "../Assets/data"
import Item from "../Item/Item"
function Popular() {
  return (
   <div className="popular">
    <h1>Popular in Women</h1>
    <hr />
    <div className="popular-item">
        {
            data_product.map((item,i)=>{
                return (
                    <Item key={i} name={item.name} id={item.id} old_price={item.old_price} new_price={item.new_price} image={item.image} category={item.category} />
                )
            })
        }
    </div>
   </div>
  )
}

export default Popular;