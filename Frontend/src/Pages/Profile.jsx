import React, { useContext } from "react";
import "./CSS/Profile.css"
import { ShopContext } from "../context/ShopContext";
import {Link, useNavigate} from 'react-router-dom'
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
    <section className="profile">
      <header className="header">
        <div className="details">
          <div className="stats">
            <div className="col-4">
              <h4>{currentUser.name}</h4>
            </div>
            <div className="col-4">
              <h4>{currentUser.email}</h4>
            </div>
            <div className="col-4">
              <h4 className="red" onClick={logout}>Log Out</h4>
            </div>

            <div className="col-4">
              <h4 className="red"><Link to={'/admin'}>Become An Seller</Link></h4>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Profile;
