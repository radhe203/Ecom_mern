import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import banner_men from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";
import Layout from "./Pages/Layout";
import PrivateRoute from "./Pages/PrivateRoute";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory category={"Men"} banner={banner_men} />}
          />
          <Route
            path="/womens"
            element={<ShopCategory category={"Women"} banner={banner_women} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category={"Kid"} banner={banner_kids} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
