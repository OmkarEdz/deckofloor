import React from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderAgency from "../../components/header/HeaderAgency";

const ClientsPage = () => {
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
                      src={process.env.PUBLIC_URL + `/assets/img/root/About-US-Banner.jpg`}
                      alt="Zeplin"
                      loading="lazy"
                    />
                  </p>
                  <div className="container">
                    <div className="textOnBanner">
                      <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">Clients</h1>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.125rem", "--ptf-lg": "0" }}
                      ></div>
                      <p className="fz-24 has-white-color text-center" style={{ maxWidth: "34.375rem", margin: "0 auto" }}>We have also executed projects of major airports within India for carpets installation. Many corporate houses have availed our services for wooden flooring, carpets and artistic services….</p>
                    </div>
                    <div className="backdrop"></div>
                  </div>
            </div>
          </section>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "7rem" }}
                      ></div>
            <section className="client-page-main">
                <div className="container">
                  <div className="clients-wrap client-page-wrapper">
                    <div className="row clients">
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="100">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/01_Prestige-Group.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/02_Hilton.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/02_westine.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img"data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/03_Vivanta.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="100">
                       <img src={process.env.PUBLIC_URL + `/assets/img/clients/05_Taj.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/06_Trident-Hotes.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/07_Umrao.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/08_Radisson.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/09_Trance-Engineers.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/10_Sheraton.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="100">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/01_Prestige-Group.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/02_Hilton.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/02_westine.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img"data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/03_Vivanta.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="100">
                       <img src={process.env.PUBLIC_URL + `/assets/img/clients/05_Taj.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/06_Trident-Hotes.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/07_Umrao.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/08_Radisson.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/09_Trance-Engineers.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/10_Sheraton.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="100">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/01_Prestige-Group.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/02_Hilton.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/02_westine.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img"data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/03_Vivanta.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="100">
                       <img src={process.env.PUBLIC_URL + `/assets/img/clients/05_Taj.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="200">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/06_Trident-Hotes.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="300">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/07_Umrao.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/08_Radisson.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/09_Trance-Engineers.jpg`} />
                      </div>
                      <div className="col-6 col-md-3 col-lg-3 client-img" data-aos="fade"
                      data-aos-delay="400">
                        <img src={process.env.PUBLIC_URL + `/assets/img/clients/10_Sheraton.jpg`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem" }}
                      ></div>
              </section>           
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

export default ClientsPage;
