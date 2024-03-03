import React, { useContext } from "react";
import "./CSS/Profile.css"
import { ShopContext } from "../context/ShopContext";
import {useNavigate} from 'react-router-dom'
function Profile() {
  const { currentUser, setCurrentUser } = useContext(ShopContext);
  const navigate = useNavigate()
 async function logout(){
    const res = await fetch("/backend/user/logout");
    if(res.ok){
      setCurrentUser({
        name: null,
        email: null,
        id: null,
      })
      navigate('/')
    }
  }
  return (
    <section class="profile">
      <header class="header">
        <div class="details">
          <div class="stats">
            <div class="col-4">
              <h4>{currentUser.name}</h4>
            </div>
            <div class="col-4">
              <h4>{currentUser.email}</h4>
            </div>
            <div class="col-4">
              <h4 className="red" onClick={logout}>Log Out</h4>
            </div>

            <div class="col-4">
              <h4 className="red">Become An Seller</h4>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Profile;
