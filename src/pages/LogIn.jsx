import React, { useContext, useState } from "react";
import "../styles/popup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyContext from "../components/Context";

const LogIn = () => {
  const navigate = useNavigate();
  const { isLogIn, setIsLogIn } = useContext(MyContext);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  console.log({isLogIn})

  const logIn = () => {
    const user = {
      email: name,
      password: pass,
    };
    if (name === "" || pass === "") {
      alert("please enter valid mailId and password");
    }

    axios
      .post(`https://rbbackend.onrender.com/api/login`, user)
      .then((response) => {
        setIsLogIn(true);
        localStorage.setItem("user", response?.data?.token);
        navigate("/cms");
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error?.response?.data?.error);
        console.log(error);
      });
  };


  return (
    <div className="popup" style={{ position: "sticky", padding: "5%" }}>
      <div className="popupContent">
        <h2 className="text-center fs-8" style={{ fontWeight: "700" }}>
          LogIn
        </h2>
        <div className="d-flex flex-column gap-3 mb-4">
          <label htmlFor="mail">E-mail Id</label>
          <input type="mail" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="d-flex flex-column gap-3 mb-4">
          <label htmlFor="pass">Password</label>
          <input type="password" onChange={(e) => setPass(e.target.value)} />
        </div>
        <button
          className="d-flex mx-auto px-3"
          style={{
            backgroundColor: "#19519b",
            border: "none",
            borderRadius: "2px",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={logIn}
        >
          LogIn
        </button>
      </div>
    </div>
  );
};

export default LogIn;
