import React from "react";
import { Helmet } from "react-helmet";
import Brand from "../../../components/brand/Brand";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderAgency from "../../../components/header/HeaderAgency";
import ImageGrid from "../../../components/image-grid/ImageGrid";
import ContactJarallax from "../../../components/jarallax/ContactJarallax";
import PreClients from "../../../components/premium-clients/PreClients";

import AboutBanner from '../../../assets/img/root/About-US-Banner.jpg';
import About from '../../../assets/img/root/profile.png';

const AboutUs = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--about-us">
      <Helmet>
        <title>DeckOFloor – The Complete Flooring Solution</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderAgency />
        {/* End  HeaderHomeDefault */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--about-us">
            {/*=============================================
                Start About Us Hero Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
                           
                <div className="banner-img">
                  <p className="img">
                  <img
                    src={AboutBanner}
                    alt="main-banner"
                    loading="lazy"
                  />
                  </p>
                  <div className="container">
                    <div className="textOnBanner">
                      <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">About Us</h1>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.125rem", "--ptf-lg": "0" }}
                      ></div>
                      <p className="fz-24 has-white-color text-center" style={{ maxWidth: "34.375rem", margin: "0 auto" }}>We, at Decko Floor, provide end-to-end solution for all flooring requirements. We have a wide portfolio of flooring & interior allied services.</p>
                    </div>
                    <div className="backdrop"></div>
                  </div>
            </div>
          </section>
          <section>
              <div className="container">
                <div className="row align-items-center main-wrap about-info-wrap">
                  <div className="col-xl-7">
                    <div className="row">
                      <div className="col-lg-12">
                        <div style={{ maxWidth: "100%" }}>
                          {/* <!--Animated Block--> */}
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            <h1 className="h1 large-heading has-accent-1 custom-heading">Decko Floor</h1>
                            <div
                              className="ptf-spacer"
                              style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.1875rem", "--ptf-sm": "20px" }}
                            ></div>
                            <p className="fz-24 content">
                              An organization led by <b>Mr. Kirankant Dhiman</b>, who has 25 years of experience in managing and executing interior design and end to end flooring installation projects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <div className="text-center">
                        {/* <!--Mask Image--> */}
                        <div className="ptf-mask-image manager-img">
                          <img
                            src= {About}
                            alt="layer"
                            loading="lazy"
                            style={{
                              zIndex: "1",
                            }}
                          />
                          <p className="fz-24 img-name">Mr. Kirankant Dhiman</p>
                          <p className="fz-24 img-position">(Manneging Director)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="container">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
                Start client Section
              ============================================== */}

              <section className="main-wrap">
                <div className="container">
                  <div className="clients-wrap">
                  <h1 className="h1 large-heading has-accent-1 custom-heading">Our Clients</h1>
                  <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.1875rem", "--ptf-sm": "20px" }}
                ></div>
                    <PreClients />
                    <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3.5rem", "--ptf-md": "2.1875rem", "--ptf-sm": "20px" }}
                ></div>                    
                  </div>
                </div>
              </section>

            <section className="our-mission-section">
              <div className="container">
                <div className="our-mission-wrapper">
                  <div className="ptf-animated-block our-mission-inner" data-aos="fade" data-aos-delay="200">
                    <h3 className="mini-heading">Our Mission</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                  </div>
                  <div className="ptf-animated-block our-mission-inner" data-aos="fade" data-aos-delay="200">
                    <h3 className="mini-heading">Our Vision</h3>
                    <ul className="vision-list">
                      <li><p className="fz-24 dots">•</p><p className="fz-24 content">Our team comprises qualified, trained and skilled professionals who can undertake project of any size at any location</p></li>
                      <li><p className="fz-24 dots">•</p><p className="fz-24 content">We have latest equipment to enable our team to execute the project in timely and efficient manner</p></li>
                      <li><p className="fz-24 dots">•</p><p className="fz-24 content">Attention to detail make our installations look clean and neat</p></li>
                      <li><p className="fz-24 dots">•</p><p className="fz-24 content">Trained to minimize wastage of expensive materials</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            


            {/*=============================================
                Start Our Team Section
              ============================================== */}
            <section
              className="jarallax jarallax-img"
              style={{
                backgroundImage: `url(${
                 process.env.PUBLIC_URL +
                 "/assets/img/services-call-to-action-background.png"
                })`,
              }}
            >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": " 12.5rem", "--ptf-md": "6.25rem" }}
            ></div>
            <ContactJarallax />
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
            
            
          </div>
        </div>
        {/* End ptf-main */}

        {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}
            <section className="main-wrap">
              {/* <!--Spacer--> */}
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-accent-1 custom-heading">Our Associates</h2>
                      <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.1875rem", "--ptf-sm": "20px" }}
                ></div>
                    </div>
                    {/* <!--Spacer--> */}
                  </div>
                </div>
                {/* End .row */}
                <Brand />
                
                {/* End .row */}
              </div>
            </section>


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

export default AboutUs;
