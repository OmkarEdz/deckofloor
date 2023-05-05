import React from "react";
import { Helmet } from "react-helmet";
import HeaderAgency from "../../components/header/HeaderAgency";
import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../components/footer/FooterTwo";
import Social from "../../components/social/Social";
import ContactForm from "../../components/ContactForm";
import Address from "../../components/Address";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>DeckOFloor – The Complete Flooring Solution</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderAgency />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--contact">
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
                      <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">Contact Us</h1>
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
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "70px", "--ptf-md": "5rem" }}
            ></div>

            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h2 className="h1 large-heading has-accent-1 custom-heading" id="contact_form">
                      Let's get an estimate
                    </h2>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* Contact top portion */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-xl": "3.5rem", "--ptf-md": "3rem" }}
            ></div>
          </section>
          {/* End section contact header */}

          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="contact-leftbar">
                  <Address />
                  <Social />
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-6 offset-lg-1">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <ContactForm />
                    {/* End ContactForm */}
                  </div>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "7rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-3  footer-new-wrapper">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <FooterTwo />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRightTwo />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
