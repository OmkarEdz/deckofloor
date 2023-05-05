import React from "react";
import FooterList from "../list/FooterList";

const FooterTwo = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-8 add-colmn">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-widget ptf-widget-contacts has-white-color">
            <ul className="add-colmn-list">
              <li>
                <span className="lbl">Address</span>
                <p>
                Office No. 303, Samarth House, Survey No. 116/3/1, Pune-Bangalore Highway, Besides Shell Petrol Pump, Warje, Pune – 411 058, Maharashtra, India
                </p>
              </li>
              <li className="align-items-center">
                <span className="lbl">Phone</span>
                <span><a href="tel:+918484998925">+91 848 499 8925</a></span>
                <span><a href="tel:+919518533948">+91 951 853 3948</a></span>
              </li>
              <li className="align-items-center underlined">
                <span className="lbl">Email</span>
                <span><a href="mailto:info@deckofloor.com">
                  info@deckofloor.com
                </a></span>
                <span><a href="mailto:sales@deckofloor.com">
                  sales@deckofloor.com
                </a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End .col */}
      {/* <div className="col-12 col-lg-3"></div> */}
      <div className="col-12 col-lg-4">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-white-color no-colmns">
            <FooterList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
