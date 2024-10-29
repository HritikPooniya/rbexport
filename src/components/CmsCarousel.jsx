import React, { useEffect, useState } from "react";
import axios from "axios";

const CmsCarousel = (isPopupOpen) => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    axios
      .get("https://rbbackend.onrender.com/images")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isPopupOpen]);

  const deleteImage = async (id) => {
    
    try {
      // Send FormData directly
      const response = await axios.delete(`https://rbbackend.onrender.com/carouselImage/${id}`);
      console.log(response)
      alert('Image deleted Successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="px-5">
      {" "}
      <div className="d-flex justify-content-between mt-4 flex-wrap gap-5">
        {images?.map((element, index) => {
          return (
            <div className="col-3">
              <img
                src={element?.image}
                alt=""
                width={"100%"}
                height={"250vh"}
              />
              <div className="row mt-3">
                <button
                  style={{
                    width:'auto',
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "500",
                    padding: "5px 20px",
                    background: "#19519b",
                    border: "none",
                  }}
                  onClick={()=>deleteImage(element._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CmsCarousel;
