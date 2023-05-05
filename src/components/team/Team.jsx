import React from "react";

const teamContent = [
  {
    delayAnimation: "0",
    img: "client-img",
  },
  {
    delayAnimation: "100",
    img: "client-img",
  },
  {
    delayAnimation: "200",
    img: "client-img",
  },
  {
    delayAnimation: "300",
    img: "client-img",
  },
  {
    delayAnimation: "0",
    img: "client-img",
  },
  {
    delayAnimation: "100",
    img: "client-img",
  },
  {
    delayAnimation: "200",
    img: "client-img",
  },
  {
    delayAnimation: "300",
    img: "client-img",
  },
];

const Team = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect">
            <div className="ptf-team-member__avatar">
              <a href="#">
                {" "}
                <img
                  src={process.env.PUBLIC_URL + `/assets/img/root/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
