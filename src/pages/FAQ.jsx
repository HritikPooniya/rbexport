import axios from "axios";
import React, { useEffect, useState } from "react";
import Faq from "../components/Faq";
import UpdateFaq from "../components/UpdateFaq";

const FAQ = () => {
  const [index, setIndex] = useState(-1);
  const [faq, setFaq] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [idFaq,setIdFaq] =useState();
  const [updateFaqPopup, setUpdateFaqPopup] = useState(false);

  const closeFaq = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://rbbackend.onrender.com/api/faq")
      .then((response) => {
        setFaq(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isOpen, index,updateFaqPopup ]);

  const deleteFaq = async (id) => {
    await axios
      .delete(`/api/faq/${id}`)
      .then((response) => {
        alert(response?.data?.message);
        // console.log({response})
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const handleUpdate = async (faq) => {
    
    await axios
      .put(`/api/faq/${idFaq}`, faq)
      .then((response) => {
        setUpdateFaqPopup(false)
        console.log({ response });
      })
      .then((error) => console.log({ error }));
  };

  return (
    <div>
      <div className="mx-5 px-5 my-5 cmsContainer">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="headings mb-3">FAQ</h3>
          <button onClick={() => setIsOpen(true)}>ADD FAQ</button>
        </div>
        {isOpen && <Faq closeFaq={closeFaq} />}
        <div>
          {faq?.map((val, itr) => (
            <div className="faq mb-3" onClick={() => setIndex(itr)}>
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
                <>
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
                  <div className="d-flex ms-auto w-25">
                    <button
                      className="ms-auto"
                      onClick={() => {
                        setIdFaq(val?._id);
                        setContent(val?.content);
                        setTitle(val?.title);
                        setUpdateFaqPopup(true);
                      }}
                    >
                      Update
                    </button>
                    <button onClick={() => deleteFaq(val?._id)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {updateFaqPopup && <UpdateFaq title={title} content={content} handleUpdate={handleUpdate} />}
    </div>
  );
};

export default FAQ;
