import axios from "axios";
import React, { useEffect, useState } from "react";

const Messages = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://rbbackend.onrender.com/api/contact")
      .then((response) => {
        setData(response?.data);
      })
      .catch((err) => console.log({ err }));
  }, []);

  console.log({ data });
  return (
    <div>
      <div className="mx-5 px-5 my-5">
        <h3 className="headings mb-3">MEESAGES</h3>

        <div>
          {data?.map((val ) => (
            <div
              className="faq mb-3"
              
            >
              <article className="d-flex justify-content-between align-items-center">
                Name - {val.name}{" "}
                <div className="d-flex   flex-column">
                     <div>Phone : {val?.phone}</div>
                    <div>Email : {val?.email}</div>

                </div>
              </article>
            
                <article
                  style={{
                    color: "grey",
                    fontSize: "14px",
                    fontWeight: "500",
                    textTransform: "none",
                  }}
                >
                  <hr />
                  {val.message}
                </article>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
