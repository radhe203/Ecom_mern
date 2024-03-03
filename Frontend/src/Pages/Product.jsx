import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import BreadCrums from "../Components/BreadCrums/BreadCrums"
import { ShopContext } from '../context/ShopContext';
function Product() {
  const {all_product} = useContext(ShopContext);
  const {productid} = useParams();
  const product  = all_product.find( (e) => {
    return e.id === Number(productid)
  })
  return (

    <div>
      <BreadCrums product={product}></BreadCrums>
    </div>
  )
}

export default Product