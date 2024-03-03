import React, { useState } from "react";
import "./AddProduct.css";
import { app } from "../../../firebase.js";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import upload_area from "../../assets/upload_area.svg";
function AddProduct() {
  const [image, SetImage] = useState(null);
  const [imageError, SetImageError] = useState(null);
  const [uploading, SetUploading] = useState(false);
  const [success, setSuccess] = useState(0);
  const [detail, Setdetail] = useState({
    name: "",
    old_price: 5,
    new_price: 5,
    category: "",
    image: "",
  });
  function handelChange(e) {
    Setdetail({ ...detail, [e.target.name]: e.target.value });
  }

  async function ImageUpload() {
    SetUploading(true);
    setSuccess(0);
    SetImageError(false);
    const storage = getStorage(app);
    const filename = new Date().getTime() + image.name;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setSuccess(progress);
      },
      (error) => {
        SetImageError(true);
        SetUploading(false);
        setSuccess(0);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          Setdetail({ ...detail, image: downloadUrl });
          SetUploading(false);
        });
      }
    );
  }

  async function submitHandel(e) {
    e.preventDefault();

    try {
      const res = await fetch("/backend/product/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(detail),
      });

      const data = await res.json();
        alert("product added")
        SetUploading(false);
        return;

    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <form className="add-product" onSubmit={submitHandel}>
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
            type="Number"
            value={detail.old_price}
            name="old_price"
            placeholder="Type Here"
            onChange={handelChange}
          />
        </div>

        <div>
          <p>Offer Price</p>
          <input
            type="Number"
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
        {imageError && (
          <p style={{ color: "red", fontSize: "12px" }}>
            image size must be less than 2Mb
          </p>
        )}
        {uploading && !imageError ? (
          <p style={{ color: "green", fontSize: "12px" }}>
            Image uploading {success}%...
          </p>
        ) : (
          ""
        )}
        {success < 100 && (
          <button
            type="button"
            onClick={() => ImageUpload()}
            className="upload-btn"
          >
            {uploading ? "Uploading" : "Upload Image"}
          </button>
        )}

        <input
          type="file"
          hidden
          name="image"
          id="file-input"
          onChange={(e) => {
            setSuccess(0);
            SetImage(e.target.files[0]);
          }}
        />
        {success >= 100 && (
          <button className="addproduct-btn" type="submit">
            ADD Product
          </button>
        )}
      </div>
    </form>
  );
}

export default AddProduct;
