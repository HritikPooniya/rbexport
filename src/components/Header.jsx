import React, { useContext, useEffect } from "react";
import "../styles/header.css";
import MyContext from "../components/Context";

const Header = () => {
  const { isLogIn, setIsLogIn } = useContext(MyContext);
  console.log({ isLogIn });

  useEffect(() => {
    const value = localStorage.getItem("user");
    if (value === undefined || value === null) {
      setIsLogIn(false);
    } else {
      setIsLogIn(true);
    }
  }, [isLogIn, setIsLogIn]);

 
 

  return (
    <div className="header-wrapper header-transparent header">
      <header id="header" className="header-style01">
        <div id="top-bar-wrapper" className="clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-12"></div>
              <div className="col-md-6 col-xs-12">
                <ul id="quick-links" className="pb-2">
                  <li>
                    <i className="fa fa-phone me-2"></i>
                    <a
                      href="tel:+91 94361 12013"
                      onclick="gtag_report_conversion(+91 94361 12013)"
                      style={{ textDecoration: "none", fontSize: "14px" }}
                    >
                      +91 94361 12013
                    </a>
                  </li>

                  <li>
                    <i className="fa fa-envelope me-2"></i>
                    <a
                      href="mailto:rbcindia.corp@gmail.com"
                      style={{ textDecoration: "none", fontSize: "14px" }}
                    >
                      rbcindia.corp@gmail.com
                    </a>
                  </li>
                  <li className="hidden-sm hidden-xs">
                    <a
                      href="/contact"
                      style={{
                        backgroundColor: "rgb(25, 81, 155)",
                        padding: "2px 15px",
                        color: "#FFF",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 col-xs-12 hidden-sm hidden-xs">
                {/* <div id="search">
                <input className="search-submit" onclick="openSearch()" />
              </div> */}
                <ul id="quick-links" className="clearfix social-ul mb-0">
                  <li>
                    <a href="" target="_blank" style={{ marginBottom: "0px" }}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-inner" style={{ height: "3vh" }}>
          <div className="container">
            <div className="main-nav">
              <div className="row">
                <div className="col-md-12">
                  <nav
                    className="navbar navbar-default nav-left"
                    role="navigation"
                  >
                    <div className="navbar-header">
                      <div className="logo mt-3 bg-white ms-5">
                        <a href="/">
                          <img
                            // className="ms-5"
                            src="assets/logo.png"
                            width={"60rem"}
                            alt="Mateks - Natural Ingredients From The Best Fruits in Türkiye"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="collapse navbar-collapse">
                      <ul
                        className="nav navbar-nav"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <li>
                          <a
                            href="/"
                            className="mt-0 pt-0"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Home
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="/about"
                            className="mt-0 pt-0"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            About us
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="/product"
                            className="mt-0 pt-0"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Our products
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="/trade"
                            className="mt-0 pt-0"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Trade with us
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="/#faq"
                            className="mt-0 pt-0"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            FAQ
                          </a>
                        </li>
                        <li className="/contact">
                          <a
                            href="contact"
                            className="mt-0 pt-0"
                            style={{ textDecoration: "none", fontSize: "14px" }}
                          >
                            Enquire Now
                          </a>
                        </li>
                        {isLogIn && (
                         <li className="">
                         <a
                           href="/"
                           className="mt-0 pt-0"
                           style={{
                             textDecoration: "none",
                             fontSize: "14px",
                           }}
                           onClick={(e) => {
                             e.preventDefault(); 
                             localStorage.removeItem("user");  
                             window.location.href = "/";  
                           }}
                         >
                           Log Out
                         </a>
                       </li>
                        )}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
