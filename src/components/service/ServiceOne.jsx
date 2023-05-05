import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    icon: "lnil lnil-3d",
    title: "End-to-end Flooring Solution",
    descriptions: `Engineered wooden flooring, Laminated wooden flooring, LPT/LVT/EVT flooring, AX Minister carpets, Tile carpets, Machine tufted carpets, Printed nylon carpets, 
    Hand tufted carpets.`,
    link: '/service-details',
  },
  {
    icon: "lnil lnil-3d",
    title: "Interior Design Projects",
    descriptions: `Residential, Commercial, Retail, Hospitality`,
    link: '/interior-Design',
  },
  {
    icon: "lnil lnil-3d",
    title: "Project Planning and Estimation",
    descriptions: `We build and activate brands throung cultural insight strategic vision.`,
    link: '/project-planning',
  },
  {
    icon: "lnil lnil-3d",
    title: "Maintenance of Carpets and Flooring",
    descriptions: `Cleaning & polishing of wooden flooring, Carpet dust removal, Carpet dry cleaning, Reconditioning of carpets, Minor / major damage repairs to wooden floors, Dry foam shampooing & Wet shampooing, Hygienic wash to the carpets.`,
    link: '/maintenance',
  }
];

const ServiceOne = () => {
  return (
    <>
      {serviceContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box">
            <Link
              to={val.link}
              className="ptf-service-box__link"
            ></Link>
            <div className="ptf-service-box__icon">
              <i className={val.icon}></i>
            </div>
            <div className="ptf-service-box-cont">
              <h5 className="ptf-service-box__title">
                {val.title}
              </h5>
              <div className="ptf-service-box__content">
                <p>{val.descriptions}</p>
              </div>
            </div>
            <div className="ptf-service-box__arrow">
              <i className="lnil lnil-chevron-right"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceOne;
