import React from "react";
import { Helmet } from "react-helmet";
import HeaderAgency from "../../../components/header/HeaderAgency";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";

const Maintenance = () => {
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
                      <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">Maintenance of Carpets and Flooring</h1>
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
              <div className="col-12">
                <div className="work-list">
                  <h1 className="h1 large-heading sarvice-heading">Maintenance of Carpets and Flooring</h1>
                  <p>We also provide periodical / annual maintenance services for wooden flooring and carpets. That includes…</p>
                  <ul>
                    <li><p className="dots">•</p><p className="fz-24 content">Cleaning & polishing of wooden flooring</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Minor / major damage repairs to wooden floors</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Carpet dust removal</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Carpet dry cleaning</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Dry foam shampooing & Wet shampooing</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Hygienic wash to the carpets (Deep cleaning & Steam cleaning)</p></li>
                    <li><p className="dots">•</p><p className="fz-24 content">Reconditioning of carpets</p></li>
                  </ul>
                  <div className="work-images-middle">
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/services/main2.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/services/main4.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/maintenance/maintenance3.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/maintenance/maintenance4.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/maintenance/maintenance5.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/maintenance/maintenance6.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/maintenance/maintenance7.jpg`} alt="Sale Image" loading="lazy" />
                    </div>
                    <div className="project_items">
                      <img src={process.env.PUBLIC_URL + `/assets/img/root/maintenance/maintenance8.jpg`} alt="Sale Image" loading="lazy" />
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

export default Maintenance;
