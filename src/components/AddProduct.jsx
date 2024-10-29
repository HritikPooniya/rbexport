import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ product, value,setIsPopup,id }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(product || "");
  const [image, setImage] = useState();
  const [price, setPrice] = useState(value || 0);

  const addProduct = async () => {
    const product = new FormData();

    product.append("name", name);
    product.append("image", image);
    product.append("price", price);
    if(product){
      try {
        const response = await axios.put(
          `https://rbbackend.onrender.com/products/${id}`,
          product
        );
        console.log(response);
        if(setIsPopup){
          setIsPopup(false);
        }
       
        alert("Product Added Successfully!");
        navigate("/product");
      } catch (error) {
        console.error("Error adding product:", error);
      }

    }else{
      try {
        const response = await axios.post(
          "https://rbbackend.onrender.com/products",
          product
        );
        console.log(response);
        
       
        alert("Product Added Successfully!");
        navigate("/cms");
      } catch (error) {
        console.error("Error adding product:", error);
      }

    }

   
  };

  return (
    <div
      className="mx-auto my-5 productAdd flex-column"
      style={{ position: "sticky", padding: "5%" }}
    >
      <h2>Add Product</h2>
      <div className="d-flex flex-column mb-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="d-flex flex-column mb-4">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="image" className="mb-3">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <button className="mt-5" onClick={() => addProduct()}>
        Add
      </button>
    </div>
  );
};

export default AddProduct;
