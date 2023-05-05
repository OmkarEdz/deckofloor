import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "End-to-end flooring solution",
  "Interior design projects",
  "Handtufted Carpet",
  "Wooden Flooring",
  "Underlay",
  "Import Supply and Installation",
  "Maintenance of carpets and flooring",
  "Project planning and estimation",
];

const ListOne = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-5"
      style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
    >
      {listContent.map((val, i) => (
        <li key={i}>
          <Link className="we-do-link" to="/service-details">{val}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListOne;
