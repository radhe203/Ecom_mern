import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";
function AddProduct() {
  const [image, SetImage] = useState(null);
  const [detail, Setdetail] = useState({
    name: "",
    old_price: 5,
    new_price: 5,
    category: "",
    image: "",
  });
  console.log(detail)
  function handelChange(e) {
    Setdetail({ ...detail, [e.target.name]: e.target.value });
  }
  async function submitHandel() {
    try {
      const formData = new FormData();
      formData.append("product", image);
      console.log(typeof formData);

      const res = await fetch("/backend/upload", {
        method: "POST",
        headers: {
          accepts: "application/json",
        },
        body:formData,
      });

      const data = await res.json();
      if (data.success == false) {
        console.log(data.message);
        return;
      }
      console.log(data)
      Setdetail({...detail,image:data.image_url})

    } catch (error) {
      console.log(error);
      return;
    }

    try {
      const res = await fetch("/backend/product/addproduct", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },

        body:JSON.stringify(detail)
      });

      const data = await res.json();

      if (data.success == false) {
        console.log(data.message);
        return;
      }


    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Tittle</p>
        <input
          type="text"
          value={detail.name}
          name="name"
          placeholder="Type Here"
          onChange={handelChange}
        />
      </div>

      <div className="addproduct-price">
        <div>
          <p>Price</p>
          <input
            type="text"
            value={detail.old_price}
            name="old_price"
            placeholder="Type Here"
            onChange={handelChange}
          />
        </div>

        <div>
          <p>Offer Price</p>
          <input
            type="text"
            value={detail.new_price}
            name="new_price"
            placeholder="Type Here"
            onChange={handelChange}
          />
        </div>
      </div>

      <div className="selector">
        <p>Product Category</p>
        <select
          name="category"
          value={detail.category}
          className="addproduct_selector"
          onChange={handelChange}
          required
        >
          <option value="">Select</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kid">Kid</option>
        </select>
      </div>

      <div className="file-input">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} />
        </label>
        <input
          type="file"
          hidden
          name="image"
          id="file-input"
          onChange={(e) => {
            SetImage(e.target.files[0]);
          }}
        />
        <button className="addproduct-btn" onClick={submitHandel}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
