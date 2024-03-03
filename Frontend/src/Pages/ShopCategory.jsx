import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Item from '../Components/Item/Item';
import "./CSS/ShopCategory.css"
function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
 
  return (
    <div className="shop-category">
      
      <img src={`${props.banner}`} alt="" className="shopcategory-banner" />

      <div className="shopcategory-products">
        {
          all_product.map((item,index)=>{
            if(item.category === props.category){
              return <Item key={index} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} id={item.id} category = {props.category}></Item>
            }
          })
        }
      </div>
    </div>
  );

  // return (
  //   <>
  //   <div>hi</div>
  //   </>
  // );
}

export default ShopCategory;