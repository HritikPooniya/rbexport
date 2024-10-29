import React, { useState } from "react";

const UpdateFaq = ({ title, content, handleUpdate }) => {
  const [faq, setFaq] = useState({
    title: title,
    content: content,
  });

  const handleChange = (key,val) =>{
    setFaq(prevfaq=>( {
        ...prevfaq,
        [key]:val

    }))
  }

  return (
    <div style={styles.popup}>
      <div style={styles.popupContent}>
        <h4 style={{ fontWeight: "700" }}>UPDATE FAQ</h4>

        <div className="d-flex flex-column">
          <label htmlFor="title" style={{ fontWeight:700}}>Title</label>
          <input
            type="text"
            value={faq.title}
            onChange={(e) => handleChange("title", e.target.value)}
            
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="content" style={{ fontWeight:700}}>Content</label>
          <textarea
            typeof="text"
            style={{ height: "10vh" }}
            value={faq.content}

            onChange={(e) => handleChange("content", e.target.value)}
          />
        </div>

        <button className="mt-3 px-3" onClick={()=>handleUpdate(faq)} style={{color:'#FFF', backgroundColor:'#19519b',border:'none',fontWeight:500,}}>
          Update Faq
        </button>
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

export default UpdateFaq;
