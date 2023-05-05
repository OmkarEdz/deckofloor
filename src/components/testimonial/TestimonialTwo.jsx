import React from "react";
import Slider from "react-slick";
import QuoteImg from '../../assets/img/root/quote.svg';

const testimonialContent = [
  {
    name: "Prathamesh Lodha",
    company: "COO XYZ Associats Delhi",
    description: `A well finished flooring brings life to the spaces! We, at Decko Floor, provide end-to-end solution for all flooring requirements. We have a wide portfolio of flooring & interior allied services.`,
  },
  {
    name: "Nimesh Aagarwal",
    company: "COO XYZ Associats Delhi",
    description: `A well finished flooring brings life to the spaces! We, at Decko Floor, provide end-to-end solution for all flooring requirements. We have a wide portfolio of flooring & interior allied services.`,
  },
  {
    name: "Lorem Ipsum",
    company: "Lorem Ipsum",
    description: `A well finished flooring brings life to the spaces! We, at Decko Floor, provide end-to-end solution for all flooring requirements. We have a wide portfolio of flooring & interior allied services.`,
  },
];

const TestimonialTwo = () => {
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          fade: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="arrow-none">
        {testimonialContent.map((val, i) => (
          <div className="swiper-slide" key={i}>
            <div
              className="ptf-twitter-review ptf-twitter-review--style-1 review-style"
              key={i}
            >
              <p className="quoteIcon">
                <img src={QuoteImg} alt="Quote Image" />
              </p>
              <div className="ptf-twitter-review__content">
                <p>{val.description}</p>
              </div>
              <div className="ptf-twitter-review__header">
                <div className="ptf-twitter-review__meta">
                  <h6 className="ptf-twitter-review__author">{val.name}</h6>
                  <div className="ptf-twitter-review__info">{val.company}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialTwo;
