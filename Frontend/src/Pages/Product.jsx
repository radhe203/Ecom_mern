import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import BreadCrums from "../Components/BreadCrums/BreadCrums"
import { ShopContext } from '../context/ShopContext';
function Product() {
  const {data} = useContext(ShopContext);
  const {productid} = useParams();
  const product  = data.find( (e) => e.id === Number(productid))
  return (

    <div>
      <BreadCrums product={product}></BreadCrums>
    </div>
  )
}

export default Product