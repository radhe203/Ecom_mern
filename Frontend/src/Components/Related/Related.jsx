import React, { useContext } from 'react'
import "./Related.css"
import Item from "../Item/Item"
import { ShopContext } from '../../context/ShopContext'
function Related() {
    const {rel,all_product,} = useContext(ShopContext);

  return (
   <div className="Related">
    <h1>Related products</h1>
    <hr />
    <div className="Related-item">
        {
            all_product.map((item,i)=>{
                if(rel === item.category){

                    return (
                        <Item key={i} name={item.name} id={item.id} old_price={item.old_price} new_price={item.new_price} image={item.image} category={item.category}/>
                    )
                }
            })
        }
    </div>
   </div>
  )
}

export default Related;