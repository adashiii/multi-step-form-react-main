import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-outer-container">
      <div className="sign-up-container">
        <div className="navigation-status-bar">
          <div className="navigation-status-bar-div1-BI"> Your Profile</div>
          <div className="navigation-status-bar-div2-BI">
            {" "}
            Bussiness Information
          </div>
          <div className="navigation-status-bar-div3-BI"> Additional Users</div>
        </div>

        <div className="your-profile-outer-div">
          <div className="your-profile-inner-div">
            <h3>Step 2</h3>

            <h1 className="your-profile-h1">Business Information</h1>

            <p>Please, enter information about your company.</p>
          </div>
        </div>


        <form>
          <div className="fname-lname-outer-div-signup-duplicate">

            <div className="fname-lname-div-signup-duplicate">
        <div className="div-general-information" >GENERAL INFORMATION </div>
              <div className="div-signup-name">
                <label>Brand Name*</label>
                <input
                  type="text"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Input Your Brand Name"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                  }}
                />
              </div>

              <div className="div-signup-lname">
                <label>Brand Type*</label>
                <input
                  type="text"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Select Brand Type"
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
                <label>Street Address*</label>
                <input
                  type="text"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Input Your Street Address"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                />
              </div>
              <div className="div-signup-lname">
                <label>City*</label>
                <input
                  type="text"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Input City"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="fname-lname-outer-div-signup">
            <div className="fname-lname-div-signup">
              <div className="div-signup-name">
                <label>Zip Code*</label>
                <input
                  type="text"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Input Zip code"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                />
              </div>
              <div className="div-signup-lname">
                <label>Tax ID Number*</label>
                <input
                  type="text"
                  size="28"
                  className="input-tag-signup"
                  placeholder="Input Tax Id Number"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
