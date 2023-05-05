import React from "react";
import SocialTwo from "../../social/SocialTwo";

const CopyRightTwo = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-3 no-mar">
        <a href="index.html">
          <img src={process.env.PUBLIC_URL + `/assets/img/root/logo-WH.svg`} alt="" loading="lazy" />
        </a>
      </div>
      {/* End .col */}

      <div className="col-12 col-md-9 text-right no-mar">
        <p className="ptf-footer-copyright has-white-color">
          ©{new Date().getFullYear()}{" "}
          decko floor. All Rights Reserved.
        </p>
        <div className="ptf-footer-socials has-white-color">
          <SocialTwo />
          {/* <!--Social Icon--> */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyRightTwo;
