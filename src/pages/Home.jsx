import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import Products from "../components/Products";

const Home = () => {
  const [index, setIndex] = useState(-1);
  const [faq, setFaq] = useState();
  // const handleScroll = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const [product, setProduct] = useState(null);
  const [data, setData] = useState(null);
  // const [about, setAbout] = useState("");
  // const [vision, setVision] = useState("");
  // const [mission, setMission] = useState("");
  // const [chilli, setChilli] = useState("");
  // const [banana, setBanana] = useState("");

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

  useEffect(() => {
    axios
      .get("https://rbbackend.onrender.com/api/faq")
      .then((response) => {
        setFaq(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    axios
      .get("https://rbbackend.onrender.com/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmitMessage = async () => {
    // const data = new FormData();
    // data.append('name',message.name);
    // data.append('phone',message.phone);
    // data.append('country',message.country);
    // data.append('message',message.message);
    // data.append('email',message.email);
    await axios
      .post("https://rbbackend.onrender.com/api/contact", message)
      .then((response) => {
        console.log(response);
        console.log("Message Sent Successfully!");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  console.log({ product });
  console.log({ data });

  // useEffect(() => {
  //   data?.map((val) => {
  //     // if (val.section === "about") setAbout(val.content);
  //     // if (val.section === "vision") setVision(val.content);
  //     // if (val.section === "mission") setMission(val.content);
  //     // if (val.section === "chili") setChilli(val.content);
  //     // if (val.section === "banana") setBanana(val.content);
  //   });
  // }, [data]);

  return (
    <>
      <div>
        {" "}
        <Carousel />
        <Products />
        <div className="page-content p-100 mb-0 mt-0">
          <div className="container">
            <div className="row">
              <h2>ABOUT US</h2>
              <article>
                Welcome to Olive Trading FZ-LLC, your trusted partner in the
                dynamic world of international trade. With our roots firmly
                planted in the vibrant heart of United Arab Emirtes, we have
                emerged as a beacon of excellence in the export and import
                business.
              </article>
              <div
                className="col-md-6 triggerAnimation animated fadeInRight mt-1"
                data-animate="fadeInRight"
              >
                <img
                  src="https://olive.avantikain.com/assets/images/dotted-worldmap.png"
                  alt=""
                />
              </div>
              <div className="col-md-6 custom-pagh">
                <div className="mt-3 ms-5">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-trophy fs-2 me-3"></i>Cadre of loyal and
                    faithful suppliers
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-arrows fs-2 me-3"></i>On time Project
                    execution
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-flag fs-2 me-3"></i>Reputed Clients
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-thumbs-up fs-2 me-3"></i>Specialized
                    labour force (skilled/unskilled)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content" style={{ background: "#efefee" }}>
          <div className="container">
            <div className="row p-20 pt-60">
              <div className="col-md-12 col-sm-12">
                <div className="custom-heading">
                  <h2>WHY TRADE WITH US ?</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container v2 pb-5">
            <div className="row mx-5 px-5 mb-50">
              <div className="servicesGallery">
                <div className="col-12 col-md-4 col-sm-6 col-xs-12">
                  <div className="about-content">
                    <div className="about-img">
                      <a href="/" style={{ textDecoration: "none" }}>
                        <img src="https://rbcorporationexport.netlify.app/assets/8104-rd.jpg" alt="" />
                      </a>
                      <div className="about-desc v3 absolute">
                        <h3>
                          <a href=" " style={{ textDecoration: "none" }}>
                            R&D
                            <br />
                            <span>SUPPORT</span>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-sm-6 col-xs-12">
                  <div className="about-content">
                    <div className="about-img">
                      <a href="/" style={{ textDecoration: "none" }}>
                        <img
                          src="https://rbcorporationexport.netlify.app/assets/4559-9ae558da-11f8-48a5-9a9c-1243fff553b1.jpg"
                          alt=""
                        />
                      </a>
                      <div className="about-desc v3 absolute">
                        <h3>
                          <a href=" " style={{ textDecoration: "none" }}>
                            TAILOR MADE
                            <br />
                            <span>PRODUCTION</span>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-sm-6 col-xs-12">
                  <div className="about-content">
                    <div className="about-img">
                      <a href="/" style={{ textDecoration: "none" }}>
                        <img src="https://rbcorporationexport.netlify.app/assets/4524-zamaninda-teslimat.jpg" alt="" />
                      </a>
                      <div className="about-desc v3 absolute">
                        <h3>
                          <a href=" " style={{ textDecoration: "none" }}>
                            DELIVERY
                            <br />
                            <span>ON TIME</span>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-sm-6 col-xs-12">
                  <div className="about-content">
                    <div className="about-img">
                      <a href="/ " style={{ textDecoration: "none" }}>
                        <img src="https://rbcorporationexport.netlify.app/assets/8112-kolay-ulasim-kare.jpg" alt="" />
                      </a>
                      <div className="about-desc v3 absolute">
                        <h3>
                          <a href=" " style={{ textDecoration: "none" }}>
                            ACCESSIBLE
                            <br />
                            <span>SUPPORT TEAM</span>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-sm-6 col-xs-12">
                  <div className="about-content">
                    <div className="about-img">
                      <a href="/" style={{ textDecoration: "none" }}>
                        <img src="https://rbcorporationexport.netlify.app/assets/3734-2889-inavasyon-kare.jpg" alt="" />
                      </a>
                      <div className="about-desc v3 absolute">
                        <h3>
                          <a href=" " style={{ textDecoration: "none" }}>
                            INNOVATION
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-sm-6 col-xs-12">
                  <div className="about-content">
                    <div className="about-img">
                      <a href="/  " style={{ textDecoration: "none" }}>
                        <img src="https://rbcorporationexport.netlify.app/assets/8881-2889-inavasyon-kare.jpg" alt="" />
                      </a>
                      <div className="about-desc v3 absolute">
                        <h3>
                          <a href=" " style={{ textDecoration: "none" }}>
                            TECHNOLOGY
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content custom-bkg bkg-dark-blue column-img-bkg relative">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-md-offset-2 absolute-content p-4 ">
                <div className="mx-5 px-5">
                  <h2>LET'S CONNECT</h2>
                  <h3 className="headings">DROP A MESSAGE</h3>
                  <div className="inputContainer">
                    <div className="row d-flex flex-wrap">
                      <div className="col-6">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="name">Name</label>
                          <input
                            className="w-100"
                            type="text"
                            value={message.name}
                            onChange={(e) =>
                              handleChange("name", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      {/* <div className="col-2">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="Phone">Code</label>
                          <PhoneCode handleChange={handleChange} />
                        </div>
                      </div> */}

                      <div className="col-6">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="Phone">Phone Number</label>
                          <input
                            type="number"
                            value={message.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="Email">Email</label>
                          <input
                            type="mail"
                            value={message.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="Country">Country</label>
                          <input
                            type="text"
                            value={message.country}
                            onChange={(e) =>
                              handleChange("country", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-2 my-3">
                      <label htmlFor="message">Message</label>
                      <textarea
                        typeof="text"
                        value={message.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className=" d-flex ms-auto">
                    <button
                      className="ms-auto"
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "4px 10px",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                      onClick={() => handleSubmitMessage()}
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?wkrEcHNvWixkFZhq6"
                  width="100%"
                  height="540"
                  allowfullscreen="false"
                  loading="lazy"
                  title="map"
                ></iframe>
              </div>

              <div id="faq"></div>
            </div>
          </div>
        </div>
        <div className="mx-5 px-5 my-5">
          <h3 className="headings mb-3">FAQ</h3>

          <div>
            {faq?.map((val, itr) => (
              <div
                className="faq mb-3"
                onClick={() => setIndex(index === itr ? -1 : itr)}
              >
                <article className="d-flex justify-content-between align-items-center">
                  {val.title}{" "}
                  <div>
                    {index === itr ? (
                      <i
                        className="fa fa-angle-up me-4 fs-4"
                        style={{ color: "blue" }}
                      ></i>
                    ) : (
                      <i className="fa fa-angle-down me-4 fs-4"></i>
                    )}
                  </div>
                </article>
                {index === itr && (
                  <article
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      fontWeight: "500",
                      textTransform: "none",
                    }}
                  >
                    <hr />
                    {val.content}
                  </article>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="page-content p-20 pt-60">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="custom-heading">
                  <h2>JOIN US ON SOCIAL</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="social">
              <div className="col-6 mail">
                <div>
                  <i className="fa fa-envelope me-3 fs-1"></i>
                </div>
                <div className="d-flex flex-column">
                  <h3>MAIL</h3>
                  <article>xyx@xyx.com</article>
                </div>
              </div>
              <div className="col-6 d-flex align-items-center telegram">
                <h3 className="ms-5">JOIN US ON THE TELEGRAM</h3>
                <div>
                  <i className="fa fa-telegram fs-1 ms-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
