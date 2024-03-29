import React from "react";

const socialList = [
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/",
  },
  {
    iconName: "socicon-linkedin",
    link: "https://www.instagram.com/",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/",
  }
];

const SocialTwo = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
    </>
  );
};

export default SocialTwo;
