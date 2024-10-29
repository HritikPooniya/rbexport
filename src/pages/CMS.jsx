import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CmsCarousel from "../components/CmsCarousel";
import Popup from "../components/Popup";
import LogIn from "./LogIn";
import MyContext from "../components/Context";

const CMS = () => {
  const navigate = useNavigate();
  const { isLogIn, setIsLogIn } = useContext(MyContext);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [target, setTarget] = useState(false);

  useEffect(() => {
    if (isLogIn) {
      setTarget(true);
    }
  }, [isLogIn]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const [data, setData] = useState(null);
  const [about, setAbout] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [chilli, setChilli] = useState("");
  const [banana, setBanana] = useState("");

  console.log({ chilli });

  useEffect(() => {
    axios
      .get("https://rbbackend.onrender.com/api/content")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    data?.map((val) => {
      if (val.section === "about") setAbout(val.content);
      if (val.section === "vision") setVision(val.content);
      if (val.section === "mission") setMission(val.content);
      if (val.section === "chili") setChilli(val.content);
      if (val.section === "banana") setBanana(val.content);
      return 0;
    });
  }, [data]);

  const handleUpdateContent = (content, key) => {
    if (key === "about") setAbout(content);
    if (key === "vision") setVision(content);
    if (key === "mission") setMission(content);
    if (key === "chili") setChilli(content);
    if (key === "banana") setBanana(content);
  };

  const updateMission = (key, content) => {
    axios
      .put(`https://rbbackend.onrender.com/api/content/${key}`, { content })
      .then((response) => {
        alert("Content Updated Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const value = localStorage.getItem("user");
    console.log({ value });
    if (value === undefined || value === null) {
      setIsLogIn(false);
      setTarget(false);
    } else {
      setTarget(true);
    }
  }, [setIsLogIn]);

  return (
    <>
      {target ? (
        <div className="cmsContainer mb-4">
          <h2 className="text-center mt-3">RB CORPORATION EXPORT CMS</h2>
          <Popup show={isPopupOpen} onClose={closePopup} />

          <hr />

          <div className="d-flex align-items-center justify-content-evenly me-5">
            <button className="flex-start" onClick={() => navigate("/cms/faq")}>
              FAQ
            </button>
            <button className="flex-start" onClick={() =>navigate("/cms/messages")}>
              Messages
            </button>
            <button className="flex-start" onClick={openPopup}>
              Add Carousel Image
            </button>

            <button
              className="me-5"
              onClick={() => navigate("/cms/addProduct")}
            >
              Add Product
            </button>
          </div>

          <hr />
          <div className="d-flex align-items-center">
            <label htmlFor="vision" className="mb-4 mx-5">
              Images
            </label>
          </div>

          <div className="mx-5">
            <CmsCarousel isPopupOpen={isPopupOpen} />
          </div>

          <div className="mx-5">
            <label htmlFor="about" className="mb-4">
              Our Story
            </label>
            <textarea
              className="w-100"
              typeof="text"
              id="about"
              value={about}
              onChange={(e) => handleUpdateContent(e.target.value, "about")}
            />
            <button
              className="mt-3"
              onClick={() => updateMission("about", about)}
            >
              Update
            </button>
          </div>

          <div className="mx-5">
            <label htmlFor="vision" className="mb-4">
              Our Vision
            </label>
            <textarea
              className="w-100"
              typeof="text"
              id="vision"
              value={vision}
              onChange={(e) => handleUpdateContent(e.target.value, "vision")}
            />
            <button
              className="mt-3"
              onClick={() => updateMission("vision", vision)}
            >
              Update
            </button>
          </div>

          <div className="mx-5">
            <label htmlFor="mission" className="mb-4">
              Our Mission
            </label>
            <textarea
              className="w-100"
              typeof="text"
              id="mission"
              value={mission}
              onChange={(e) => handleUpdateContent(e.target.value, "mission")}
            />
            <button
              className="mt-3"
              onClick={() => updateMission("mission", mission)}
            >
              Update
            </button>
          </div>
          {/* 
          <div className="mx-5">
            <label htmlFor="chillie" className="mb-4">
              About G4 Green Chillie
            </label>
            <textarea
              className="w-100"
              typeof="text"
              id="chillie"
              value={chilli}
              onChange={(e) => handleUpdateContent(e.target.value, "chili")}
            />
            <button
              className="mt-3"
              onClick={() => updateMission("chili", chilli)}
            >
              Update
            </button>
          </div> */}

          <div className="mx-5">
            <label htmlFor="banana" className="mb-4">
              About Us
            </label>
            <textarea
              className="w-100"
              typeof="text"
              id="banana"
              value={banana}
              onChange={(e) => handleUpdateContent(e.target.value, "banana")}
            />
            <button
              className="mt-3"
              onClick={() => updateMission("banana", banana)}
            >
              Update
            </button>
          </div>
          <div></div>
        </div>
      ) : (
        <LogIn />
      )}
    </>
  );
};

export default CMS;
