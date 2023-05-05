import React from "react";
import { Helmet } from "react-helmet";
import HeaderAgency from "../../../components/header/HeaderAgency";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";

const ServiceDetails = () => {
  return (
    <div>
      <Helmet>
        <title>DeckOFloor – The Complete Flooring Solution</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderAgency />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--service-detail">
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
                      <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">End-to-end Flooring</h1>
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
          {/* Top Portion */}

          <section className="main-wrap">
          <div className="container">
            <div className="row service-align-item">
               {/* <!--Spacer--> */}
               <div className="col-12">
                <div className="work-list">
                  <h1 className="h1 large-heading sarvice-heading">Flooring</h1>
                  <p>We supply and install flooring projects for a range of business sectors. Whether you prefer engineered wood or solid wood, the professional floor fitters at Decko Floor will ensure that you get reliable installation services at affordable prices.</p>
                  <ul>
                    <li><p className="dots">•</p><p className="fz-24 content">Engineered wooden flooring</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Laminated wooden flooring</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">LPT/LVT/EVT flooring</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Solid wood/ Hard wood flooring</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Artificial turf/ Grass</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">WPC Deck flooring</p></li>
                  </ul>
                  <div className="work-images-middle">
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/wooden-floor/wooden1.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/wooden-floor/wooden2.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/wooden-floor/wooden3.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/wooden-floor/wooden4.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/wooden-floor/wooden5.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/wooden-floor/wooden6.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/wooden-floor/wooden7.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/wooden-floor/wooden8.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                  </div>
                  <a className="fz-24 get-button" href="/contact">Enquiry</a>
                  </div>
              </div>
               {/* <!--Spacer--> */}
              <div className="ptf-spacer" style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem", "--ptf-sm": "40px" }}></div>
              <div className="ptf-divider"></div>
              <div className="ptf-spacer" style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem", "--ptf-sm": "40px" }}></div>
              <div className="col-12">
                <div className="work-list">
                  <h1 className="h1 large-heading sarvice-heading">Carpets</h1>
                  <p>Our extensive range of hard-wearing, decorative, anti-slip and cost-effective flooring products create an aesthetically pleasing experience for customers, whilst still being durable enough to cope with high footfall.</p>
                  <p>We also offer an extensive range of Underlays each perfectly suited to specific areas throughout the retail sector. We are the distributor for the Underlay & Adhesive supply for Indian Market with Inter Floor UK for the last 15 years.</p>
                  <ul>
                    <li><p className="dots">•</p><p className="fz-24 content">AX Minister carpets</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Tile carpets</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Machine tufted carpets</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Printed nylon carpets</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Hand tufted carpets</p></li>
                  </ul>
                  <div className="work-images-middle">
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet1.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet2.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet3.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet4.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet5.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet6.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet7.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet8.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                  </div>
                  <a className="fz-24 get-button" href="/contact">Enquiry</a>
                  </div>
              </div>
            </div>
          </div>
          </section>
          {/* End .main content with sidebar */}
        </div>
        {/* End .ptf-page */}
      </div>
      {/* End ptf-main */}

      {/*=============================================
        Start Footer
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
  );
};

export default ServiceDetails;
