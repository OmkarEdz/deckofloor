import React from "react";
import Slider from "react-slick";

const brandContent = [
  {
    delayAnimation: "0",
    hoverBg: "#fcf8f4",
    imgHeight: "85px",
    imgName: "asso-1",
    title: "Scon",
  },
  {
    delayAnimation: "100",
    hoverBg: "#f3f7fc",
    imgHeight: "78px",
    imgName: "asso-2",
    title: "Brintons",
  },
  {
    delayAnimation: "200",
    hoverBg: "#f9fcf3",
    imgHeight: "90px",
    imgName: "asso-3",
    title: "Interfloor(UK)",
  },
  {
    delayAnimation: "400",
    hoverBg: "#fdf4fb",
    imgHeight: "62px",
    imgName: "asso-5",
    title: "Welspun",
  },
  {
    delayAnimation: "500",
    hoverBg: "#fdf4fb",
    imgHeight: "77px",
    imgName: "asso-7",
    title: "VK Direct(UK)",
  },
];

const Brand = () => {
  const settings = {
    dots: false,
    mobileFirst: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 3000,
        settings: "unslick"
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          cssEase: 'linear'
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          cssEase: 'linear'
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          cssEase: 'linear'
        },
      },
    ],
  };
  return (
    <Slider {...settings}  className="asso-items-wrapper">
      {brandContent.map((item, i) => (
        <div className="asso-items" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Partner Box--> */}
            <div
              className="ptf-partner-box"
              style={{
                "--ptf-hover-background": item.hoverBg,
                "--ptf-image-height": item.imgHeight,
              }}
            >
              <div className="ptf-partner-box__image">
                <img
                  src={process.env.PUBLIC_URL + `/assets/img/root/asso-img/${item.imgName}.png`}
                  alt="Zeplin"
                  loading="lazy"
                />
              </div>
              <div className="ptf-partner-box__title">
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Brand;
