import React from "react";

const Address = () => {
  return (
    <>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <h5 className="info_title">Address</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "10px" }}></div>
        <p className="fz-20 lh-1p5 has-black-color continfo">
        Decko Floor Private Limited.<br/>  Office No. 303, Samarth House, Survey No. 116/3/1, Pune-Bangalore Highway, Besides Shell Petrol Pump, Warje, Pune – 411 058, Maharashtra, India
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>
      {/* <!--Divider--> */}
      <div className="ptf-divider"></div>
      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
        <h5 className="info_title">Phone</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "10px" }}></div>
        <p className="fz-20 lh-1p5 has-black-color continfo text-decoration-underline">
          <a className="hover-color" href="tel:+918484998925">+91 848 499 8925</a>
          <a className="hover-color" href="tel:+919518533948">+91 951 853 3948</a>
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>
      {/* <!--Divider--> */}
      <div className="ptf-divider"></div>
      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
        <h5 className="info_title">Email</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "10px" }}></div>
        <p className="fz-20 lh-1p5 has-black-color continfo text-decoration-underline">
          <a className="hover-color" href="mailto:info@deckofloor.com">info@deckofloor.com</a>
          <a className="hover-color" href="mailto:sales@deckofloor.com">sales@deckofloor.com</a>
        </p>
      </div>

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>
      {/* <!--Divider--> */}
      <div className="ptf-divider"></div>
      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>
    </>
  );
};

export default Address;
