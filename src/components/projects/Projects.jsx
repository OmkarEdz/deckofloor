import React from "react";
import Slider from "react-slick";

const projectContent = [
  {
    name: "Taj Hotels",
    work: "Wooden Flooring",
    image: `taj`,
  },
  {
    name: "Mumbai Airport",
    work: "Carpet, Plan",
    image: `mumbai`,
  },
  {
    name: "Delhi Airport",
    work: "Carpet, Plan",
    image: `delhi`,
  },
  {
    name: "Lorem Ipsum",
    work: "Carpet, Plan",
    image: `mumbai`,
  },
];

const Project = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrow: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrow: true,
          dots: false,
          centerMode: true,
          centerPadding: '10%',
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
                  src={process.env.PUBLIC_URL + `/assets/img/root/projects/${val.image}.png`}
                  alt="Our Project"
                  loading="lazy"
                />
                <p className="img_text">{val.work}</p>
                <h3 className="img_name">{val.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Project;
