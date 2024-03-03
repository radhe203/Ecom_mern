import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import data_product from "../Components/Assets/data";
import "./CSS/Cart.css";
function Cart() {
  const { cart, Rmproduct } = useContext(ShopContext);
  let totalprice=0;
  for (let i = 0; i < cart.length; i++) {
      totalprice += cart[i].new_price;
  }
  return (
    <>
      <div className="cart-inner">
        {cart.map((item, index) => {
          return (
            <div className="cart-products" key={index}>
              <div className="cart-product-image">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
              <div className="cart-product-price">
                Price: <span>${item.new_price}</span>
              </div>
              <div className="qty">
                Qty: <span>1</span>
              </div>
              <div className="remove-cart">
                <button
                  onClick={() => {
                    Rmproduct(item.id);
                  }}
                >
                  Reomve
                </button>
              </div>
            </div>
          );
        })}
      </div>
      

      {cart.length > 0 && (<div className="subtotal">
        <h2>Subtotal</h2>
        <hr />
        <div className="sub-detail">
          <div className="discount"> <span>Discout:</span> <span>$0</span></div>
          <div className="shipping">
           <span> Shipping Charges :</span> <span>Free</span>
          </div>
          <hr />
          <div className="total"><span>Total :</span> <span>${totalprice}</span></div>
          <button>Proceed to continue</button>
        </div>
      </div>)}
      {
        cart.length <=0  && (
          <div className="empty">
            Your Cart is Empty
          </div>
        )
      }
    </>
  );
}

export default Cart;

/*
//

<div className="cart-products">
          <div className="cart-product-image">
            <img src={data_product[0].image} alt="" />
            <p>{data_product[0].name}</p>
          </div>
          <div className="cart-product-price">Price: <span>${data_product[0].new_price}</span></div>
          <div className="qty">Qty: <span>1</span></div>
          <div className="remove-cart">
            <button>Reomve From Cart</button>
          </div>
        </div>

*/
