import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [data, setData] = useState(null);
  const [about, setAbout] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  const [story, setStory] = useState("");

  useEffect(() => {
    axios
      .get("https://rbbackend.onrender.com/api/content")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log({error});
      });
  }, []);

  useEffect(() => {
    data?.map((val) => {
      if (val.section === "banana") setAbout(val.content);
      if (val.section === "vision") setVision(val.content);
      if (val.section === "mission") setMission(val.content);
      if (val.section === "about") setStory(val.content);
      return 0;
    });
  }, [data]);

  console.log({ about });

  return (
    <>
      <div>
        <img src="assets/hakkimizda3.jpg" alt="" width="100%" />
        <div id="hakkimizda" class="p-80">
          <div class="page-content">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <div class="custom-heading">
                    <h2>ABOUT US</h2>
                  </div>

                  <div class="col-md-12">
                    {" "}
                    <p>
                      Since 1900&rsquo;s a lot has changed but not our company
                      culture. With its experience that exceeds half a century
                      and team of experts, Mateks keeps moving forward with
                      success. Our honest trade practices and love for what we
                      do are the two main values that enable our story to be
                      passed down generations. Mateks improves itself and stands
                      out in the industry every passing year with its diverse
                      product range as well as its production capabilities for
                      needs; while pleasure of manufacturing in a modern,
                      sterile, and natural manner.
                    </p>
                    <p>
                      It has been our number one priority to create value for
                      our clients and meet their expectation with said value and
                      consistency. We prioritize quality over quantity, invest
                      in client focused R&amp;D and stand by our clients after
                      the sale. We continue to produce with the mindset of
                      giving back what we get from the nature without giving up
                      quality and 100% transparency. We realize our client
                      focused production by optimizing technology and with world
                      class production capacity and quality. With our production
                      capacity which is 6.000 tons in a year we put out quality
                      products tailored for the needs of 4 continents. Women
                      make up 89% of our team which consist of people who are
                      experienced and experts of their field. We enjoy the
                      happiness of supporting women employment and having a team
                      that is success-oriented and harmonious.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: `url(assets/chilies.jpg) center center / cover`,
            height: "200px",
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div id="vizyon-misyon" className="p-4">
          <div className="page-content">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <div class="col-md-12 ">
                    <p dir="ltr" style={{ textAlign: "justify" }}>
                      Our experience which exceeds 60 years and our traditions
                      which has been passed down for 4 generation get strength
                      from honesty, progress, and our respect towards nature. We
                      value to gain new production capacity and realize work
                      that is export oriented. We prioritize creating value for
                      our customers and meet their needs and expectations
                      swiftly with quality while valuing quality over quantity.
                      We focus on building long lasting partnership by not only
                      offering specialized R&amp;D work but also with quality,
                      reliability, and transparency. We enjoy the happiness of
                      having an impact since 1900&rsquo;s while respecting
                      nature and people.
                    </p>

                    <h3
                      className="my-5"
                      dir="ltr"
                      style={{ textAlign: "center" }}
                    >
                      We are grateful to you for being a part of our story.
                    </h3>
                  </div>
                  <br />
                  <div class="col-md-6">
                    <div class="custom-heading mb-4">
                      <h2>VISION</h2>
                    </div>

                    <p style={{ textAlign: "justify" }}>{vision}</p>
                  </div>

                  <div class="col-md-6">
                    <div class="custom-heading mb-4">
                      <h2>MISSION</h2>
                    </div>
                    <p style={{ textAlign: "justify" }}>{mission}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tarihcemiz mb-5">
        <div
          className="page-content p-4 relative"
          style={{ background: "#e1e1e1" }}
        >
          <div className="container relative">
            <div className="row">
              <div className="col-md-12">
                <div className="custom-heading">
                  <h2>OUR STORY</h2>
                </div>

                <div className="text-center">{story}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
