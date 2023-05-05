import React from "react";
import Slider from "react-slick";

const projectContent = [
  {
    image: `flooring-1`,
  },
  {
    image: `flooring-2`,
  },
  {
    image: `flooring-3`,
  },
  {
    image: `flooring-4`,
  },
];

const SalesSlidertwo = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {projectContent.map((val, i) => (
          <div className="swiper-slide" key={i}>
            <div className="project_items">
                <img
                  src={process.env.PUBLIC_URL + `/assets/img/root/services/${val.image}.jpg`}
                  alt="Sale Image"
                  loading="lazy"
                />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SalesSlidertwo;