import React, { useState } from "react";
import axios from "axios";

const Faq = (props) => {
    const [faq,setFaq] = useState({
        title :'',
        content : ''
    });


    const handleChange = (key, value) => {
        setFaq(prevState => ({
            ...prevState,  
            [key]: value  
        }));
    };

    const handleAddFaq = async ()=>{
        await axios
          .post(`https://rbbackend.onrender.com/api/faq`, faq)
          .then((response) => {
         
            alert('Faq added successfully!');
            props.closeFaq();

          })
          .catch((error) => {
            console.log(error?.response?.data?.error);
            console.log(error);
          });
    }


  return (
    <div style={styles.popup}>
      <div style={styles.popupContent}>
        <h4 style={{ fontWeight: "700" }}>FAQ's</h4>

        <div className="d-flex flex-column">
          <label htmlFor="title">Title</label>
          <input type="text" onChange={(e)=>handleChange('title',e.target.value)} />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="content">Content</label>
          <textarea typeof="text" style={{height:'10vh'}} onChange={(e)=>handleChange('content',e.target.value)}/>
        </div>

        <button className="mt-3" onClick={handleAddFaq}>ADD</button>
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
    width: "40rem",
    // height: "30vh",
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

  heading: {
    fontWeight: "700",
  },
};

export default Faq;
