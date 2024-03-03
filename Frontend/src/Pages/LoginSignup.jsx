import React, { useContext, useState } from "react";
import "./CSS/LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
function LoginSignup() {
  const [state, setState] = useState("login");
  const [error, setError] = useState(null);
  const { currentUser, setCurrentUser,cart,AddProduct } = useContext(ShopContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cart: cart,
  });
  function handelChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  async function LogSign(e) {
    e.preventDefault();
    if (state === "login") {
      const signData = formData;
      delete signData.name;
      delete signData.cart;
      try {
        const res = await fetch("/backend/user/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signData),
        });
        const data = await res.json();
       if(res.ok){
        setCurrentUser({
          email:data.email,id:data._id,name:data.name
        })
        for(let i = 0; i < data.cart.length;i++){
          AddProduct(data.cart[i].id)
        }
       }
        navigate("/profile");
      } catch (data) {
        setError(data.message);
        return;
      }
    } else if (state === "signup") {
      try {
        const res = await fetch("/backend/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success === true) {
          alert(data.message);
          setState("login");
          return;
        }
      } catch (data) {
        setError(data.message);
        return;
      }
    }
  }

  return (
    <div className="sign">
      <form className="sign-container" onSubmit={LogSign}>
        <h1>{state === "login" ? "Log in" : "Sign in"}</h1>
        <div className="data-feild">
          {state === "login" ? (
            ""
          ) : (
            <input
              type="text"
              required
              id="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handelChange}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={formData.email}
            onChange={handelChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={handelChange}
            required
          />
        </div>
        <button type="submit">Continue</button>
        <p className="have-acc">
          {" "}
          {state === "login"
            ? "Don't have an account ?"
            : "Already have an account ?"}{" "}
          <span
            onClick={() => {
              {
                state === "login" ? setState("signup") : setState("login");
              }
            }}
          >
            {state === "login" ? "Sign up" : "Sign in"}
          </span>
        </p>
        <div className="term">
          <input type="checkbox" />
          <p>By Continuing, i agreeto the term of use & privacy policy</p>
        </div>
      </form>
    </div>
  );
}

export default LoginSignup;
