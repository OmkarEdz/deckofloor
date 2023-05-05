import React from "react";
import Slider from "react-slick";

const associatedContent = [
  {
    image: `asso-1`,
  },
  {
    image: `asso-2`,
  },
  {
    image: `asso-3`,
  },
  {
    image: `asso-5`,
  },
  {
    image: `asso-7`,
  }
];

const Associated = () => {
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
    <>
      <Slider {...settings} className="associated-list">
        {associatedContent.map((val, i) => (
            <div className="associated-item" key={i}>
                <div className="associated-list-item">
                    <p className="associated-img">
                        <img src={process.env.PUBLIC_URL + `/assets/img/root/asso-img/${val.image}.png`} alt="" loading="lazy" />
                    </p>
                </div>
            </div> 
        ))}
      </Slider>
    </>
  );
};

export default Associated;
