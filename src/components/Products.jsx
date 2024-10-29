import React from 'react'

const Products = () => {
  return (
    <div className='my-5'>
    <div className="page-content p-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="custom-heading">
                <h2>PRODUCTS</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content pt-0 mb-5">
        <div className="container-fluid custom-fluid">
          <div className="row services-negative-top">
            <div className="col-md-4 col-xs-6 col-sm-6">
              <div className="slider-content">
                <div className="slider-img">
                  <a href="/">
                    <img
                      src="assets/img2.jpg"
                      width="100%"
                      alt="TROPICAL FRUITS"
                    />
                  </a>
                </div>
                <h4 className="slider-h4">
                  <a
                    className="button secondary url"
                    href=" "
                    style={{textDecoration:'none'}}
                  >
                    INFUSED
                    <br />
                    <span>fruits</span>
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 col-sm-6">
              <div className="slider-content">
                <div className="slider-img">
                  <a href=" ">
                    <img
                      src="assets/img1.jpg"
                      width="100%"
                      alt="FRUIT PURE PIECES"
                      
                    />
                  </a>
                </div>
                <h4 className="slider-h4">
                  <a
                    className="button secondary url"
                    href=" "
                    style={{textDecoration:'none'}}
                  >
                    FRUIT PUREE
                    <br />
                    <span>pieces</span>
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 col-sm-6">
              <div className="slider-content">
                <div className="slider-img">
                  <a href="bakesafe-fruit-puree-pieces.html">
                    <img
                      src="assets/chili.jpg"
                      width="100%"
                      alt="BAKESAFE<sup>®</sup> FRUIT PUREE PIECES"
                    />
                  </a>
                </div>
                <h4 className="slider-h4">
                  <a
                    className="button secondary url"
                    href=" "
                    style={{textDecoration:'none'}}
                  >
                    BAKESAFE<sup>®</sup> FRUIT PUREE
                    <br />
                    <span>pieces</span>
                  </a>
                </h4>
              </div>
            </div>
            {/* <div className="col-md-3 col-xs-6 col-sm-6">
              <div className="slider-content">
                <div className="slider-img">
                  <a href="/">
                    <img
                      src="assets/chlli.jpg"
                      width="100%"
                      alt="NATURAL DRIED FRUITS"
                    />
                  </a>
                </div>
                <h4 className="slider-h4">
                  <a
                    className="button secondary url"
                    href="/"
                  >
                    NATURAL DRIED
                    <br />
                    <span>fruits</span>
                  </a>
                </h4>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products