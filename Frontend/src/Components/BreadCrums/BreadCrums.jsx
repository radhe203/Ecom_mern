import ProductDisplay from "../ProductDisplay/ProductDisplay";
import "./BreadCrums.css";
import breadcrum_arrow from "../Assets/breadcrum_arrow.png"
import React from "react";

function BreadCrums({ product }) {
  return (
    <div>
      <div className="breadcrums">
        Home <img src={breadcrum_arrow} alt="" /> Shop
        <img src={breadcrum_arrow} alt="" /> {product.category}
        <img src={breadcrum_arrow} alt="" /> {product.name}
      </div>
      <ProductDisplay product={product}></ProductDisplay>
    </div>
  );
}

export default BreadCrums;
