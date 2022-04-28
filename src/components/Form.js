import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
// import OtherInfo from "./OtherInfo";

function Form(props) {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonnumber: "",
    password: "",
    confirmPassword: "",
    username: "",
    nationality: "",
    other: "",
    brandName: "",
    brandtype: "selectvalue",
    streetaddress: "",
    city: "",
    zipcode: "",
    taxIdNumber: "",
  });

  const FormTitles = ["Sign Up", "Personal Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
    // else {
    //   return <OtherInfo formData={formData} setFormData={setFormData} />;
    // }
  };

  return (
    <div className="form">
      {/* <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div> */}
      <div className="form-container">
        <div className="header-create-new-account-outer-div">
          <div className="header-create-new-account">
            <h2 className="header-create-new-account-h2">Create New Account</h2>
            <button
              className="header-create-new-account-button"
              onClick={() => {
                // setPage((currPage) => currPage - 1);
                alert(`The Contact Us page is under construction...`);
              }}
            >
              Contact Us
            </button>

            {/* <h1>{FormTitles[page]}</h1> */}
          </div>
        </div>
        <div className="body">{PageDisplay()}</div>

        <div className="outer-footer">
          <div className="footer">
            <button
              className="footer-back-to-login-button"
              // disabled={page === 0}
              onClick={() => {
                // setPage((currPage) => currPage - 1);
                alert(`The Login page is under construction...`);
              }}
            >
              &lt; Back to Login
            </button>

            <div className="prev-next-button-div">
              <button
                // className="footer-prev-button"

                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                &lt; Previous Step
              </button>
              <button
                className="footer-next-button"
                onClick={() => {
                  // props.onFormYRSubmitHandler
                  if (page === FormTitles.length - 1) {
                    alert(
                      "Next page of Aditional Users is under construction..... "
                    );
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                Next Step &gt;
                {/* {page === FormTitles.length - 1 ? "Submit" : "Next Step"} */}
                {/* {onFormSubmitHandler} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
