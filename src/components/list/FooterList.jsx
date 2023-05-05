import React from "react";
import { Link } from "react-router-dom";

const footerItems = [
  { itemName: "End-to-end flooring solution", link: "/service-details" },
  { itemName: "Interior design projects", link: "/interior-Design" },
  { itemName: "Project planning and estimation", link: "/service-details" },
  { itemName: "Maintenance of carpets and flooring", link: "/maintenance" },
];

const FooterList = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
        <li key={i}>
          <Link to={item.link}>{item.itemName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
