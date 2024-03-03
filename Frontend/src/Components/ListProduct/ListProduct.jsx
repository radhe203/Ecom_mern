import React, { useEffect, useState } from "react";
import "./ListProduct.css";
function ListProduct() {
  const [allProduct, SetallProduct] = useState([]);

  async function fetchInfo() {
    const res = await fetch("/backend/product/allproduct");
    const data = await res.json();
    SetallProduct(data);
  }
  useEffect(() => {
    fetchInfo();
  }, []);

  async function deleteHandel(id){
    const res = await fetch("/backend/product/removeproduct",{
      method:'POST',
      headers:{
        'Content-Type':'Application/json'
      },
      body:JSON.stringify({id})
    });
    const data = await res.json();
    if(data.success=== true){
      fetchInfo()
    }
  }
  return (
    <div className="list-product">
      <h1>All product list</h1>
      <hr />
      <div className="list-product-main">
        <p>Products</p>
        <p>tittle</p>
        <p>Old price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        {allProduct.map((product, index) => {
          return <div key={index} className="end-product">
            <img src={product.image} />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <p onClick={()=>deleteHandel(product.id)}>Remove</p>
          </div>;
        })}
      </div>
    </div>
  );
}

export default ListProduct;
