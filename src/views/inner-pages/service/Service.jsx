import React from "react";
import { Helmet } from "react-helmet";
import HeaderAgency from "../../../components/header/HeaderAgency";
import ServiceOne from "../../../components/service/ServiceOne";
import Approach from "../../..//components/service/Approach";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>DeckOFloor – The Complete Flooring Solution</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderAgency />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--services services-pg-wrap">
        {/*=============================================
                Start About Us Hero Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
                           
                <div className="banner-img">
                  <p className="img">
                      <img
                      src={process.env.PUBLIC_URL + `/assets/img/root/About-US-Banner.jpg`}
                      alt="Zeplin"
                      loading="lazy"
                    />
                  </p>
                  <div className="container">
                    <div className="textOnBanner">
                      <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">Our Services</h1>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.125rem", "--ptf-lg": "0" }}
                      ></div>
                      <p className="fz-24 has-white-color text-center" style={{ maxWidth: "34.375rem", margin: "0 auto" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="backdrop"></div>
                  </div>
            </div>
          </section>
          {/*=============================================
        Service Section
      ============================================== */}
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "60px", "--ptf-md": "40px" }}
            ></div>
            <div className="container">
              <div className="row">
                {/* <div className="col-lg-3">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <p className="fz-18 our-service-content">
                        We help ambitious businesses like yours generate more
                        profits by building awareness, driving web traffic,
                        connecting with customers and growing overall sales.
                      </p>
                    </div>
                </div> */}
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <p className="fz-18 text-center our-service-content">
                        We help ambitious businesses like yours generate more
                        profits by building awareness, driving web traffic,
                        connecting with customers and growing overall sales.
                      </p>
                      <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "40px", "--ptf-sm": "30px" }}
            ></div>
                    </div>
                  <ServiceOne />
                </div>
                <div className="col-lg-1"></div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "70px", "--ptf-md": "40px" }}
            ></div>
          </section>

          {/*=============================================
            Our Approach Section
        ============================================== */}
          <section
            className="has-accent-1-background grey-bg-serv"
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "70px", "--ptf-md": "60px", "--ptf-sm": "40px" }}
            ></div>
            <div className="container">
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <h2 className="h1 large-heading custom-heading">Our Approach</h2>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "60px", "--ptf-md": "40px", "--ptf-sm": "40px" }}
              ></div>
              <Approach />
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "100px", "--ptf-md": "60px" }}
            ></div>
          </section>

          
      </div>

      {/* <!--Footer--> */}
        <footer className="ptf-footer ptf-footer--style-3 footer-new-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="ptf-footer__top">
                      <FooterTwo />
                    </div>
                    {/* End .ptf-footer__top */}

                    <div className="ptf-footer__bottom">
                      <CopyRightTwo />
                    </div>
                    {/* End .ptf-footer__bottom */}
                  </div>
                </div>
              </div>
            </footer>
    </div>
    </div>
  );
};

export default Service;
