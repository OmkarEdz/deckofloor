import React from "react";
import { Helmet } from "react-helmet";
import CounterTwo from "../../components/counter/CounterTwo";
import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderAgency from "../../components/header/HeaderAgency";
import HeroAgency from "../../components/hero/HeroAgency";
import TestimonialTwo from "../../components/testimonial/TestimonialTwo";
import aboutImg from '../../assets/img/root/bg-img.jpg';
import Project from "../../components/projects/Projects";
import ServiceOne from "../../components/service/ServiceOne";
import PreClients from "../../components/premium-clients/PreClients";
import Brand from "../../components/brand/Brand";

const HomeAgency = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-agency">
      <Helmet>
        <title>DeckOFloor – The Complete Flooring Solution</title>
      </Helmet>
      {/* End Page SEO Content */}

      <div className="ptf-site-wrapper__inner">
        <HeaderAgency />
        {/* End Header Agency */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-agency">
            {/*=============================================
          Start Our Hero Section howcase 3
          ============================================== */}
            <div className="ptf-showcase-3 swiper-container home-slider">
              <div className="swiper-wrapper">
                <HeroAgency />
              </div>
            </div>

            {/*=============================================
          Start Call to Counter section
          ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.75rem", "--ptf-sm": "40px" }}
              ></div>
              <div className="container">
                <div
                  className="row align-items-center counterWrapper"
                  style={{ "--bs-gutter-y": "2rem" }}
                >
                  <div className="col-12 col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      {/* <!--Phone Block--> */}
                      <div className="ptf-phone-block">
                        <div className="ptf-phone-block__icon">
                          <i className="lnil lnil-phone"></i>
                        </div>
                        <div className="ptf-phone-block__caption">
                          Call Us 
                          <br />
                          <span> Directly</span>
                        </div>
                        <div className="ptf-phone-block__phone">
                          <a href="tel:+91 98225 77444">+91 98225 77444</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End .col */}
                  <CounterTwo />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.75rem", "--ptf-sm": "40px" }}
              ></div>
            </section>

            <section>
              <div className="container">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>
            {/* End .ptf-devider */}

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.4rem", "--ptf-md": "4.0625rem", "--ptf-sm": "40px" }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-10">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-accent-1 custom-heading">
                        Interior, Carpets, Flooring
                      </h2>
                    </div>
                  </div>
                  <div className="col-xl-2 d-none d-xl-block">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <div className="has-black-color fz-90 lh-1 text-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          style={{ height: "1em" }}
                          viewBox="0 0 17 17"
                        >
                          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.25rem", "--ptf-md": "3.125rem", "--ptf-md": "30px" }}
              ></div>
            </section>
            {/* End  Advertising Big Title */}

            <section className="ptf-custom--3993 jarallax about_section_wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-lg-4 d-flex align-items-center">
                    <div className="about-sec-img">
                      <img src={aboutImg} alt="" loading="lazy" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-8 pl-60">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "5.125rem", "--ptf-lg": "0" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h6 className="about_sec_head has-accent-1 text-uppercase">
                        About Us
                      </h6>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-sm": "20px" }}
                      ></div>
                      <h3 className="miniHead">
                      Flooring is an integral and luxury aspect of any contemporary, classique or rustique interior design. A well finished flooring brings life to the spaces !
                      </h3>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-sm": "20px" }}
                      ></div>
                      <p className="about-desc">
                      We, at <b>Decko Floor</b>, provide end-to-end solution for all flooring requirements. We have a wide portfolio of flooring & interior allied services.
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "5.125rem", "--ptf-lg": "0" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            {/* End  Advertising Banner */}

            {/*=============================================
          Start Service section
          ============================================== */}

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.75rem", "--ptf-md": "5rem", "--ptf-sm": "40px" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1 custom-heading">What We Do</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.1875rem", "--ptf-sm": "20px" }}
                ></div>
                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "10.625rem",
                    "--bs-gutter-y": " 5.3125rem",
                  }}
                >
                  <div className="col-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block we-do-section"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      {/* <!--Services List--> */}
                      <ServiceOne />
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8rem", "--ptf-md": "5rem", "--ptf-sm": "40px" }}
              ></div>
            </section>

            {/*=============================================
          Start Our Project section
          ============================================== */}
          <section className="our-project-wrapper">
          <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "2rem" }}
              ></div>
            <div className="container">
              <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1 custom-heading">Our Projects</h2>
                </div>
                 <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2rem" }}
              ></div>
                <div className="our_slider_wrap">
                  <Project />
                </div>
            </div>
            <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "4rem", "--ptf-sm": "2.5rem" }}
              ></div>
          </section>
            {/* <!--Spacer--> */}
              {/* <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.813rem", "--ptf-md": "2rem", "--ptf-sm": "40px" }}
              ></div> */}
            {/*=============================================
          Start Our Client section
          ============================================== */}
            <div className="container">
            <section className="our-client-wrapper clients-wrap">
              {/* <!--Divider--> */}
                {/* <div className="ptf-divider"></div> */}
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.5rem", "--ptf-md": "2rem", "--ptf-sm": "30px" }}
              ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1 custom-heading">Our Clients</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.8125rem", "--ptf-sm": "25px" }}
                ></div>
              
              <PreClients />
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.8rem", "--ptf-md": "2.5rem", "--ptf-sm": "30px" }}
              ></div>
              {/* <!--Divider--> */}
                {/* <div className="ptf-divider"></div> */}
            </section>
            </div>

            
            {/*=============================================
          Start Testimonial section
          ============================================== */}
            <section className="hide_force">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5.75rem", "--ptf-md": "4.375rem", "--ptf-sm": "30px" }}
              ></div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-accent-1 custom-heading">
                        What people say about us
                      </h2>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": " 3.125rem", "--ptf-sm": "30px" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Content Slider--> */}
                  <div className="ptf-content-slider swiper-container ">
                    <div className="swiper-wrapper testimonial-100-spacer testimonial-slider-wrap">
                      <TestimonialTwo />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": " 5rem", "--ptf-sm": "40px" }}
              ></div>
            </section>

            {/*=============================================
          Start Associated With section
          ============================================== */}
            <section className="main-wrap">
              {/* <!--Spacer--> */}
              <div className="container">
              <div className="ptf-divider"></div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": " 3.125rem", "--ptf-sm": "40px" }}
              ></div>
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

            {/*=============================================
          Start Footer section
          ============================================== */}
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
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}
    </div>
  );
};

export default HomeAgency;
