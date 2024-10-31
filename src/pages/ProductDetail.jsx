import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MyContext from "../components/Context";
import AddProduct from "../components/AddProduct";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [isPopup,setIsPopup] =useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { isLogIn } = useContext(MyContext);

  console.log({ product });

  useEffect(() => {
    axios
      .get(`https://rbbackend.onrender.com/product/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const deleteProduct = async () => {
    await axios
      .delete(`https://rbbackend.onrender.com/product/${id}`)
      .then((response) => {
        alert("Product Deleted Successfully!");
        navigate("/product");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  

  return (
    <div className="my-5 py-5">
      
      {isPopup ? <AddProduct product={product?.name} value={product?.price} setIsPopup={setIsPopup} id={id} /> : <div className="container mb-5">
        <div className="col-12">
          <div className="col-sm-7">
            {" "}
            <img src={product?.image} alt="" />
          </div>
          <div className="col-sm-5 mt-5">
            <div>
              <h3>
                <strong>{product?.name}</strong>
              </h3>
            </div>
            <div>
              <h5>
                <strong>{product?.price}</strong>
              </h5>
            </div>
            <div className="cmsContainer d-flex mt-4">
              {isLogIn && <button className="px-3" onClick={()=>setIsPopup(true)}>Update</button>}
              {isLogIn && (
                <button className="px-3" onClick={() => deleteProduct()}>
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default ProductDetail;
