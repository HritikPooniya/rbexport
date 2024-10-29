import React from "react";

const TradeWithUs = () => {
  return (
    <div>
      <div
        className="PageTitleStyle"
        style={{
          padding: "50px 0px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="custom-heading">
                <h1>WHY TRADE WITH US?</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pad" id="rd-support" style={{ marginTop: "14rem" }}>
        <div
          className="page-content subContent mb-5 relative my-5"
          style={{
            background: "#e1e1e1",
            position: "relative",
            padding: "50px 0px",
            marginBottom: "140px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img
                  src="assets/8104-rd.jpg"
                  alt=""
                  //   width="100%"
                  className="wow bounceInLeft"
                  style={{
                    borderRadius: "100%",
                    position: "absolute",
                    top: "-200px",
                  }}
                />
              </div>

              <div className="col-md-1"></div>
              <div className="col-md-6 pl-30">
                <h4 style={{ fontSize: "36px", fontWeight: "700" }}>
                  R&D SUPPORT
                </h4>
                <p>
                  We have a great R&amp;D team working to develop different
                  forms of products in line with the needs of our customers,
                  taking Mateks one step further every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pad"
        id="tailor-made-production"
        style={{ marginTop: "14rem" }}
      >
        <div
          className="page-content subContent mb-5"
          style={{
            background: "#e1e1e1",
            position: "relative",
            padding: "50px 0px",
            marginBottom: "140px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 hidden-md hidden-lg hidden-xl">
                <img
                  src="assets/3734-2889-inavasyon-kare.jpg"
                  width="100%"
                  className="wow bounceInRight"
                  alt=""
                />
              </div>

              <div className="col-md-1"></div>
              <div className="col-md-6 pl-30">
                <h4 style={{ fontSize: "36px", fontWeight: "700" }}>
                  TAILOR MADE PRODUCTION
                </h4>
                <p>
                  We produce products that are &#39;&#39;Just for you&#39;&#39;
                  with Mateks&#39; &#39;&#39;tailor made&#39;&#39; approach. The
                  production is shaped carefully to meet your specific needs,
                  offering the best products that are tailored just for you.
                </p>
              </div>
              <div className="col-md-5 hidden-sm hidden-xs">
                <img
                  src="assets/3734-2889-inavasyon-kare.jpg"
                  width="100%"
                  className="wow bounceInRight"
                  alt=""
                  style={{
                    borderRadius: "100%",
                    position: "absolute",
                    top: "-200px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pad" id="delivery-on-time" style={{ marginTop: "14rem" }}>
        <div
          className="page-content subContent mb-5 relative"
          style={{
            background: "#e1e1e1",
            position: "relative",
            padding: "50px 0px",
            marginBottom: "140px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img
                  src="assets/4524-zamaninda-teslimat.jpg"
                  width="100%"
                  alt=""
                  className="wow bounceInLeft"
                  style={{
                    borderRadius: "100%",
                    position: "absolute",
                    top: "-200px",
                  }}
                />
              </div>

              <div className="col-md-1"></div>
              <div className="col-md-6 pl-30">
                <h4 style={{ fontSize: "36px", fontWeight: "700" }}>
                  DELIVERY ON TIME
                </h4>
                <p>
                  Timing is the key element in any production process. In that
                  regard, our planning department schedules our production line
                  meticulously based on pre-determined delivery dates and
                  arranges shipments accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pad"
        id="easy-to-reach-support-team"
        style={{ marginTop: "14rem" }}
      >
        <div
          className="page-content subContent mb-5 relative"
          style={{
            background: "#e1e1e1",
            position: "relative",
            padding: "50px 0px",
            marginBottom: "140px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 hidden-md hidden-lg hidden-xl">
                <img
                  src="assets/8112-kolay-ulasim-kare.jpg"
                  width="100%"
                  className="wow bounceInRight"
                  alt=""
                />
              </div>

              <div className="col-md-1"></div>
              <div className="col-md-6 pl-30">
                <h4 style={{ fontSize: "36px", fontWeight: "700" }}>
                  ACCESSIBLE SUPPORT TEAM
                </h4>
                <p>
                  We acknowledge constant communication is crucial to creating
                  the most suitable product tailor-made just for you. Our
                  experienced support team is available for your inquiries 24/7.
                </p>
              </div>
              <div className="col-md-5 hidden-sm hidden-xs">
                <img
                  src="assets/8112-kolay-ulasim-kare.jpg"
                  width="100%"
                  className="wow bounceInRight"
                  style={{
                    borderRadius: "100%",
                    position: "absolute",
                    top: "-200px",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeWithUs;
