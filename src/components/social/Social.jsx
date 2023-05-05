import React from "react";

const SocialShare = [
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/",
    iconClass: "facebook",
  },
  {
    iconName: "socicon-linkedin",
    link: "https://www.instagram.com/",
    iconClass: "linkedin",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/",
    iconClass: "instagram",
  },
];
const Social = () => {
  return (
    <div className="ptf-offcanvas-menu__socials contSocWrap">
      {/* <!--Social Icon--> */}
      {SocialShare.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3 contSocIcon ${icon.iconClass}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.iconName}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
