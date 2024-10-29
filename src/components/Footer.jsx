import React from "react";

const Footer = () => {
  return (
    <div>
      <div id="footer-wrapper" className="footer-dark">
        <footer id="footer">
          <div className="container">
            <div className="row">
              <ul className="col-md-3 col-sm-6 footer-widget-container clearfix">
                <li className="widget widget_newsletterwidget">
                  <div className="title">
                    <img
                      className="mx-auto"
                      src="assets/logo.png"
                      alt="Mateks - Natural Ingredients From The Best Fruits in Türkiye"
                      width="50%"
                      style={{
                        background: "#fff",
                        padding: "19px 10px",
                        marginBottom: "20px",
                        borderRadius: "0px 20px 0px 20px",
                      }}
                    />
                  </div>
             

                  <div className="clearfix"></div>
                  <p>
                    Welcome to RB CORP Trading FZ-LLC, your trusted partner in the
                    dynamic world of international trade. With our roots firmly
                    planted in the vibrant heart of United Arab Emirtes, we have
                    emerged as a beacon of excellence in the export and import
                    business.
                  </p>
                </li>
              </ul>

              <ul className="col-md-3 col-sm-6 footer-widget-container">
                <li className="widget widget_pages">
                  <div className="title">
                    <h3>APPLICATIONS</h3>
                  </div>

                  <ul>
                    <li>
                      <a href=" " style={{textDecoration:'none'}}>R&D Support</a>
                    </li>
                    <li>
                      <a href=" " style={{textDecoration:'none'}}>Tailor Made Production</a>
                    </li>
                    <li>
                      <a href=" " style={{textDecoration:'none'}}>Delivery on time</a>
                    </li>
                    <li>
                      <a href=" " style={{textDecoration:'none'}}>Accessible Support team</a>
                    </li>
                    <li>
                      <a href=" " style={{textDecoration:'none'}}>Innovation</a>
                    </li>
                    <li>
                      <a href=" " style={{textDecoration:'none'}}>Technology</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="col-md-3 col-sm-6 footer-widget-container">
                <li className="widget widget_pages">
                  <div className="title">
                    <h3>PRODUCTS</h3>
                  </div>

                  <ul>
                    <li>
                      <a href=" " style={{textDecoration:'none'}}>G4 Banana</a>
                    </li>
                    <li>
                      <a href=" " style={{textDecoration:'none'}}>Green Chilli</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="col-md-3 col-sm-6 footer-widget-container">
                <li className="widget widget-text">
                  <div className="title">
                    <h3>CONTACT DETAILS</h3>
                  </div>

                  <address>RB Corporation Noida</address>

                  <span className="text-big">+91 94361 12013 </span>
                  <br />

                  <a href="mailto:rbcindia.corp@gmail.com" style={{textDecoration:'none'}}>
                    rbcindia.corp@gmail.com
                  </a>
                  <br />
                  <br />
                  <a href=" " style={{textDecoration:'none'}}>JOIN US ON SOCIAL</a>

                  <br />
                  <ul className="footer-social-icons">
                    <li>
                      <a
                        href=" "
                        target="_blank"
                        className="fa fa-facebook"
                        style={{textDecoration:'none'}}
                      ></a>
                    </li>
                    <li>
                      <a
                        href=" "
                        target="_blank"
                        className="fa fa-instagram"
                        style={{textDecoration:'none'}}
                      ></a>
                    </li>

                    <li>
                      <a
                        href=" "
                        target="_blank"
                        className="fa fa-linkedin"
                        style={{textDecoration:'none'}}
                      ></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        <div className="copyright-container">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>© 2024 RB CORPORATION</p>
              </div>

              <div className="col-md-6">
                <p className="align-right">
                  <a href=" " style={{textDecoration:'none'}} target="_blank">
                    <img
                      src="assets/logo.png"
                      width="45"
                      style={{ float: "right" }}
                      alt=""
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="scroll-up" style={{textDecoration:'none'}}>
          Scroll
        </a>
      </div>
    </div>
  );
};
  
export default Footer;
