import React from "react";
import { motion } from "framer-motion"; 

const Carousel = () => {
  // const [images, setImages] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("/images")
  //     .then((response) => {
  //       setImages(response.data);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // }, []);

  const animations = {
    whileInView: {
      x: 0,
      y: "-500%",
      top: -0,
      opacity: 1,
      transition: { duration: 1 },
    },
    whileInViewed: {
      x: 0,
      y: "-450%",
      opacity: 1,
      transition: { duration: 1 },
    },
    one: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 1 },
    },
    two: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.5 },
    },
    three: {
      y: "100%",
      opacity: 0,
      transition: { duration: 1 },
    },
    four: {
      x: "100%",
      opacity: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide carouselContainer"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
       
              <div class="carousel-item active">
                <img
                  src='/assets/bananas.jpg'
                  className="d-block w-100"
                  alt="Banana"
                />
                <div class="carousel-caption d-none d-md-block">
                  <motion.div
                    className="serviceBox1"
                    whileInView={animations.whileInView}
                    initial={animations.one}
                  >
                    <h3
                      style={{
                        color: "#b79a47",
                        fontSize: "24px",
                        fontWeight: "900",
                      }}
                    >
                      Taste for life
                    </h3>
                  </motion.div>
                </div>
              </div>
          
          <div class="carousel-item active">
            <img
              src="/assets/chilies.jpg"
              className="d-block w-100"
              alt="/assets/logo.png"
            />
            <div class="carousel-caption d-none d-md-block">
              <motion.div
                className="serviceBox1"
                whileInView={animations.whileInView}
                initial={animations.one}
              >
                <h3 style={{color:'orangered'}}>Food without chili is like a day without sunshine! </h3>
              </motion.div>
            </div>
          </div>
          {/* <div class="carousel-item active">
            <img
              src="/assets/banana2.jpg"
              className="d-block w-100"
              alt="/assets/logo.png"
            />
            <div class="carousel-caption d-none d-md-block">
         
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInView}
                initial={animations.three}
              >
                <h2>Banana's</h2>
              </motion.div>
            </div>
          </div> */}
          {/* <div class="carousel-item">
            <img
              src="/assets/bananas.jpg"
              className="d-block w-100"
              alt="/assets/logo.png"
            />
            <div class="carousel-caption d-none d-md-block">
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInViewed}
                initial={animations.three}
              >
                <p style={{fontSize:'24px',fontWeight:'900'}}>17 year of excellence</p>
              </motion.div>
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInView}
                initial={animations.two}
              >
                <h2 className="mb-2" style={{color:'#b79a47'}}>Import & Export Industry</h2>
              </motion.div>
            </div>
          </div> */}
          {/* <div class="carousel-item">
            <img
              src="/assets/img1.jpg"
              className="d-block w-100"
              alt="/assets/logo.png"
            />
            <div class="carousel-caption d-none d-md-block">
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInViewed}
                initial={animations.one}
              >
                <p style={{color:'#ff9679',fontSize:'24px',fontSize:'700'}}>When service matters</p>
              </motion.div>
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInView}
                initial={animations.three}
              >
                <h2 style={{color:'#bd4c0b',fontSize:'34px',fontSize:'900'}}>Your Choice is simple</h2>
              </motion.div>
            </div>
          </div> */}
          {/* <div class="carousel-item active">
            <img
              src="/assets/chli.jpg"
              className="d-block w-100"
              alt="/assets/logo.png"
            />
            <div class="carousel-caption d-none d-md-block">
           
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInView}
                initial={animations.three}
              >
                <h2>Chilli's</h2>
              </motion.div>
            </div>
          </div> */}
          {/* <div class="carousel-item">
            <img
              src="/assets/chilli.jpg"
              className="d-block w-100"
              alt="/assets/logo.png"
            />
            <div class="carousel-caption d-none d-md-block">
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInViewed}
                initial={animations.three}
              >
                <p style={{fontSize:'24px',fontWeight:'900'}}>17 year of excellence</p>
              </motion.div>
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInView}
                initial={animations.two}
              >
                <h2 className="mb-2" style={{color:'#b79a47'}}>Import & Export Industry</h2>
              </motion.div>
            </div>
          </div> */}
          {/* <div class="carousel-item">
            <img
              src="/assets/chili.jpg"
              className="d-block w-100"
              alt="/assets/logo.png"
            />
            <div class="carousel-caption d-none d-md-block">
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInViewed}
                initial={animations.one}
              >
                <p style={{color:'#ff9679',fontSize:'24px',fontSize:'700'}}>When service matters</p>
              </motion.div>
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInView}
                initial={animations.three}
              >
                <h2 style={{color:'#bd4c0b',fontSize:'34px',fontSize:'900'}}>Your Choice is simple</h2>
              </motion.div>
            </div>
          </div> */}
          {/* <div class="carousel-item">
            <img
              src="/assets/chilies.jpg"
              className="d-block w-100"
              alt="/assets/logo.png"
            />
            <div class="carousel-caption d-none d-md-block">
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInViewed}
                initial={animations.one}
              >
                <p style={{color:'#ff9679',fontSize:'24px',fontSize:'700'}}>When service matters</p>
              </motion.div>
              <motion.div
                className="serviceBox2"
                whileInView={animations.whileInView}
                initial={animations.three}
              >
                <h2 style={{color:'#bd4c0b',fontSize:'34px',fontSize:'900'}}>Your Choice is simple</h2>
              </motion.div>
            </div>
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          
        >
          <span
            className="carousel-control-prev-icon py-4"
            aria-hidden="true"
            style={{backgroundColor:'rgb(25, 81, 155)'}}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon py-4"
            aria-hidden="true"
            style={{backgroundColor:'rgb(25, 81, 155)'}}
            
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
