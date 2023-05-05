import React from "react";
import Slider from "react-slick";

const clientImages = [
  {
    name: "Set 1",
    imgset: [
        {
        image: `01_Prestige-Group`,
        },
        {
        image: `02_Hilton`,
        },
        {
        image: `02_westine`,
        },
        {
        image: `03_Vivanta`,
        },
        {
        image: `05_Taj`,
        },
        {
        image: `06_Trident-Hotes`,
        },
        {
        image: `07_Umrao`,
        },
        {
        image: `08_Radisson`,
        },
        {
        image: `02_Hilton`,
        },
        {
        image: `05_Taj`,
        },
    ], 
  },
  {
    name: "Set 2",
    imgset: [
        {
        image: `02_Hilton`,
        },
        {
        image: `05_Taj`,
        },
        {
        image: `02_westine`,
        },
        {
        image: `03_Vivanta`,
        },
        {
        image: `05_Taj`,
        },
        {
        image: `06_Trident-Hotes`,
        },
        {
        image: `07_Umrao`,
        },
        {
        image: `08_Radisson`,
        },
        {
        image: `02_Hilton`,
        },
        {
        image: `05_Taj`,
        },
    ], 
  }
];

const PreClients = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {clientImages.map((val, i) => (
          <div className="client-slide" key={i}>
            <div className="clients">
                {val.imgset.map((val, item) => (
                <div className="client-img" data-aos="fade"
                      data-aos-delay="100"  key={item}>
                    <img
                        src={process.env.PUBLIC_URL + `/assets/img/root/pre-clients/${val.image}.jpg`}
                        alt="Our Project"
                        loading="lazy"
                    />
                </div>
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PreClients;
