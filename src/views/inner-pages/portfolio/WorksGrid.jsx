import React from "react";
import { Helmet } from "react-helmet";
import HeaderAgency from "../../../components/header/HeaderAgency";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import PortfolioSix from "../../../components/portfolio/PortfolioSix";
import RelatedPortfolio from "../../../components/portfolio/RelatedPortfolio";


const WorksGrid = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-grid">
      <Helmet>
        <title>DeckOFloor – The Complete Flooring Solution</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
      <HeaderAgency />
        {/* End  HeaderHomeDefault */}

        <div className="main bgGrey">
          <div className="ptf-page ptf-page--portfolio-grid">
            
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
                      <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">Product Portfolio</h1>
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
              {/*=============================================
                Start Portfolio main 
                ============================================== */}
                <PortfolioSix />
              
            </section>


            {/*=============================================
            Start Portfolio More 
            ============================================== */}
            
          </div>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

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
    // End .ptf-is--blog-grid
  );
};

export default WorksGrid;
