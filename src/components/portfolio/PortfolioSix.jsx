import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const portfolioMenu = [
  "All",
  "Carpets",
  "Carpets Tiles",
  "Underlay",
  "Wooden Flooring",
  "Outdoor Flooring",
  "Vinyl/PVC Flooring",
  "Flooring Accessories",
  "Window Blinds",
];

const portfolioContent = [
  {
    tabContent: [
      { img: "gallery1", title: "Hand Tufted Rugs & Wall to Wall"},
      { img: "gallery2", title: "Axminster Carpet"},
      { img: "gallery3", title: "Printed Machine Tufted Nylon Carpet"},
      { img: "gallery4", title: "Broadloom Loop Pile Carpet"},
      { img: "gallery5", title: "Nylon Tiles / Planks"},
      { img: "gallery6", title: "PET Tiles"},
      { img: "flooring3", title: "Imported Underlays for Carpet"},
      { img: "flooring4", title: "Local Underlays for Carpet"},
      { img: "insta1", title: "Wooden Flooring Underlays"},
      { img: "insta2", title: "Acoustic Underlays for sound proofing"},
      { img: "insta3", title: "Engineered Wood"},
      { img: "insta5", title: "Solid / Hard Wood"},
      { img: "main1", title: "Laminate Flooring"},
      { img: "main2", title: "SPC (Click N Lock)"},
      { img: "main3", title: "Decking"},
      { img: "main4", title: "WPC Flooring"},
      { img: "under1", title: "Artificial Grass"},
      { img: "under2", title: "Gym Flooring"},
      { img: "under3", title: "Sports Vinyl"},
      { img: "under4", title: "Vinyl Rolls / Planks"},
      { img: "under4", title: "Skirting (Laminated / wooded)"},
      { img: "under4", title: "T Profile"},
      { img: "under4", title: "Reducers"},
      { img: "under4", title: "Roller Blinds"},
      { img: "under4", title: "Vertical Blinds"},
      { img: "under4", title: "S Contour Blinds"},
    ],
  },
  {
    tabContent: [
      { img: "gallery1", title: "Hand Tufted Rugs & Wall to Wall"},
      { img: "gallery2", title: "Axminster Carpet"},
      { img: "gallery3", title: "Printed Machine Tufted Nylon Carpet"},
      { img: "gallery4", title: "Broadloom Loop Pile Carpet"},
    ],
  },
  {
    tabContent: [
      { img: "gallery5", title: "Nylon Tiles / Planks"},
      { img: "gallery6", title: "PET Tiles"},
    ],
  },
  {
    tabContent: [
      { img: "insta1", title: "Imported Underlays for Carpet"},
      { img: "insta2", title: "Local Underlays for Carpet"},
      { img: "insta3", title: "Wooden Flooring Underlays"},
      { img: "insta5", title: "Acoustic Underlays for sound proofing"},
    ],
  },
  {
    tabContent: [
      { img: "main1", title: "Engineered Wood"},
      { img: "main2", title: "Solid / Hard Wood"},
      { img: "main3", title: "Laminate Flooring"},
      { img: "main4", title: "SPC (Click n Lock)"},
    ],
  },
  {
    tabContent: [
      { img: "under1", title: "Decking"},
      { img: "under2", title: "WPC Flooring"},
      { img: "under3", title: "Artificial Grass"}
    ],
  },
  {
    tabContent: [
      { img: "under1", title: "Gym Flooring"},
      { img: "under2", title: "Sports Vinyl"},
      { img: "under3", title: "Vinyl Rolls / Planks"}
    ],
  },
  {
    tabContent: [
      { img: "under1", title: "Skirting (Laminated / wooded)"},
      { img: "under2", title: "T Profile"},
      { img: "under3", title: "Reducers"}
    ],
  },
  {
    tabContent: [
      { img: "under1", title: "Roller Blinds"},
      { img: "under2", title: "Vertical Blinds"},
      { img: "under3", title: "S Contour Blinds"}
    ],
  },
];

const PortfolioSix = () => {
  return (
    <>
      <Tabs>
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block tabWrapper" data-aos="fade" data-aos-delay="0">
          <TabList className="ptf-filters ptf-filters--style-1 cust-tabbing">
            {portfolioMenu.map((item, i) => (
              <Tab className="filter-item " key={i}>
                <span>{item}</span>
              </Tab>
            ))}
          </TabList>
        </div>

        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
        ></div>
        <div className="container">
        {portfolioContent.map((item, i) => (
          <TabPanel key={i}>
            {/* {/* <!--Animated Block--> */}

            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <div
                className="ptf-isotope-grid row custom-img-box-wrapper"
                style={{
                  "--bs-gutter-x": "4.75rem",
                  "--bs-gutter-y": "4.75rem",
                }}
              >
                {item.tabContent.map((singleItem, i) => (
                  <div className="custom-img-box" key={i}>
                    <article className="ptf-work ptf-work--style-1">
                      <div className="ptf-work__media">
                        <Link
                          className="ptf-work__link"
                          to="/works-showcase"
                        ></Link>
                        <img
                          src={process.env.PUBLIC_URL + `/assets/img/portfolio/${singleItem.img}.png`}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="ptf-work__meta img-title-wrap">
                        {/* <div className="ptf-work__category">
                          {singleItem.meta}
                        </div> */}
                        <h4 className="ptf-work__title img_title">
                          <Link to="/works-showcase">{singleItem.title}</Link>
                        </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                    </article>
                  </div>
                ))}
                {/* End .col */}
              </div>
            </div>

            {/* End portfolio */}
          </TabPanel>
        ))}
        </div>
      </Tabs>
    </>
  );
};

export default PortfolioSix;
