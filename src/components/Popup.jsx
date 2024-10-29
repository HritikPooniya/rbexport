import React, { useState } from "react";
  import axios from "axios";  

const Popup = ({ show, onClose }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setError("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("/carouselImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response)


      alert("Image added successfully!");
      setImage(null);
      onClose();
    } catch (err) {
      console.error("Error uploading image:", err);
      setError("Failed to upload image. Try again.");
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div style={styles.popup}>
      <div style={styles.popupContent}>
        <h3 style={styles.heading} className="d-flex">Upload Image <span className="ms-auto" style={{border:'1px solid  grey', padding:'2px', borderRadius:'50%', width:'40px', height:'40px',textAlign:'center',cursor:'pointer'}} onClick={onClose} >X</span></h3>
        <form onSubmit={handleSubmit} className="d-flex flex-column mx-5">
            <label htmlFor="name">Image</label>
          <input className="mt-3" type="file" onChange={handleImageChange} accept="image/*" style={{border:'1px solid lightgrey', padding:'5px 10px', borderRadius:'3px'}}/>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" className="mt-4">Upload</button>
        </form>
        
      </div>
    </div>
  );
};

const styles = {
  popup: {
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContent: {
    width:'40rem',
    height:'30vh',
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    // textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  closeButton: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
 
  heading:{
    fontWeight : '700',
  },
};

export default Popup;;
