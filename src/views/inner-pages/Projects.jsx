import React from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderAgency from "../../components/header/HeaderAgency";

const ProjectsPage = () => {
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
                      <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">Projects</h1>
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

            <section className="project-wrapper">
              <div className="container">
                <div className="project-wrap">
                  <div className="letest-projects">
                    <div className="letest-content-wrap">
                      <h2 className="letest_heading">Latest Projects</h2>
                    </div>
                    <div className="new-prj-wrap">
                      <div className="new-prj-item">
                        <div className="logo-prj">
                          <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/taj/taj.png`} alt="Sale Image" loading="lazy" />
                          <ul className="prj-points">
                            <li>Wooden Flooring</li>
                            <li>Carpet</li>
                            <li>Window Blinds</li>
                          </ul>
                        </div>
                        <div className="work-images-middle">
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/services/flooring-4.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/taj/taj2.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/taj/taj3.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/taj/taj4.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/taj/taj5.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/taj/taj6.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                        </div>
                      </div>
                      <div className="new-prj-item">
                        <div className="logo-prj">
                          <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/mumbai-airport/logo.png`} alt="Sale Image" loading="lazy" />
                          <ul className="prj-points">
                            <li>Wooden Flooring</li>
                            <li>Carpet</li>
                            <li>Window Blinds</li>
                          </ul>
                        </div>
                        <div className="work-images-middle">
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet7.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet4.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet2.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet3.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet5.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/carpets/carpet6.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                        </div>
                      </div>
                      <div className="new-prj-item">
                        <div className="logo-prj">
                          <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/delhi-airport/logo.png`} alt="Sale Image" loading="lazy" />
                          <ul className="prj-points">
                            <li>Wooden Flooring</li>
                            <li>Carpet</li>
                            <li>Window Blinds</li>
                          </ul>
                        </div>
                        <div className="work-images-middle">
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/delhi-airport/delhi1.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/delhi-airport/delhi2.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/delhi-airport/delhi3.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/delhi-airport/delhi4.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/delhi-airport/delhi5.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/delhi-airport/delhi6.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                        </div>
                      </div>
                      <div className="new-prj-item">
                        <div className="logo-prj">
                          <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/sayaji-hotel/logo.png`} alt="Sale Image" loading="lazy" />
                          <ul className="prj-points">
                            <li>Wooden Flooring</li>
                            <li>Carpet</li>
                            <li>Window Blinds</li>
                          </ul>
                        </div>
                        <div className="work-images-middle">
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/sayaji-hotel/sayaji1.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/sayaji-hotel/sayaji2.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/sayaji-hotel/sayaji3.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/sayaji-hotel/sayaji4.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/sayaji-hotel/sayaji5.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                          <div className="project_items">
                            <img src={process.env.PUBLIC_URL + `/assets/img/root/projects-page/sayaji-hotel/sayaji6.jpg`} alt="Sale Image" loading="lazy" />
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
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

export default ProjectsPage;
