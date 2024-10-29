import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    axios
      .get("https://rbbackend.onrender.com/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mx-5 px-5 mt-5 pt-5" id="products">
      <h3 className="headings text-center">PRODUCTS</h3>

      <div className="d-flex justify-content-between mt-4 flex-wrap gap-5">
        {product?.map((element, index) => {
         
          return (
            <div className="col-3">
              <img
                src={element?.image}
                alt=""
                width={"100%"}
                height={"250vh"}
              />
              <div className="row mt-3">
                <div className="col-6">
                  <strong>{element?.name}</strong>
                  <div>${element?.price}</div>
                </div>
                <div className="col-6 text-end">
                  <button
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "500",
                      padding: "5px 20px",
                      background: "#19519b",
                      border: "none",
                    }}
                    onClick={()=>navigate(`${element._id}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
