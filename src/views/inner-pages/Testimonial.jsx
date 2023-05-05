import React from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderAgency from "../../components/header/HeaderAgency";

const TestimonialPage = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--testimonial">
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
                      src={process.env.PUBLIC_URL + `/assets/img/root/About-US-Banner.jpg`}
                      alt="Zeplin"
                      loading="lazy"
                    />
                  </p>
                  <div className="container">
                    <div className="textOnBanner">
                      <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">Testimonials</h1>
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
              <div className="container">
                <div className="testimonial-wrapper" data-aos="fade"data-aos-delay="100">
                  <div className="testimonials-box-wrap">
                    <div className="testimonial-box">
                      <p className="QutoeImgInner"><img src={process.env.PUBLIC_URL + `/assets/img/root/quote.svg`} alt="Quote Image" /></p>
                      <p className="testimonial-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <h6 className="testimonial-name">Lorem Ipsum</h6>
                      <p className="testimonial-position">COO XYZ Associats Delhi</p>
                    </div>
                  </div>
                  <div className="testimonials-box-wrap">
                     <div className="testimonial-box">
                     <p className="QutoeImgInner"><img src={process.env.PUBLIC_URL + `/assets/img/root/quote.svg`} alt="Quote Image" /></p>
                      <p className="testimonial-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <h6 className="testimonial-name">Lorem Ipsum</h6>
                      <p className="testimonial-position">COO XYZ Associats Delhi</p>
                     </div>
                  </div>
                  <div className="testimonials-box-wrap">
                    <div className="testimonial-box">
                    <p className="QutoeImgInner"><img src={process.env.PUBLIC_URL + `/assets/img/root/quote.svg`} alt="Quote Image" /></p>
                      <p className="testimonial-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <h6 className="testimonial-name">Lorem Ipsum</h6>
                      <p className="testimonial-position">COO XYZ Associats Delhi</p>
                    </div>
                  </div>
                  <div className="testimonials-box-wrap">
                     <div className="testimonial-box">
                     <p className="QutoeImgInner"><img src={process.env.PUBLIC_URL + `/assets/img/root/quote.svg`} alt="Quote Image" /></p>
                      <p className="testimonial-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <h6 className="testimonial-name">Lorem Ipsum</h6>
                      <p className="testimonial-position">COO XYZ Associats Delhi</p>
                     </div>
                  </div>
                </div>
              </div>
            </section>

            {/*=============================================
                Start client Section
              ============================================== */}



            {/*=============================================
                Start Service Section
              ============================================== */}


            {/*=============================================
                Start Our Team Section
              ============================================== */}
            
            
          </div>
        </div>
        {/* End ptf-main */}

        {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}


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

export default TestimonialPage;
