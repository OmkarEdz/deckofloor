import React from "react";
import { Link } from "react-router-dom";

const ContactJarallax = () => {
  return (
    <div className="container text-center">
      <div className="d-inline-flex text-start">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block our-team-box" data-aos="fade" data-aos-delay="0">
          {/* <!--Spacer--> */}
          <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
          <div className="fz-120 fz-90--md has-white-color fw-bold lh-1p1 contactjara-heading">
            <Link to="/contact" className="h1 large-heading custom-heading text-white ptf-filled-link">
              Our Team
            </Link>
          </div>
          <div className="fz-36 has-accent-1 our-team-content">
            <ul>
              <li><p className="fz-24 dots">•</p><p className="fz-24 content">Our team comprises qualified, trained and skilled professionals who can undertake project of any size at any location</p></li>
              <li><p className="fz-24 dots">•</p><p className="fz-24 content">We have latest equipment to enable our team to execute the project in timely and efficient manner</p></li>
              <li><p className="fz-24 dots">•</p><p className="fz-24 content">Attention to detail make our installations look clean and neat</p></li>
              <li><p className="fz-24 dots">•</p><p className="fz-24 content">Trained to minimize wastage of expensive materials</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactJarallax;
