import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

const HeroAgency = () => {
  const [isOpen, setOpen] = useState(false);

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="ptf-showcase-image image-1 bg-img-1">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                International<br />Airports
              </h1>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>

              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                provide end-to-end solution for all flooring requirements
              </p>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>

            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

        <div className="ptf-showcase-image image-2 bg-img-2">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                {/* <span className="has-accent-1">Swiss</span> Style <br /> */}
                Luxury 5-Star <br />Hotels and Banquet
              </h1>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                Like any great agency, we are only as good as the result we
                deliver of our recent work.
              </p>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

        <div className="ptf-showcase-image image-3 bg-img-3">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                Turnkey Interior <br />Solutions
              </h1>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                Like any great agency, we are only as good as the result we
                deliver of our recent work.
              </p>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              
            </div>
          </div>
        </div>

        <div className="ptf-showcase-image image-3 bg-img-4">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                Multiplexes and <br />Auditorium
              </h1>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                Like any great agency, we are only as good as the result we
                deliver of our recent work.
              </p>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              
            </div>
          </div>
        </div>

        <div className="ptf-showcase-image image-3 bg-img-5">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                Casinos and <br />Cruise
              </h1>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                Like any great agency, we are only as good as the result we
                deliver of our recent work.
              </p>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}
      </Slider>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
    </>
  );
};

export default HeroAgency;
