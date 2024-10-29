import React, { useState } from "react";
import PhoneCode from "../components/PhoneCode";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    code: "",
    phone: "",
    country: "",
    message: "",
    companyName: "",
  });

  const handleChange = (key, value) =>
    setMessage((prev) => ({
      ...prev,
      [key]: value,
    }));

  const handleSubmitMessage = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post("https://rbbackend.onrender.com/api/contact", message);
      console.log(response);
      alert("Enquiry Sent Successfully!");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <div
        className="page-title-style01 mt-4"
        style={{
          padding: "50px 0px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="custom-heading">
                <h1>CONTACT US</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content mt-5 col-md-4 d-flex flex-column align-items-center">
        <div className="custom-heading">
          <h3>CONTACT DETAILS</h3>
        </div>

        <div
          className="contactSub col-md-8 p-3 mt-4"
          style={{ background: "#f3f3f3", fontSize: "20px" }}
        >
          R.B. Corporation <br />
          House no. 46, Beldarpara Road <br />
          P.O: Tura, West Garo Hills <br />
          Meghalaya, India <br />
          Pincode - 794001
        </div>

        <div className="p-3 mt-3 col-md-8" style={{ background: "#f3f3f3", fontSize: "20px" }}>
          +91 94361 12013{" "}
        </div>

        <div className="p-3 mt-3 col-md-8" style={{ background: "#f3f3f3", fontSize: "20px" }}>
          <a href="mailto:rbcindia.corp@gmail.com" style={{ textDecoration: "none" }}>
            rbcindia.corp@gmail.com
          </a>
        </div>
      </div>

      <div className="page-content mt-5 col-md-8 px-5">
        <div className="custom-heading mb-5">
          <h3>
            ENQUIRY <span>FORM</span>{" "}
          </h3>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={handleSubmitMessage}>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="wpcf7-text"
                    placeholder="Full Name"
                    value={message.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="wpcf7-text"
                    placeholder="E-Mail"
                    value={message.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>

                <div className="col-md-2 align-items-center d-flex">
                  <div className="w-75">
                    <PhoneCode handleChange={handleChange} />
                  </div>
                </div>

                <div className="col-md-4">
                  <input
                    type="tel"
                    className="wpcf7-text"
                    placeholder="Mobile"
                    value={message.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="wpcf7-text"
                    placeholder="Country"
                    value={message.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="wpcf7-text"
                    id="companyName"
                    placeholder="Company Name (optional)"
                    value={message.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                  />
                </div>

                <div className="col-md-12 mt-2">
                  <textarea
                    rows="6"
                    className="wpcf7-textarea"
                    placeholder="Message"
                    value={message.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  ></textarea>
                </div>

                <div className="col-md-12 my-5">
                  <button type="submit" className="custom-btn">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
