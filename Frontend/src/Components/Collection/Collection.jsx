import React from 'react'
import "./Collection.css"
import new_collections from "../Assets/new_collections"
import Item from "../Item/Item"
function Collection() {
  return (
   <div className="collection">
    <h1>New Collection</h1>
    <hr />
    <div className="collection-item">
        {
           new_collections.map((item,i)=>{
                return (
                    <Item key={i} name={item.name} id={item.id} old_price={item.old_price} new_price={item.new_price} image={item.image} category={item.category}/>
                )
            })
        }
    </div>
   </div>
  )
}

export default Collection;