import React from "react";
// import Form from "./components/Form";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-outer-container">
      <div className="sign-up-container">
        <div className="navigation-status-bar">
          <div className="navigation-status-bar-div1"> Your Profile</div>
          <div className="navigation-status-bar-div2">
            {" "}
            Bussiness Information
          </div>
          <div className="navigation-status-bar-div3"> Additional Users</div>
        </div>

        <div className="your-profile-outer-div">
          <div className="your-profile-inner-div">
            <h3>Step 1</h3>

            <h1 className="your-profile-h1">Your Profile</h1>

            <p>
              Enter the login information for your account. You will be able to
              create additional users after registering.
            </p>
          </div>
        </div>

        {/* onFormSubmitHandler() {
          alert(`this page data is saved`)
        } */}

        {/* <form onSubmit={this.onFormSubmitHandler}>  */}
        <form>
          <div className="fname-lname-outer-div-signup">
            <div className="fname-lname-div-signup">
              <div className="div-signup-name">
                <label>First Name*</label>
                <input
                  type="text"
                  size="28"
                  className="input-tag-signup"
                  required
                  placeholder="Input Your First Name"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                  }}
                />
              </div>
              <div className="div-signup-lname">
                <label>Last Name*</label>
                <input
                  type="text"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Input your Last Name"
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="fname-lname-outer-div-signup">
            <div className="fname-lname-div-signup">
              <div className="div-signup-name">
                <label>Email*</label>
                <input
                  type="email"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Input Your Email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                />
               
              </div>
              <div className="div-signup-lname">
                <label>Phone Number*</label>
                <input
                  type="tel"
                  size="28"
                  pattern="[0-9]{10}"
                  className="input-tag-signup"
                  placeholder="Input Your Phone Number"
                  value={formData.phonnumber}
                  onChange={(event) =>
                    setFormData({ ...formData, phonnumber: event.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="fname-lname-outer-div-signup">
            <div className="fname-lname-div-signup">
              <div className="div-signup-name">
                <label>Password*</label>
                <input
                  type="password"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={(event) =>
                    setFormData({ ...formData, password: event.target.value })
                  }
                />
              </div>
              <div className="div-signup-lname">
                <label>Confirm Password*</label>
                <input
                  type="password"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Confirm Your Password"
                  value={formData.confirmPassword}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      confirmPassword: event.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </form>

        {/* <Form onFormYRSubmitHandler={this.onFormSubmitHandler} */}
      </div>
    </div>
  );
}

export default SignUpInfo;
